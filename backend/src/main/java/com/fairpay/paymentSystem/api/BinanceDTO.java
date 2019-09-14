package com.fairpay.paymentSystem.api;

import lombok.Data;

@Data
public class BinanceDTO extends AbstractPaymentRequest{
  private String binanceId;
}
