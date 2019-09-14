package com.fairpay.paymentSystem.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public abstract class AbstractPaymentResponse {
  @JsonProperty("payUrl")
  private String payUrl; //Ссылка на созданную платежную форму
}
