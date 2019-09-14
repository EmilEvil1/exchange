package com.fairpay.paymentSystem;

import com.fairpay.application.ApplicationEntity;
import com.fairpay.paymentSystem.api.AbstractPaymentResponse;
import com.fairpay.paymentSystem.providers.AbstractProvider;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class PaymentSystemManagerImpl implements PaymentSystemManager {

  private final Map<String, AbstractProvider> mapCodeToProvider = new HashMap<>();

  public PaymentSystemManagerImpl(List<AbstractProvider> providersList) {
    for (AbstractProvider provider : providersList) {
      mapCodeToProvider.put(provider.getCode(), provider);
    }
  }

  @Override
  public AbstractPaymentResponse sendPaymentRequest(ApplicationEntity application) {
    AbstractProvider providerFrom = mapCodeToProvider.get(application.getFrom());
    return providerFrom.sendPaymentData(application);
  }
}
