package com.fairpay.currencies.coin.api;

import com.fairpay.currencies.api.AbstractCurrencyDTO;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class CoinDTO extends AbstractCurrencyDTO {
  private BigDecimal rub;
  private BigDecimal uah;
}
