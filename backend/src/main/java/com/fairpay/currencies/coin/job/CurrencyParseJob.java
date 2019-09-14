package com.fairpay.currencies.coin.job;

import com.fairpay.currencies.coin.dao.CoinDao;
import com.fairpay.currencies.coin.model.CoinEntity;
import com.fairpay.currencies.coin.service.CoinService;
import com.fairpay.currencies.coin.vo.CoinmarketCurrenciesResponse;
import com.fairpay.currencies.coin.vo.CurrencyDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@Log4j2
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CurrencyParseJob {

  private static final String RUBLE_CODE = "RUB";
  private static final String HRYVNIA_CODE = "UAH";
  private List<CoinEntity> currentCurrencyEntities;

  private final CoinService coinService;
  private final CoinDao coinDao;


  // fixed delay read
  @Scheduled(fixedDelay = 10000000)
  public void updateCurrencyRates() {
    List<CoinEntity> updatedCurrenciesList = new ArrayList<>();
    CoinmarketCurrenciesResponse currenciesToRub = coinService.getCryptoRatesAgainstCurrency(CurrencyParseJob.RUBLE_CODE);
    CoinmarketCurrenciesResponse currenciesToUah = coinService.getCryptoRatesAgainstCurrency(CurrencyParseJob.HRYVNIA_CODE);
    updateCurrenciesList(currenciesToRub, updatedCurrenciesList);
    updateCurrenciesList(currenciesToUah, updatedCurrenciesList);

    for (CoinEntity coinEntity : updatedCurrenciesList) {
      coinDao.updateRubRate(coinEntity.getRub(), coinEntity.getCode());
      coinDao.updateUahRate(coinEntity.getUah(), coinEntity.getCode());
    }
  }

  private void updateCurrenciesList(CoinmarketCurrenciesResponse fromResponse, List<CoinEntity> toList) {
    currentCurrencyEntities = getCurrentCurrencies();
    for (CurrencyDTO currencyDTO : fromResponse.getData()) {
      CoinEntity coinEntity = new CoinEntity();
      coinEntity.setCode(currencyDTO.getSymbol());
      if (currentCurrencyEntities.contains(coinEntity)) {
        if (hasCurrencyInList(toList, coinEntity)) {
          int pos = toList.indexOf(coinEntity);
          coinEntity = toList.get(pos);
        }

        if (currencyDTO.getQuote().getRub() != null) {
          coinEntity.setRub(currencyDTO.getQuote().getRub().getPrice());
        } else if (currencyDTO.getQuote().getUah() != null) {
          coinEntity.setUah(currencyDTO.getQuote().getUah().getPrice());
        }

        if (!hasCurrencyInList(toList, coinEntity)) {
          toList.add(coinEntity);
        }

        log.info("coin was get from coinmarket" + coinEntity);
      }
    }
  }

  private List<CoinEntity> getCurrentCurrencies() {
    if (currentCurrencyEntities == null) {
      currentCurrencyEntities = new ArrayList<>();
      for (CoinEntity coinEntity : coinDao.findAll())  {
        currentCurrencyEntities.add(coinEntity);
      }
    }
    return currentCurrencyEntities;
  }

  private boolean hasCurrencyInList(List<CoinEntity> currencies, CoinEntity coinEntity) {
    return !currencies.isEmpty() && currencies.contains(coinEntity);
  }
}
