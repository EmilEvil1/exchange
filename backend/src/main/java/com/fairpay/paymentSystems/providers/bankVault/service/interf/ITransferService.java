package com.fairpay.paymentSystems.providers.bankVault.service.interf;

import com.fairpay.paymentSystems.providers.bill.model.Bill;

public interface ITransferService {
    Boolean transferProcessing(Bill bill);
}
