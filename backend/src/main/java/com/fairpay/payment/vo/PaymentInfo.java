package com.fairpay.payment.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@EqualsAndHashCode
@ToString
public class PaymentInfo {
  private String from;
  private String to;
  private String fromUserDocumentPayment;
  private String toUserDocumentPayment;
  private String fromSystemDocumentPayment;
  private String toSystemDocumentPayment;
}
