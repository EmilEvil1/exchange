package com.fairpay.payment.providers.bankVault.binance.service;

import com.binance.api.client.BinanceApiRestClient;
import com.binance.api.client.domain.account.WithdrawResult;
import com.fairpay.payment.providers.bankVault.binance.service.interf.IBinanceWalletService;
import com.fairpay.payment.providers.bankVault.model.Wallet;
import com.fairpay.payment.providers.bankVault.service.interf.ITransfer;
import com.fairpay.payment.providers.bill.model.Bill;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Log4j2
public class BinanceTransfer implements ITransfer {
    private final IBinanceWalletService iBinanceWalletService;

    @Override
    public boolean supports(Wallet wallet, Bill bill) {
       return wallet.getWalletType().equals("BI") && wallet.getCurrencyList().stream().anyMatch(c -> c.getCurrency().equals(bill.getCryptoCurrency()));
    }

    @Override
    public boolean transfer(Wallet wallet, Bill bill) {
        if(log.isDebugEnabled()) {
            log.debug("binance transfer", wallet, bill);
        }
        BinanceApiRestClient binanceApiRestClient = iBinanceWalletService.getBinanceApiRestClient(wallet);
        WithdrawResult withdraw = binanceApiRestClient.withdraw(bill.getCryptoCurrency(), bill.getWallet(), bill.getCryptoAmount().toString(), null, null);
        System.out.println(withdraw);
        if(log.isDebugEnabled()) {
            log.debug("binance transfer result = " + withdraw.isSuccess());
        }
        return withdraw.isSuccess();
    }
}
