package com.fairpay.currency.api;

import com.fairpay.currency.vo.HoldTypeEnum;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class CurrencyDTO {
  private String ticker;
  private String name;
  private BigDecimal rub;
  private BigDecimal uah;
  private HoldTypeEnum holdType;
  private BigDecimal reserves;
}
