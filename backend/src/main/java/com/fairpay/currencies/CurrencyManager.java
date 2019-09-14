package com.fairpay.currencies;

import com.fairpay.currencies.api.AbstractCurrencyDTO;
import com.fairpay.currencies.api.CurrenciesDTO;
import com.fairpay.currencies.coin.api.CoinDTO;

public interface CurrencyManager {
  CurrenciesDTO fetchAllCurrencies();

  CoinDTO fetchCoinByTicker(String ticker);
}
