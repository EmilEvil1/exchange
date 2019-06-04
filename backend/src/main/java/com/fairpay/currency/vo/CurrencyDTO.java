package com.fairpay.currency.vo;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CurrencyDTO {

  @JsonProperty("name")
  private String name;

  @JsonProperty("symbol")
  private String symbol;

  @JsonProperty("slug")
  private String slug;

  @JsonProperty("quote")
  private Quote quote;

  public Quote getQuote() {
    return quote;
  }

  public void setQuote(Quote quote) {
    this.quote = quote;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getSymbol() {
    return symbol;
  }

  public void setSymbol(String symbol) {
    this.symbol = symbol;
  }

  public String getSlug() {
    return slug;
  }

  public void setSlug(String slug) {
    this.slug = slug;
  }

  @Override
  public String toString() {
    return "CurrencyDTO{" +
      "name='" + name + '\'' +
      ", symbol='" + symbol + '\'' +
      ", slug='" + slug + '\'' +
      '}';
  }
}
