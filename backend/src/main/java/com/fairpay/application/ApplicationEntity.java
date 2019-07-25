package com.fairpay.application;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.util.Date;

@Entity(name = "applications")
@Table(name = "applications")
public class ApplicationEntity {
  private String id;
  private String from;
  private String to;
  private BigDecimal amountFrom;
  private BigDecimal amountTo;
  private String fromDocumentPayment;
  private String toDocumentPayment;
  private String systemDocumentPayment;
  private String fromCurrencyName;
  private String toCurrencyName;
  private Date createDate;
  private String email;
  private String phone;

  @Id
  @Column
  public String getId() {
    return id;
  }

  @Column(name = "from_currency")
  public String getFrom() {
    return from;
  }

  @Column(name = "to_currency")
  public String getTo() {
    return to;
  }

  @Column(name = "amount_from")
  public BigDecimal getAmountFrom() {
    return amountFrom;
  }

  @Column(name = "amount_to")
  public BigDecimal getAmountTo() {
    return amountTo;
  }

  @Column(name = "from_document_payment")
  public String getFromDocumentPayment() {
    return fromDocumentPayment;
  }

  @Column(name = "to_document_payment")
  public String getToDocumentPayment() {
    return toDocumentPayment;
  }

  @Column(name = "system_document_payment")
  public String getSystemDocumentPayment() {
    return systemDocumentPayment;
  }

  public void setSystemDocumentPayment(String systemDocumentPayment) {
    this.systemDocumentPayment = systemDocumentPayment;
  }

  @Column(name = "from_currency_name")
  public String getFromCurrencyName() {
    return fromCurrencyName;
  }

  public void setFromCurrencyName(String fromCurrencyName) {
    this.fromCurrencyName = fromCurrencyName;
  }

  @Column(name = "to_currency_name")
  public String getToCurrencyName() {
    return toCurrencyName;
  }

  public void setToCurrencyName(String toCurrencyName) {
    this.toCurrencyName = toCurrencyName;
  }

  @Column(name = "create_date")
  public Date getCreateDate() {
    return createDate;
  }

  @Column
  public String getEmail() {
    return email;
  }

  @Column
  public String getPhone() {
    return phone;
  }

  public void setId(String id) {
    this.id = id;
  }

  public void setFrom(String from) {
    this.from = from;
  }

  public void setTo(String to) {
    this.to = to;
  }

  public void setAmountFrom(BigDecimal amountFrom) {
    this.amountFrom = amountFrom;
  }

  public void setAmountTo(BigDecimal amountTo) {
    this.amountTo = amountTo;
  }

  public void setFromDocumentPayment(String fromDocumentPayment) {
    this.fromDocumentPayment = fromDocumentPayment;
  }

  public void setToDocumentPayment(String toDocumentPayment) {
    this.toDocumentPayment = toDocumentPayment;
  }

  public void setCreateDate(Date createDate) {
    this.createDate = createDate;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void setPhone(String phone) {
    this.phone = phone;
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
