package com.fairpay.payments.bankVault.binance.service.interf;

import com.binance.api.client.BinanceApiAsyncRestClient;
import com.binance.api.client.BinanceApiRestClient;
import com.binance.api.client.BinanceApiWebSocketClient;
import com.fairpay.payments.bankVault.model.Wallet;

public interface IBinanceWalletService {
    BinanceApiRestClient getBinanceApiRestClient(long id);

    BinanceApiRestClient getBinanceApiRestClient(Wallet wallet);

    BinanceApiAsyncRestClient getBinanceApiAsyncRestClient(long id);

    BinanceApiAsyncRestClient getBinanceApiAsyncRestClient(Wallet wallet);

    BinanceApiWebSocketClient getBinanceApiWebSocketClient(long id);

    BinanceApiWebSocketClient getBinanceApiWebSocketClient(Wallet wallet);
}
