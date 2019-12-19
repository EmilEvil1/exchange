package com.fairpay.currencies.coin.api;

import com.fairpay.currencies.api.AbstractCurrencyDTO;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class CoinDTO extends AbstractCurrencyDTO {
  @JsonProperty("rub")
  private BigDecimal rub;
  @JsonProperty("uah")
  private BigDecimal uah;
}
