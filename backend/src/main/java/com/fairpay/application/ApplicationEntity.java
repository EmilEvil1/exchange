package com.fairpay.application;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity(name = "applications")
@Table(name = "applications")
public class ApplicationEntity {
  private String id;
  private String from;
  private String to;
  private Double amountFrom;
  private Double amountTo;
  private String fromDocumentPayment;
  private String toDocumentPayment;
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
  public Double getAmountFrom() {
    return amountFrom;
  }

  @Column(name = "amount_to")
  public Double getAmountTo() {
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

  public void setAmountFrom(Double amountFrom) {
    this.amountFrom = amountFrom;
  }

  public void setAmountTo(Double amountTo) {
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
}
