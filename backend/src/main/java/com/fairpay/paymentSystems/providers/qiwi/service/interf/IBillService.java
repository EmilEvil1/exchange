package com.fairpay.paymentSystems.providers.qiwi.service.interf;

import com.fairpay.paymentSystems.providers.qiwi.model.BillQiwi;
import com.fairpay.paymentSystems.providers.qiwi.model.dto.BillQiwiDTO;
import com.qiwi.billpayments.sdk.model.out.BillResponse;
import javassist.NotFoundException;

public interface IBillService {
    boolean createBillByBillResponse(BillResponse response, BillQiwiDTO paymentRequest);

    BillQiwi updateBillStatus(BillResponse response) throws NotFoundException;
}
