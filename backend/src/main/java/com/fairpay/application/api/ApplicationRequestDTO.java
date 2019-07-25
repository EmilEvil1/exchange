package com.fairpay.application.api;

import java.math.BigDecimal;

public class ApplicationRequestDTO {
  private String from;
  private String to;
  private BigDecimal amountFrom;
  private BigDecimal amountTo;
  private String fromDocumentPayment;
  private String toDocumentPayment;
  private String email;
  private String phone;

  public String getFrom() {
    return from;
  }

  public void setFrom(String from) {
    this.from = from;
  }

  public String getTo() {
    return to;
  }

  public void setTo(String to) {
    this.to = to;
  }

  public BigDecimal getAmountFrom() {
    return amountFrom;
  }

  public void setAmountFrom(BigDecimal amountFrom) {
    this.amountFrom = amountFrom;
  }

  public BigDecimal getAmountTo() {
    return amountTo;
  }

  public void setAmountTo(BigDecimal amountTo) {
    this.amountTo = amountTo;
  }

  public String getFromDocumentPayment() {
    return fromDocumentPayment;
  }

  public void setFromDocumentPayment(String fromDocumentPayment) {
    this.fromDocumentPayment = fromDocumentPayment;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getToDocumentPayment() {
    return toDocumentPayment;
  }

  public void setToDocumentPayment(String toDocumentPayment) {
    this.toDocumentPayment = toDocumentPayment;
  }
}
