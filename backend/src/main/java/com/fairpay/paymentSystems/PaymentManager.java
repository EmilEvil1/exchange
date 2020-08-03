package com.fairpay.paymentSystems;

public interface PaymentManager {
  /**
   * Processing payment from user's account to system
   * @param applicationId
   */
  void processUserPayment(String applicationId);

  /**
   * Processing payment from system to user's account
   * @param applicationId
   */
  void processSystemPayment(String applicationId);
}
