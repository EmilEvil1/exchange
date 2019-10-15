package com.fairpay.application.api;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class ApplicationRequestDTO {

  @JsonProperty("from")
  private String from;

  @JsonProperty("to")
  private String to;

  @JsonProperty("amountFrom")
  private BigDecimal amountFrom;

  @JsonProperty("fromDocumentPayment")
  private String fromDocumentPayment;

  @JsonProperty("toDocumentPayment")
  private String toDocumentPayment;

  @JsonProperty("email")
  private String email;

  @JsonProperty("phone")
  private String phone;
}
