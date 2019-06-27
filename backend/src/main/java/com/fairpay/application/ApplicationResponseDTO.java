package com.fairpay.application;

public class ApplicationResponseDTO {
  private String from;
  private String to;
  private Double amountFrom;
  private Double amountTo;
  private String documentToPayment;

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

  public String getDocumentToPayment() {
    return documentToPayment;
  }

  public void setDocumentToPayment(String documentToPayment) {
    this.documentToPayment = documentToPayment;
  }
}
