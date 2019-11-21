package com.fairpay.payment.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.math.BigDecimal;

@Data
@EqualsAndHashCode
@ToString
public class PaymentInfo {
  private String providerFromCode;
  private String providerToCode;
  private String fromUserDocumentPayment;
  private String toUserDocumentPayment;
  private String fromSystemDocumentPayment;
  private String toSystemDocumentPayment;

  private BigDecimal amount;
}
