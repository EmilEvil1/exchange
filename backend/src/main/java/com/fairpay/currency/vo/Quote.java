package com.fairpay.currency.vo;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Quote {

  @JsonProperty("RUB")
  private RUB rub;

  @JsonProperty("UAH")
  private UAH uah;

  public RUB getRub() {
    return rub;
  }

  public void setRub(RUB rub) {
    this.rub = rub;
  }

  public UAH getUah() {
    return uah;
  }

  public void setUah(UAH uah) {
    this.uah = uah;
  }
}
