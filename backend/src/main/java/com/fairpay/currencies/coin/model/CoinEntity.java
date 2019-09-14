package com.fairpay.currencies.coin.model;

import com.fairpay.currencies.AbstractCurrencyEntity;
import com.fairpay.currencies.coin.vo.HoldTypeEnum;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.math.BigDecimal;
import java.util.Objects;

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
