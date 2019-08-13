package com.fairpay.currency.vo;

import lombok.Data;

@Data
public class CurrencyDTO {

  private String name;

  private String symbol;

  private String slug;

  private Quote quote;

  @Override
  public String toString() {
    return "CurrencyDTO{" +
      "name='" + name + '\'' +
      ", symbol='" + symbol + '\'' +
      ", slug='" + slug + '\'' +
      '}';
  }
}
