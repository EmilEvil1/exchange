package com.fairpay.currencies.coin.service;

import com.fairpay.currencies.api.AbstractCurrencyDTO;
import com.fairpay.currencies.coin.vo.CoinmarketCurrenciesResponse;

import java.util.List;

public interface CoinService {
  CoinmarketCurrenciesResponse getCryptoRatesAgainstCurrency(String currency);
}
