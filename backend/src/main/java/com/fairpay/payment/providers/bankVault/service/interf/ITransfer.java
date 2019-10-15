package com.fairpay.payment.providers.bankVault.service.interf;

import com.fairpay.payment.providers.bankVault.model.Wallet;
import com.fairpay.payment.providers.bill.model.Bill;

public interface ITransfer {
    boolean supports(Wallet walletType, Bill bill);
    boolean transfer(Wallet wallet, Bill bill);
}
