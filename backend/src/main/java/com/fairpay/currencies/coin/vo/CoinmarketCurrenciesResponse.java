package com.fairpay.currencies.coin.vo;

import lombok.Data;

import java.util.List;

@Data
public class CoinmarketCurrenciesResponse {
  private StatusDTO status;

  List<CurrencyDTO> data;
}
