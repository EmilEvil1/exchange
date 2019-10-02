package com.fairpay.currencies.api;

import com.fairpay.currencies.CurrencyManager;
import com.fairpay.currencies.coin.api.CoinDTO;
import com.fairpay.currencies.coin.service.CoinService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CurrencyController {

  private final CurrencyManager currencyManager;

  @GetMapping(("/api/currencies"))
  public CurrenciesDTO fetchCurrencies() {
    return currencyManager.fetchAllCurrencies();
  }

  @GetMapping("/api/currencies/{ticker}")
  public CoinDTO fetchCoinByTicker(@PathVariable String ticker) {
    return currencyManager.fetchCoinByTicker(ticker);
  }

}
