package com.fairpay.currency.job;

import com.fairpay.currency.dao.CurrencyDao;
import com.fairpay.currency.model.CurrencyEntity;
import com.fairpay.currency.service.CurrencyService;
import com.fairpay.currency.vo.CoinmarketCurrenciesResponse;
import com.fairpay.currency.vo.CurrencyDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class CurrencyParseJob {

  private final static Logger log = LoggerFactory.getLogger(CurrencyParseJob.class);
  private static final String RUBLE_CODE = "RUB";
  private static final String HRYVNIA_CODE = "UAH";
  private List<CurrencyEntity> currentCurrencyEntities;

  @Autowired
  private CurrencyService currencyService;

  private CurrencyDao currencyDao;

  @Autowired
  public void setCurrencyDao(CurrencyDao currencyDao) {
    this.currencyDao = currencyDao;
  }

  // fixed delay read
  @Scheduled(fixedRate = 10000000)
  public void updateCurrencyRates() {
    List<CurrencyEntity> updatedCurrenciesList = new ArrayList<>();
    CoinmarketCurrenciesResponse currenciesToRub = currencyService.getCryptoRatesAgainstCurrency(CurrencyParseJob.RUBLE_CODE);
    CoinmarketCurrenciesResponse currenciesToUah = currencyService.getCryptoRatesAgainstCurrency(CurrencyParseJob.HRYVNIA_CODE);
    updateCurrenciesList(currenciesToRub, updatedCurrenciesList);
    updateCurrenciesList(currenciesToUah, updatedCurrenciesList);

    for (CurrencyEntity currencyEntity : updatedCurrenciesList) {
      currencyDao.updateRubRate(currencyEntity.getRub(), currencyEntity.getTicker());
      currencyDao.updateUahRate(currencyEntity.getUah(), currencyEntity.getTicker());
    }
  }

  private void updateCurrenciesList(CoinmarketCurrenciesResponse fromResponse, List<CurrencyEntity> toList) {
    currentCurrencyEntities = getCurrentCurrencies();
    for (CurrencyDTO currencyDTO : fromResponse.getData()) {
      CurrencyEntity currencyEntity = new CurrencyEntity();
      currencyEntity.setTicker(currencyDTO.getSymbol());
      if (currentCurrencyEntities.contains(currencyEntity)) {
        if (hasCurrencyInList(toList, currencyEntity)) {
          int pos = toList.indexOf(currencyEntity);
          currencyEntity = toList.get(pos);
        }

        if (currencyDTO.getQuote().getRub() != null) {
          currencyEntity.setRub(currencyDTO.getQuote().getRub().getPrice());
        } else if (currencyDTO.getQuote().getUah() != null) {
          currencyEntity.setUah(currencyDTO.getQuote().getUah().getPrice());
        }

        if (!hasCurrencyInList(toList, currencyEntity)) {
          toList.add(currencyEntity);
        }

        log.info("currency was get from coinmarket" + currencyEntity);
      }
    }
  }

  private List<CurrencyEntity> getCurrentCurrencies() {
    if (currentCurrencyEntities == null) {
      currentCurrencyEntities = new ArrayList<>();
      for (CurrencyEntity currencyEntity : currencyDao.findAll())  {
        currentCurrencyEntities.add(currencyEntity);
      }
    }
    return currentCurrencyEntities;
  }

  private boolean hasCurrencyInList(List<CurrencyEntity> currencies, CurrencyEntity currencyEntity) {
    return !currencies.isEmpty() && currencies.contains(currencyEntity);
  }
}
