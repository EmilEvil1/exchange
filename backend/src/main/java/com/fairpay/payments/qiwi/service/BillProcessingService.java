package com.fairpay.payments.qiwi.service;

import com.fairpay.payments.configs.ApplicationConfigs;
import com.fairpay.payments.error.QiwiUpdateStatusException;
import com.fairpay.payments.qiwi.controllers.QiwiResponse;
import com.fairpay.payments.qiwi.misc.Utils;
import com.fairpay.payments.qiwi.model.BillQiwi;
import com.fairpay.payments.qiwi.model.dto.BillQiwiDTO;
import com.fairpay.payments.qiwi.service.interf.IBillProcessingService;
import com.qiwi.billpayments.sdk.client.BillPaymentClient;
import com.qiwi.billpayments.sdk.model.Bill;
import com.qiwi.billpayments.sdk.model.Notification;
import com.qiwi.billpayments.sdk.model.in.CreateBillInfo;
import com.qiwi.billpayments.sdk.model.out.BillResponse;
import com.qiwi.billpayments.sdk.utils.BillPaymentsUtils;
import javassist.NotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.math.BigDecimal;
import java.net.URISyntaxException;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Log4j2
public class BillProcessingService implements IBillProcessingService {

    private final ApplicationConfigs applicationConfigs;
    private final BillPaymentClient client;
    private final com.fairpay.payments.qiwi.service.interf.IBillService IBillService;
    private final Utils utils;

//    @PostConstruct
    public void fdssd() throws URISyntaxException {
        BillQiwiDTO billQiwiDTO = new BillQiwiDTO();
        billQiwiDTO.setCurrency("RUB");
        billQiwiDTO.setWallet("r43r832r88");
        billQiwiDTO.setAmount(BigDecimal.valueOf(199.99));
        System.out.println(createPayUrl(billQiwiDTO));
    }


    @Override
    @Transactional
    public ResponseEntity<?> createPayUrl(BillQiwiDTO paymentRequest) throws URISyntaxException {
        if(log.isDebugEnabled()) {
            log.debug("creating pay", paymentRequest);
        }
        BillResponse response;
        CreateBillInfo createBillInfo;
        createBillInfo = utils.buildBillInfo(paymentRequest);
        response = client.createBill(createBillInfo);
        paymentRequest.setPayUrl(response.getPayUrl());
        IBillService.createBillByBillResponse(response, paymentRequest);
        return ResponseEntity.ok(paymentRequest);
    }

    @Override
    public BillQiwi updateBillStatus(QiwiResponse qiwiResponse, HttpServletRequest httpServletResponse) throws NotFoundException {
        if (checkQiwiPermission(qiwiResponse, httpServletResponse)) {
            return IBillService.updateBillStatus(qiwiResponse.getBillResponse());
        } else throw new QiwiUpdateStatusException("check permission qiwi error");
    }

    private boolean checkQiwiPermission(QiwiResponse qiwiResponse, HttpServletRequest httpServletResponse) {
        Notification notification = new Notification(
                new Bill(
                        qiwiResponse.getBillResponse().getSiteId(),
                        qiwiResponse.getBillResponse().getBillId(),
                        qiwiResponse.getBillResponse().getAmount(),
                        qiwiResponse.getBillResponse().getStatus().getValue()
                ),
                qiwiResponse.getVersion()
        );
        String validSignature = httpServletResponse.getHeader("X-Api-Signature-SHA256");
        return BillPaymentsUtils.checkNotificationSignature(validSignature, notification, applicationConfigs.getQiwiSecretKey()); //true
    }
}
