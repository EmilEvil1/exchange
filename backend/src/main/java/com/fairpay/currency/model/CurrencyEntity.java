package com.fairpay.currency.model;

import com.fairpay.currency.vo.HoldTypeEnum;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Objects;

@Entity(name = "currencies")
@Table(name = "currencies")
public class CurrencyEntity {

  public CurrencyEntity() {}


  private String ticker;

  private float rub;

  private float uah;

  private Integer priority;

  private String name;

  private HoldTypeEnum holdType;

  @Id
  @NotEmpty
  public String getTicker() {
    return ticker;
  }

  public void setTicker(String ticker) {
    this.ticker = ticker;
  }

  @Column
  public float getRub() {
    return rub;
  }

  public void setRub(float rub) {
    this.rub = rub;
  }

  @Column
  public float getUah() {
    return uah;
  }

  public void setUah(float uah) {
    this.uah = uah;
  }

  @Column
  public Integer getPriority() {
    return priority;
  }

  public void setPriority(Integer priority) {
    this.priority = priority;
  }

  @Column
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  @Enumerated(EnumType.STRING)
  @Column
  public HoldTypeEnum getHoldType() {
    return holdType;
  }

  public void setHoldType(HoldTypeEnum holdType) {
    this.holdType = holdType;
  }

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
