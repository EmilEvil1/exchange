package com.fairpay.currencies;

import com.fairpay.currencies.api.CurrenciesDTO;
import com.fairpay.currencies.api.AbstractCurrencyDTO;
import com.fairpay.currencies.bank.BankEntity;
import com.fairpay.currencies.bank.api.BankDTO;
import com.fairpay.currencies.coin.api.CoinDTO;
import com.fairpay.currencies.coin.model.CoinEntity;
import lombok.NonNull;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class CurrencyTransformerImpl {
  public CurrenciesDTO transformCurrenciesResult(@NonNull List<CoinEntity> coinList, @NonNull List<BankEntity> bankList) {
    List<CoinDTO> coinsDTO = new ArrayList<>();
    List<BankDTO> banksDTO = new ArrayList<>();

    coinsDTO = coinList.stream().filter(CoinEntity::getIsActive)
      .map(coin -> transformCoin(coin)).collect(Collectors.toList());

    banksDTO = bankList.stream().filter(BankEntity::getIsActive)
      .map(bank -> createBankDTO(bank)).collect(Collectors.toList());

    CurrenciesDTO currenciesDTO = new CurrenciesDTO();
    currenciesDTO.setBanks(banksDTO);
    currenciesDTO.setCoins(coinsDTO);

    return currenciesDTO;
  }

  public CoinDTO transformCoin(CoinEntity coin) {
    CoinDTO coinDto = new CoinDTO();
    coinDto.setName(coin.getName());
    coinDto.setReserves(coin.getReserves());
    coinDto.setRub(coin.getRub());
    coinDto.setUah(coin.getUah());
    coinDto.setTicker(coin.getCode());

    return coinDto;
  }

  private BankDTO createBankDTO(BankEntity bank) {
    BankDTO bankDTO = new BankDTO();
    bankDTO.setName(bank.getName());
    bankDTO.setReserves(bank.getReserves());
    bankDTO.setTicker(bank.getCode());
    return bankDTO;
  }
}
