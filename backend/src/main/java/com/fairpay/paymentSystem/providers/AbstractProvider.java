package com.fairpay.paymentSystem.providers;

import com.fairpay.application.ApplicationEntity;
import com.fairpay.paymentSystem.dto.AbstractPaymentRequest;

public abstract class AbstractProvider {
  public abstract AbstractPaymentRequest createPaymentRequest(ApplicationEntity application);
  public abstract String getUrl();
  public abstract String getCode();
}
