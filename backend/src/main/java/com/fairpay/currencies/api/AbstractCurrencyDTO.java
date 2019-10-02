package com.fairpay.currencies.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.math.BigDecimal;

@Data
public abstract class AbstractCurrencyDTO {
  @JsonProperty("ticker")
  private String ticker;
  @JsonProperty("name")
  private String name;
  @JsonProperty("reserves")
  private BigDecimal reserves;
}
