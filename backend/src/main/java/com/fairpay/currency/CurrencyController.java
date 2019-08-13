package com.fairpay.currency;

import com.fairpay.currency.api.CurrencyDTO;
import com.fairpay.currency.service.CurrencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CurrencyController {

  private final CurrencyService currencyService;

  @Autowired
  public CurrencyController(CurrencyService currencyService) {
    this.currencyService = currencyService;
  }

  @RequestMapping("/api/currencies")
  public List<CurrencyDTO> fetchCurrencies() {
    return currencyService.getCurrenciesByPriority();
  }


}
