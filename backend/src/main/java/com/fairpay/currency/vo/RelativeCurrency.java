package com.fairpay.currency.vo;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RelativeCurrency {
  @JsonProperty("price")
  protected float price;

  public float getPrice() {
    return price;
  }

  public void setPrice(float price) {
    this.price = price;
  }

  @Override
  public String toString() {
    return "RUB{" +
      "price=" + price +
      '}';
  }
}
