package com.fairpay.payment;

import com.fairpay.payment.vo.PaymentResponseDTO;

public interface PaymentManager {
  /**
   * Processing payment from user's account to system
   * @param applicationId
   */
  PaymentResponseDTO processUserPayment(String applicationId);

  /**
   * Processing payment from system to user's account
   * @param applicationId
   */
  void processSystemPayment(String applicationId);
}
