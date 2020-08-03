package com.fairpay.paymentSystems.providers.qiwi.service;

import com.fairpay.paymentSystems.providers.bankVault.dao.CurrencyPaymentDao;
import com.fairpay.paymentSystems.providers.qiwi.dao.BillQiwiDAO;
import com.fairpay.paymentSystems.providers.qiwi.misc.converters.BillConverter;
import com.fairpay.paymentSystems.providers.qiwi.model.BillQiwi;
import com.fairpay.paymentSystems.providers.qiwi.model.dto.BillQiwiDTO;
import com.fairpay.paymentSystems.providers.qiwi.service.interf.IBillService;
import com.qiwi.billpayments.sdk.model.out.BillResponse;
import javassist.NotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Log4j2
public class BillService implements IBillService {
    private final BillConverter billConverter;
    private final BillQiwiDAO billQiwiDAO;
    private final CurrencyPaymentDao currencyPaymentDao;

    @Override
    @Transactional
    public boolean createBillByBillResponse(BillResponse response, BillQiwiDTO paymentRequest) {
        BillQiwi bill = billConverter.convertBillResponseToBill(response, paymentRequest);
        bill.setCurrency(response.getAmount().getCurrency().toString());
        billQiwiDAO.save(bill);
        if(log.isDebugEnabled()) {
            log.debug("bill saved to database");
        }
        return true;
    }

    @Override
    @Transactional
    public BillQiwi updateBillStatus(BillResponse response) throws NotFoundException {
        Optional<BillQiwi> billQiwiByBillId = billQiwiDAO.findBillQiwiByBillId(response.getBillId());
        BillQiwi billQiwi = billQiwiByBillId.orElseThrow(() -> new NotFoundException("billQiwi not found"));
        billQiwi.setStatus(response.getStatus().getValue().getValue());
        billQiwi.setChangedDateTime(response.getStatus().getChangedDateTime());
        if(log.isDebugEnabled()) {
            log.debug(response);
        }
        return billQiwiDAO.save(billQiwi);
    }
}
