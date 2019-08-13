package com.fairpay.application.api;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class ApplicationRequestDTO {
  private String from;
  private String to;
  private BigDecimal amountFrom;
  private BigDecimal amountTo;
  private String fromDocumentPayment;
  private String toDocumentPayment;
  private String email;
  private String phone;
}
