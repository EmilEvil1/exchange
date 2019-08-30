package com.fairpay.paymentSystem;

import com.fairpay.application.ApplicationEntity;

public interface PaymentSystemManager {
  /**
   * method forming payment request from application data
   * and send it to the payment system
   * @param application
   */
  void sendPaymentRequest(ApplicationEntity application);
}
