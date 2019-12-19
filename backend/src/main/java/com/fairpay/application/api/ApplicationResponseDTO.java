package com.fairpay.application.api;

import com.fairpay.application.ApplicationEntity;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Data
public class ApplicationResponseDTO {

  @JsonProperty("from")
  private String from;

  @JsonProperty("to")
  private String to;

  @JsonProperty("amountFrom")
  private BigDecimal amountFrom;

  @JsonProperty("amountTo")
  private BigDecimal amountTo;

  @JsonProperty("fromDocumentPayment")
  private String fromDocumentPayment;

  @JsonProperty("toDocumentPayment")
  private String toDocumentPayment;

  @JsonProperty("systemDocumentPayment")
  private String systemDocumentPayment;

  @JsonProperty("createdAt")
  private Date createDate;

  @JsonProperty("updatedAt")
  private Date currentTime;

  @JsonProperty("status")
  private ApplicationEntity.ApplicationStatus status;

}
