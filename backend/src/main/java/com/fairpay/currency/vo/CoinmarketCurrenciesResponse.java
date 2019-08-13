package com.fairpay.currency.vo;

import lombok.Data;

import java.util.List;

@Data
public class CoinmarketCurrenciesResponse {
  private StatusDTO status;

  List<CurrencyDTO> data;
}
