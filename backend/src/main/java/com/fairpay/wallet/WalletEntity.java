package com.fairpay.wallet;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "wallets")
@Table(name = "wallets")
public class WalletEntity {
  private Long id;
  private String paymentDocument;
  private String ticker;

  @Id
  @Column(name = "id")
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  @Column(name = "payment_document")
  public String getPaymentDocument() {
    return paymentDocument;
  }

  public void setPaymentDocument(String paymentDocument) {
    this.paymentDocument = paymentDocument;
  }

  @Column(name = "ticker")
  public String getTicker() {
    return ticker;
  }

  public void setTicker(String ticker) {
    this.ticker = ticker;
  }
}
