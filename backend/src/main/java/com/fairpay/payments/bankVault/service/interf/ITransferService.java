package com.fairpay.payments.bankVault.service.interf;

import com.fairpay.payments.bill.model.Bill;

public interface ITransferService {
    Boolean transferProcessing(Bill bill);
}
