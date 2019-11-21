package com.fairpay.payment.providers;

import com.fairpay.payment.vo.PaymentInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PaymentProviderManagerImpl implements PaymentProviderManager {

  private final List<AbstractProvider> providers;

  @Autowired
  PaymentProviderManagerImpl(List<AbstractProvider> providers) {
    this.providers = providers;
  }

  @Override
  public ProviderMessage doPay(PaymentInfo paymentInfo) {
    AbstractProvider provider = getProviderByCode(paymentInfo.getProviderFromCode());
    ProviderMessage providerMessage = provider.pay(paymentInfo);
    return providerMessage;
  }

  private AbstractProvider getProviderByCode(String code) {
    return providers.stream().filter(pr -> code.equals(pr.getProviderCode())).findFirst().get();
  }
}
