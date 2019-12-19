package com.fairpay.currencies.coin;

import com.fairpay.currencies.coin.dao.CoinDao;
import com.fairpay.currencies.coin.job.CoinRatesUpdateJob;
import com.fairpay.currencies.coin.model.CoinEntity;
import com.fairpay.currencies.coin.service.CoinService;
import com.fairpay.currencies.coin.vo.CoinmarketCurrenciesResponse;
import com.fairpay.currencies.coin.vo.CurrencyDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@Log4j2
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CoinManagerImpl implements CoinManager {

  private final CoinService coinService;
  private final CoinDao coinDao;

  private static final String RUBLE_CODE = "RUB";
  private static final String HRYVNIA_CODE = "UAH";

  @Override
  public void updateCoinsWithActualRates() {
    CoinmarketCurrenciesResponse currenciesToRub = coinService.getCryptoRatesAgainstCurrency(CoinManagerImpl.RUBLE_CODE);

    for (CurrencyDTO currency : currenciesToRub.getData()) {
      coinDao.updateRubRate(currency.getQuote().getRub().getPrice(), currency.getSymbol());
    }

  }
}
