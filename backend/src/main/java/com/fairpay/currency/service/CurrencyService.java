package com.fairpay.currency.service;

import com.fairpay.currency.vo.CoinmarketCurrenciesResponse;

public interface CurrencyService {
  CoinmarketCurrenciesResponse getCryptoRatesAgainstCurrency(String currency);
}
