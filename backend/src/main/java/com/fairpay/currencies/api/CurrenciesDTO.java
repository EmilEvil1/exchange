package com.fairpay.currencies.api;

import com.fairpay.currencies.bank.api.BankDTO;
import com.fairpay.currencies.coin.api.CoinDTO;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class CurrenciesDTO {
  @JsonProperty("coins")
  private List<CoinDTO> coins;
  @JsonProperty("banks")
  private List<BankDTO> banks;
}
