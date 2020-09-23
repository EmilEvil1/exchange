package com.fairpay.paymentSystems;

import com.fairpay.paymentSystems.vo.ProcessPaymentDTO;

public interface PaymentManager {
  /**
   * Processing payment from user's account to system
   * @param applicationId
   */
  ProcessPaymentDTO processUserPayment(String applicationId);

  /**
   * Processing payment from system to user's account
   * @param applicationId
   */
  void processSystemPayment(String applicationId);
}
