package com.fairpay.currency.api;

import com.fairpay.currency.vo.HoldTypeEnum;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;

public class CurrencyDTO {
  @JsonProperty("ticker")
  private String ticker;
  @JsonProperty("name")
  private String name;
  @JsonProperty("rub")
  private BigDecimal rub;
  @JsonProperty("uah")
  private BigDecimal uah;
  @JsonProperty("holdType")
  private HoldTypeEnum holdType;
  @JsonProperty("reserves")
  private BigDecimal reserves;

  public BigDecimal getReserves() {
    return reserves;
  }

  public void setReserves(BigDecimal reserves) {
    this.reserves = reserves;
  }

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

  public BigDecimal getRub() {
    return rub;
  }

  public void setRub(BigDecimal rub) {
    this.rub = rub;
  }

  public BigDecimal getUah() {
    return uah;
  }

  public void setUah(BigDecimal uah) {
    this.uah = uah;
  }

  public HoldTypeEnum getHoldType() {
    return holdType;
  }

  public void setHoldType(HoldTypeEnum holdType) {
    this.holdType = holdType;
  }
}
