package com.fairpay.payments.advcash.service.interf;

import com.fairpay.payments.advcash.model.dto.BillAdvCashDTO;

public interface IBillAdvCashProcessingService {
    String createPay(BillAdvCashDTO billAdvCashDTO);
}
