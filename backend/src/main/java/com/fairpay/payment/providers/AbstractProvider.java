package com.fairpay.payment.providers;

import com.fairpay.payment.vo.PaymentInfo;

public abstract class AbstractProvider {
  public abstract String getProviderCode();
  public abstract ProviderMessage pay(PaymentInfo paymentInfo);
}
