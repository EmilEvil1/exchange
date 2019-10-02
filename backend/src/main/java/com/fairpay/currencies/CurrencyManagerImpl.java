package com.fairpay.currencies;

import com.fairpay.currencies.api.CurrenciesDTO;
import com.fairpay.currencies.api.AbstractCurrencyDTO;
import com.fairpay.currencies.bank.BankDao;
import com.fairpay.currencies.bank.BankEntity;
import com.fairpay.currencies.coin.api.CoinDTO;
import com.fairpay.currencies.coin.dao.CoinDao;
import com.fairpay.currencies.coin.model.CoinEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CurrencyManagerImpl implements CurrencyManager {

  private final CurrencyTransformerImpl currencyTransformer;
  private final CoinDao coinDao;
  private final BankDao bankDao;

  @Override
  public CurrenciesDTO fetchAllCurrencies() {
    List<CoinEntity> coinList = coinDao.findAllByOrderByPriorityAsc();
    List<BankEntity> bankList = bankDao.findAllByOrderByPriorityAsc();

    return currencyTransformer.transformCurrenciesResult(coinList, bankList);
  }

  @Override
  public CoinDTO fetchCoinByTicker(String code) {
    CoinEntity coin = coinDao.findByCode(code).orElse(new CoinEntity());
    return currencyTransformer.transformCoin(coin);
  }
}
