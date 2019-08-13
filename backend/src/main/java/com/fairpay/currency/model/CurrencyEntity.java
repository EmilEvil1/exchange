package com.fairpay.currency.model;

import com.fairpay.currency.vo.HoldTypeEnum;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.math.BigDecimal;
import java.util.Objects;

@Entity(name = "currencies")
@Table(name = "currencies")
@Data
public class CurrencyEntity {

  public CurrencyEntity() {}

  @Id
  @NotEmpty
  private String ticker;

  private String name;

  private int priority;

  private BigDecimal rub;

  private BigDecimal uah;

  private BigDecimal reserves;

  @Enumerated(EnumType.STRING)
  private HoldTypeEnum holdType;


  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    CurrencyEntity that = (CurrencyEntity) o;
    return Objects.equals(ticker, that.ticker);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ticker);
  }

  @Override
  public String toString() {
    return "CurrencyEntity{" +
      "ticker='" + ticker + '\'' +
      ", rub=" + rub +
      '}';
  }
}
