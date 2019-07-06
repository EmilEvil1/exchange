package com.fairpay.application.api;

public class ApplicationRequestDTO {
  private String from;
  private String to;
  private Double amountFrom;
  private Double amountTo;
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

  public Double getAmountFrom() {
    return amountFrom;
  }

  public void setAmountFrom(Double amountFrom) {
    this.amountFrom = amountFrom;
  }

  public Double getAmountTo() {
    return amountTo;
  }

  public void setAmountTo(Double amountTo) {
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
