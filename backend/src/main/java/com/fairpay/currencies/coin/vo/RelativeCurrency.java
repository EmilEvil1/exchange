package com.fairpay.currencies.coin.vo;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class RelativeCurrency {
  protected BigDecimal price;

  @Override
  public String toString() {
    return "RUB{" +
      "price=" + price +
      '}';
  }
}
