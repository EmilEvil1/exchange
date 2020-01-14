package com.fairpay.payments.bankVault.service;

import com.fairpay.payments.bankVault.binance.service.BinanceTransfer;
import com.fairpay.payments.bankVault.dao.WalletDao;
import com.fairpay.payments.bankVault.model.Wallet;
import com.fairpay.payments.bankVault.service.interf.ITransfer;
import com.fairpay.payments.bankVault.service.interf.ITransferService;
import com.fairpay.payments.bill.model.Bill;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Log4j2
public class TransferService implements ITransferService {

    private final WalletDao walletDao;
    private final List<ITransfer> transfers = new ArrayList<>();

    @Autowired
    public TransferService(WalletDao walletDao,
                           BinanceTransfer binanceTransfer) {
        this.walletDao = walletDao;
        this.transfers.add(binanceTransfer);
    }

    @Override
    public Boolean transferProcessing(Bill bill) {
        Wallet wallet = walletDao.findWalletByCurrency(bill.getCryptoCurrency());
        for (ITransfer iTransfer : transfers) {
            if(iTransfer.supports(wallet, bill)) {
                return iTransfer.transfer(wallet, bill);
            }
        }
        return false;
    }

//    @PostConstruct
//    void dsf() {
//        BillQiwi billQiwi = new BillQiwi();
//        billQiwi.setWallet("0xdd77ae61687664019a4154413446da7c0233b6d9");
//        billQiwi.setAmount(BigDecimal.valueOf(2.20000000));
//        billQiwi.setCryptoCurrency("USDT");
//        transferProcessing(billQiwi);
//    }
}
