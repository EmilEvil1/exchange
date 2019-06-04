package com.fairpay.currency;

import com.fairpay.currency.dao.CurrencyDao;
import com.fairpay.currency.model.CurrencyEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CurrencyController {

  private CurrencyDao currencyDao;

  @Autowired
  public void setCurrencyDao(CurrencyDao currencyDao) {
    this.currencyDao = currencyDao;
  }

  @RequestMapping("/currencies")
  public List<CurrencyEntity> fetchCurrencies() {
    List<CurrencyEntity> currencyEntities = new ArrayList<>();
    for (CurrencyEntity currencyEntity : currencyDao.findAll()) {
      currencyEntities.add(currencyEntity);
    }
    return currencyEntities;
  }


}
