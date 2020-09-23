package com.fairpay.paymentSystems.providers.qiwi.misc.converters;

import com.fairpay.paymentSystems.providers.qiwi.model.BillQiwi;
import com.fairpay.paymentSystems.providers.qiwi.model.dto.BillQiwiDTO;
import com.qiwi.billpayments.sdk.model.out.BillResponse;
import org.springframework.stereotype.Component;

@Component
public class BillConverter {
    public BillQiwi convertBillResponseToBill(BillResponse response, BillQiwiDTO paymentRequest) {
        BillQiwi billQiwi = new BillQiwi();
        billQiwi.setAccount(response.getCustomer().getAccount());
        billQiwi.setEmail(response.getCustomer().getEmail());
        billQiwi.setPhone(response.getCustomer().getEmail());
        billQiwi.setBillId(response.getBillId());
        billQiwi.setChangedDateTime(response.getStatus().getChangedDateTime());
        billQiwi.setCreationDateTime(response.getCreationDateTime());
        billQiwi.setComment(response.getComment());
        billQiwi.setPayUrl(response.getPayUrl());
        billQiwi.setExpirationDateTime(response.getExpirationDateTime());
        billQiwi.setAmount(response.getAmount().getValue());
        billQiwi.setStatus(response.getStatus().getValue().getValue());
        billQiwi.setSiteId(response.getSiteId());
        return billQiwi;
    }
}
