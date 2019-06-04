package com.fairpay.currency.vo;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RUB extends RelativeCurrency {


  @Override
  public String toString() {
    return "RUB{" +
      "price=" + price +
      '}';
  }
}
