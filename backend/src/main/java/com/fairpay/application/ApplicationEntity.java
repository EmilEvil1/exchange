package com.fairpay.application;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.util.Date;

@Entity(name = "applications")
@Table(name = "applications")
@Data
public class ApplicationEntity {
  @Id
  private String id;
  @Column(name = "from_currency")
  private String from;
  @Column(name = "to_currency")
  private String to;
  private String fromDocumentPayment;
  private String toDocumentPayment;
  private String systemDocumentPayment;
  private String fromCurrencyName;
  private String toCurrencyName;
  private String email;
  private String phone;
  private BigDecimal amountFrom;
  private BigDecimal amountTo;
  private Date createDate;
  private ApplicationStatus status;


  public enum ApplicationStatus {
    UNPAID(0), PAYMENT_EXPECTED(1),
    PAYMENT_RECEIVED(2), PAYMENT_VALIDATION(3),
    PAYMENT_PROCESSING(4), PAYMENT_SENT(5);

    private int stage;

    public int getStage() {
      return stage;
    }

    ApplicationStatus(int stage) {
      this.stage = stage;
    }
  }

  @Override
  public String toString() {
    return "ApplicationEntity{" +
      "id='" + id + '\'' +
      ", from='" + from + '\'' +
      ", to='" + to + '\'' +
      ", amountFrom=" + amountFrom +
      ", amountTo=" + amountTo +
      ", fromDocumentPayment='" + fromDocumentPayment + '\'' +
      ", toDocumentPayment='" + toDocumentPayment + '\'' +
      ", systemDocumentPayment='" + systemDocumentPayment + '\'' +
      ", fromCurrencyName='" + fromCurrencyName + '\'' +
      ", toCurrencyName='" + toCurrencyName + '\'' +
      ", createDate=" + createDate +
      ", email='" + email + '\'' +
      ", phone='" + phone + '\'' +
      '}';
  }
}
