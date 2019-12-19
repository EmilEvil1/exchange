package com.fairpay.application;

import lombok.Data;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.util.Date;

@Entity(name = "applications")
@Table(name = "applications")
@Data
@ToString
public class ApplicationEntity {
  @Id
  private String id;

  @Column(name = "from_currency")
  private String from;

  @Column(name = "to_currency")
  private String to;

  @Column(name = "from_document_payment")
  private String fromDocumentPayment;

  @Column(name = "to_document_payment")
  private String toDocumentPayment;

  @Column(name = "from_system_document_payment")
  private String fromSystemDocumentPayment;

  @Column(name = "to_system_document_payment")
  private String toSystemDocumentPayment;

  @Column(name = "from_currency_name")
  private String fromCurrencyName;

  @Column(name ="to_currency_name")
  private String toCurrencyName;

  private String email;
  private String phone;

  @Column(name ="amount_from")
  private BigDecimal amountFrom;

  @Column(name = "amount_to")
  private BigDecimal amountTo;

  @Column(name = "create_date")
  private Date createDate;

  private ApplicationStatus status;

  /**
   * UNPAID - user hasn't sent money to our bank account yet
   * PAYMENT_EXPECTED - user has clicked on "Pay" button,
   * but our system hasn't verified his transaction yet
   * PAYMENT_RECEIVED - our system has checked that transaction was success
   * PAYMENT_VALIDATION - status for manual handling. when moderator manually handles and validates transaction
   * PAYMENT_PROCESSING - system handles sending money to user
   * PAYMENT_SENT - our system sent money to user
   */

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
}
