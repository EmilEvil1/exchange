package com.fairpay.paymentSystems.providers.bankVault.service.interf;

import com.fairpay.paymentSystems.providers.bankVault.model.Wallet;
import com.fairpay.paymentSystems.providers.bill.model.Bill;

public interface ITransfer {
    boolean supports(Wallet walletType, Bill bill);
    boolean transfer(Wallet wallet, Bill bill);
}
