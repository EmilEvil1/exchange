package com.fairpay.paymentSystem.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class QiwiResponseDTO extends AbstractPaymentResponse {
  @JsonProperty("payUrl")
  private String payUrl; //Ссылка на созданную платежную форму
}
