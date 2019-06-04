package com.fairpay.currency.vo;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class CoinmarketCurrenciesResponse {
  @JsonProperty("status")
  private StatusDTO status;

  @JsonProperty("data")
  List<CurrencyDTO> data;

  public StatusDTO getStatus() {
    return status;
  }

  public void setStatus(StatusDTO status) {
    this.status = status;
  }

  public List<CurrencyDTO> getData() {
    return data;
  }

  public void setData(List<CurrencyDTO> data) {
    this.data = data;
  }
}
