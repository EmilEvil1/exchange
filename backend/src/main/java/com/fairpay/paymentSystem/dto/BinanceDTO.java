package com.fairpay.paymentSystem.dto;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
public class BinanceDTO extends AbstractPaymentRequest{
  private String binanceId;
}
