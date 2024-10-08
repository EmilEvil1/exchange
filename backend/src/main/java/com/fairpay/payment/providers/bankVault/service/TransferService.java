package com.fairpay.payment.providers.bankVault.service;

import com.fairpay.payment.providers.bankVault.binance.service.BinanceTransfer;
import com.fairpay.payment.providers.bankVault.dao.WalletPaymentDao;
import com.fairpay.payment.providers.bankVault.model.Wallet;
import com.fairpay.payment.providers.bankVault.service.interf.ITransfer;
import com.fairpay.payment.providers.bankVault.service.interf.ITransferService;
import com.fairpay.payment.providers.bill.model.Bill;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Log4j2
public class TransferService implements ITransferService {

    private final WalletPaymentDao walletPaymentDao;
    private final List<ITransfer> transfers = new ArrayList<>();

    @Autowired
    public TransferService(WalletPaymentDao walletPaymentDao,
                           BinanceTransfer binanceTransfer) {
        this.walletPaymentDao = walletPaymentDao;
        this.transfers.add(binanceTransfer);
    }

    @Override
    public Boolean transferProcessing(Bill bill) {
        Wallet wallet = walletPaymentDao.findWalletByCurrency(bill.getCurrency().toString());
        for (ITransfer iTransfer : transfers) {
            if(iTransfer.supports(wallet, bill)) {
                return iTransfer.transfer(wallet, bill);
            }
        }
        return false;
    }
}
