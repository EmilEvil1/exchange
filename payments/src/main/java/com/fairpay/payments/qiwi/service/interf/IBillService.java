package com.fairpay.payments.qiwi.service.interf;

import com.fairpay.payments.qiwi.model.BillQiwi;
import com.fairpay.payments.qiwi.model.dto.BillQiwiDTO;
import com.qiwi.billpayments.sdk.model.out.BillResponse;
import javassist.NotFoundException;

public interface IBillService {
    boolean createBillByBillResponse(BillResponse response, BillQiwiDTO paymentRequest);

    BillQiwi updateBillStatus(BillResponse response) throws NotFoundException;
}
