package com.fairpay.payment.providers;

import com.fairpay.payment.vo.PaymentInfo;

public interface PaymentProviderManager {
  /**
   * Method processes user payment
   * @param paymentInfo - stores information about payment
   * @return
   */
  ProviderMessage doPay(PaymentInfo paymentInfo);
}
