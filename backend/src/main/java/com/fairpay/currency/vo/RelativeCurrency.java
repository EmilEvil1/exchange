package com.fairpay.currency.vo;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;

public class RelativeCurrency {
  @JsonProperty("price")
  protected BigDecimal price;

  public BigDecimal getPrice() {
    return price;
  }

  public void setPrice(BigDecimal price) {
    this.price = price;
  }

  @Override
  public String toString() {
    return "RUB{" +
      "price=" + price +
      '}';
  }
}
