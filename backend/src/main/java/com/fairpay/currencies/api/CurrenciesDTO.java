package com.fairpay.currencies.api;

import com.fairpay.currencies.bank.api.BankDTO;
import com.fairpay.currencies.coin.api.CoinDTO;
import lombok.Data;

import java.util.List;

@Data
public class CurrenciesDTO {
  private List<CoinDTO> coins;
  private List<BankDTO> banks;
}
