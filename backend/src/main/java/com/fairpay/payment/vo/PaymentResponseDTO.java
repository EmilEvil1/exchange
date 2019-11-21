package com.fairpay.payment.vo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class PaymentResponseDTO {
  @JsonProperty("url")
  private String url;
}
