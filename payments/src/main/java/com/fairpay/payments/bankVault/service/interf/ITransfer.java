package com.fairpay.payments.bankVault.service.interf;

import com.fairpay.payments.bankVault.model.Wallet;
import com.fairpay.payments.bill.model.Bill;

public interface ITransfer {
    boolean supports(Wallet walletType, Bill bill);
    boolean transfer(Wallet wallet, Bill bill);
}
