package com.fairpay.application.api;

import com.fairpay.application.ApplicationEntity;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Data
public class ApplicationResponseDTO {
  private String from;
  private String to;
  private String fromName;
  private String toName;
  private BigDecimal amountFrom;
  private BigDecimal amountTo;
  private String documentToPayment;
  private Date createDate;
  private Date currentTime;
  private ApplicationEntity.ApplicationStatus status;

}
