package com.fairpay.currencies.coin.vo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Quote {

  @JsonProperty("RUB")
  private RUB rub;

  @JsonProperty("UAH")
  private UAH uah;
}
