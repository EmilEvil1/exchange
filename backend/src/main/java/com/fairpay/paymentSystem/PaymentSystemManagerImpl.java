package com.fairpay.paymentSystem;

import com.fairpay.application.ApplicationEntity;
import com.fairpay.paymentSystem.dto.AbstractPaymentRequest;
import com.fairpay.paymentSystem.providers.AbstractProvider;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class PaymentSystemManagerImpl implements PaymentSystemManager {

  private final RestTemplate restTemplate;
  private final Environment environment;
  private final Map<String, AbstractProvider> mapCodeToProvider = new HashMap<>();

  private final static String portPaymentSystem = "payment.system.port";

  public PaymentSystemManagerImpl(List<AbstractProvider> providersList,
                                  RestTemplate restTemplate,
                                  Environment environment) {
    for (AbstractProvider provider : providersList) {
      mapCodeToProvider.put(provider.getCode(), provider);
    }
    this.restTemplate = restTemplate;
    this.environment = environment;
  }

  @Override
  public void sendPaymentRequest(ApplicationEntity application) {
    AbstractProvider providerFrom = mapCodeToProvider.get(application.getFrom());
    AbstractPaymentRequest requestFrom = providerFrom.createPaymentRequest(application);
    String port = environment.getProperty(portPaymentSystem);
    String url = "http://localhost:" + port + providerFrom.getUrl();

    restTemplate.put(url, requestFrom);
  }
}
