package com.fairpay.currency.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import java.util.Objects;

@Entity(name = "currencies")
@Table(name = "currencies")
public class CurrencyEntity {

//  protected CurrencyEntity() {}
  public CurrencyEntity() {}


  private String ticker;

  private float rub;

  private float uah;

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
