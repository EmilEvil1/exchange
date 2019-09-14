package com.fairpay.paymentSystem;

import com.fairpay.application.ApplicationEntity;
import com.fairpay.paymentSystem.api.AbstractPaymentResponse;

public interface PaymentSystemManager {
  /**
   * method forming payment request from application data
   * and send it to the payment system
   * @param application
   */
  AbstractPaymentResponse sendPaymentRequest(ApplicationEntity application);
}
