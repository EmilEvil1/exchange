package com.fairpay.paymentSystem.dto;

import lombok.Data;

@Data
public abstract class AbstractPaymentRequest {
  private String from;
  private String to;
}
