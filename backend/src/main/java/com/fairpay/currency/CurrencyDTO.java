package com.fairpay.currency;

import com.fairpay.currency.model.CurrencyEntity;
import com.fairpay.currency.vo.HoldTypeEnum;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CurrencyDTO {
  @JsonProperty("ticker")
  private String ticker;
  @JsonProperty("name")
  private String name;
  @JsonProperty("rub")
  private Float rub;
  @JsonProperty("uah")
  private Float uah;
  @JsonProperty("holdType")
  private HoldTypeEnum holdType;

  public String getTicker() {
    return ticker;
  }

  public void setTicker(String ticker) {
    this.ticker = ticker;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Float getRub() {
    return rub;
  }

  public void setRub(Float rub) {
    this.rub = rub;
  }

  public Float getUah() {
    return uah;
  }

  public void setUah(Float uah) {
    this.uah = uah;
  }

  public HoldTypeEnum getHoldType() {
    return holdType;
  }

  public void setHoldType(HoldTypeEnum holdType) {
    this.holdType = holdType;
  }
}
