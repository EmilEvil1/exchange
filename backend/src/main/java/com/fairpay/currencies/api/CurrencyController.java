package com.fairpay.currencies.api;

import com.fairpay.currencies.CurrencyManager;
import com.fairpay.currencies.coin.api.CoinDTO;
import com.fairpay.currencies.coin.service.CoinService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api/currencies")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CurrencyController {

  private final CoinService coinService;
  private final CurrencyManager currencyManager;

  @GetMapping
  public CurrenciesDTO fetchCurrencies() {
    return currencyManager.fetchAllCurrencies();
  }

  @GetMapping
  public CoinDTO fetchCoinByTicker(@RequestParam String ticker) {
    return currencyManager.fetchCoinByTicker(ticker);
  }

}
