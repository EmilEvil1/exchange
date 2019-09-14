package com.fairpay.paymentSystem.api;

import lombok.Data;

@Data
public abstract class AbstractPaymentRequest {
  private String from;
  private String to;
}
