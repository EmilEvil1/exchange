package com.fairpay.currency.service;

import com.fairpay.currency.CurrencyDTO;
import com.fairpay.currency.vo.CoinmarketCurrenciesResponse;

import java.util.List;

public interface CurrencyService {
  CoinmarketCurrenciesResponse getCryptoRatesAgainstCurrency(String currency);
  List<CurrencyDTO> getCurrenciesByPriority();
}
