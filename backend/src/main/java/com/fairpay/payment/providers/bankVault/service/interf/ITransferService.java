package com.fairpay.payment.providers.bankVault.service.interf;

import com.fairpay.payment.providers.bill.model.Bill;

public interface ITransferService {
    Boolean transferProcessing(Bill bill);
}
