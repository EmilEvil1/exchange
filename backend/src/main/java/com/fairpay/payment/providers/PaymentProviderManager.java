package com.fairpay.payment.providers;

import com.fairpay.payment.vo.PaymentInfo;

public interface PaymentProviderManager {
  void doPay(PaymentInfo paymentInfo);
}
