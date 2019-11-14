package com.fairpay.currencies.coin.job;

import com.fairpay.currencies.coin.CoinManager;
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
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CoinRatesUpdateJob {

  private final CoinManager coinManager;

  // fixed delay read
  @Scheduled(fixedDelay = 10000000)
  public void updateCurrencyRates() {
    coinManager.updateCoinsWithActualRates();
  }

}
