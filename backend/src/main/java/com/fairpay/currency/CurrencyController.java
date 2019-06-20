package com.fairpay.currency;

import com.fairpay.currency.dao.CurrencyDao;
import com.fairpay.currency.model.CurrencyEntity;
import com.fairpay.currency.service.CurrencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CurrencyController {

  private CurrencyService currencyService;

  @Autowired
  public void setCurrencyService(CurrencyService currencyService) {
    this.currencyService = currencyService;
  }

  @RequestMapping("/api/currencies")
  public List<CurrencyDTO> fetchCurrencies() {
    return currencyService.getCurrenciesByPriority();
  }


}
