package com.fairpay.currencies.api;

import com.fairpay.currencies.coin.vo.HoldTypeEnum;
import lombok.Data;

import java.math.BigDecimal;

@Data
public abstract class AbstractCurrencyDTO {
  private String ticker;
  private String name;
  private BigDecimal reserves;
}
