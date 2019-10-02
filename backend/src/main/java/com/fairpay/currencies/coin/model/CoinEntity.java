package com.fairpay.currencies.coin.model;

import com.fairpay.currencies.AbstractCurrencyEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import java.math.BigDecimal;

@Entity(name = "coins")
@DiscriminatorValue("CN")
@Data
@ToString
@EqualsAndHashCode
public class CoinEntity extends AbstractCurrencyEntity {

  public CoinEntity() {}

  private BigDecimal rub;

  private BigDecimal uah;
}
