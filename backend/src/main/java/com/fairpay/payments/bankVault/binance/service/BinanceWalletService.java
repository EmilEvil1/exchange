package com.fairpay.payments.bankVault.binance.service;

import com.binance.api.client.BinanceApiAsyncRestClient;
import com.binance.api.client.BinanceApiClientFactory;
import com.binance.api.client.BinanceApiRestClient;
import com.binance.api.client.BinanceApiWebSocketClient;
import com.fairpay.payments.bankVault.binance.dao.BinanceWalletDao;
import com.fairpay.payments.bankVault.binance.model.BinanceWallet;
import com.fairpay.payments.bankVault.binance.service.interf.IBinanceWalletService;
import com.fairpay.payments.bankVault.model.Wallet;
import com.fairpay.payments.error.BinanceWalletNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class BinanceWalletService implements IBinanceWalletService {

    private final BinanceWalletDao binanceWalletDao;

    @Override
    public BinanceApiRestClient getBinanceApiRestClient(long id) {
        BinanceWallet binanceWallet = getBinanceWallet(id);
        return BinanceApiClientFactory.newInstance(binanceWallet.getApiKey(), binanceWallet.getSecret()).newRestClient();
    }

    @Override
    public BinanceApiRestClient getBinanceApiRestClient(Wallet wallet) {
        BinanceWallet binanceWallet = (BinanceWallet) wallet;
        return BinanceApiClientFactory.newInstance(binanceWallet.getApiKey(), binanceWallet.getSecret()).newRestClient();
    }

    @Override
    public BinanceApiAsyncRestClient getBinanceApiAsyncRestClient(long id) {
        BinanceWallet binanceWallet = getBinanceWallet(id);
        return BinanceApiClientFactory.newInstance(binanceWallet.getApiKey(), binanceWallet.getSecret()).newAsyncRestClient();
    }

    @Override
    public BinanceApiAsyncRestClient getBinanceApiAsyncRestClient(Wallet wallet) {
        BinanceWallet binanceWallet = (BinanceWallet) wallet;
        return BinanceApiClientFactory.newInstance(binanceWallet.getApiKey(), binanceWallet.getSecret()).newAsyncRestClient();
    }

    @Override
    public BinanceApiWebSocketClient getBinanceApiWebSocketClient (long id) {
        BinanceWallet binanceWallet = getBinanceWallet(id);
        return BinanceApiClientFactory.newInstance(binanceWallet.getApiKey(), binanceWallet.getSecret()).newWebSocketClient();
    }

    @Override
    public BinanceApiWebSocketClient getBinanceApiWebSocketClient (Wallet wallet) {
        BinanceWallet binanceWallet = (BinanceWallet) wallet;
        return BinanceApiClientFactory.newInstance(binanceWallet.getApiKey(), binanceWallet.getSecret()).newWebSocketClient();
    }

    private BinanceWallet getBinanceWallet (long id) {
        return binanceWalletDao.findById(id).orElseThrow(BinanceWalletNotFoundException::new);
    }
}
