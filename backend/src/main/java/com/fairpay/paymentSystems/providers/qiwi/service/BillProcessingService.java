package com.fairpay.paymentSystems.providers.qiwi.service;

import com.fairpay.common.FairpayLogicException;
import com.fairpay.paymentSystems.providers.configs.ApplicationConfigs;
import com.fairpay.paymentSystems.providers.error.QiwiUpdateStatusException;
import com.fairpay.paymentSystems.providers.qiwi.controllers.QiwiResponse;
import com.fairpay.paymentSystems.providers.qiwi.misc.Utils;
import com.fairpay.paymentSystems.providers.qiwi.model.BillQiwi;
import com.fairpay.paymentSystems.providers.qiwi.model.dto.BillQiwiDTO;
import com.fairpay.paymentSystems.providers.qiwi.service.interf.IBillProcessingService;
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
import java.net.URISyntaxException;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Log4j2
public class BillProcessingService implements IBillProcessingService {

    private final ApplicationConfigs applicationConfigs;
    private final BillPaymentClient client;
    private final com.fairpay.paymentSystems.providers.qiwi.service.interf.IBillService IBillService;
    private final Utils utils;


    @Override
    @Transactional
    public String createPayUrl(BillQiwiDTO paymentRequest) {
        log.debug("creating url for qiwi", paymentRequest);
        BillResponse response;
        CreateBillInfo createBillInfo;
        createBillInfo = utils.buildBillInfo(paymentRequest);
        try {
            response = client.createBill(createBillInfo);
        } catch (URISyntaxException e) {
            log.error("Error in creating billing url for", e);
            throw new FairpayLogicException("Error in creating billing url for");
        }
        return response.getPayUrl();
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
