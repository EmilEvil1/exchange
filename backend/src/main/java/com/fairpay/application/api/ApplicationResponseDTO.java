package com.fairpay.application.api;

import java.math.BigDecimal;
import java.util.Date;

public class ApplicationResponseDTO {
  private String from;
  private String to;
  private String fromName;
  private String toName;
  private BigDecimal amountFrom;
  private BigDecimal amountTo;
  private String documentToPayment;
  private Date createDate;
  private Date currentTime;

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

  public String getFromName() {
    return fromName;
  }

  public void setFromName(String fromName) {
    this.fromName = fromName;
  }

  public String getToName() {
    return toName;
  }

  public void setToName(String toName) {
    this.toName = toName;
  }

  public BigDecimal getAmountFrom() {
    return amountFrom;
  }

  public void setAmountFrom(BigDecimal amountFrom) {
    this.amountFrom = amountFrom;
  }

  public Date getCreateDate() {
    return createDate;
  }

  public void setCreateDate(Date createDate) {
    this.createDate = createDate;
  }

  public BigDecimal getAmountTo() {
    return amountTo;
  }

  public void setAmountTo(BigDecimal amountTo) {
    this.amountTo = amountTo;
  }

  public String getDocumentToPayment() {
    return documentToPayment;
  }

  public void setDocumentToPayment(String documentToPayment) {
    this.documentToPayment = documentToPayment;
  }

  public Date getCurrentTime() {
    return currentTime;
  }

  public void setCurrentTime(Date currentTime) {
    this.currentTime = currentTime;
  }
}
