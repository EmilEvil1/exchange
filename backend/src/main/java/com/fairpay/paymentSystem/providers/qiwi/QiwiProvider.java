package com.fairpay.paymentSystem.providers.qiwi;

import com.fairpay.application.ApplicationEntity;
import com.fairpay.paymentSystem.api.AbstractPaymentRequest;
import com.fairpay.paymentSystem.providers.AbstractProvider;
import com.fairpay.paymentSystem.providers.qiwi.api.QiwiRequestDTO;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class QiwiProvider extends AbstractProvider {

  public QiwiProvider(RestTemplate restTemplate, Environment environment) {
    super(environment, restTemplate);
  }

  protected AbstractPaymentRequest createPaymentRequest(ApplicationEntity application) {
    QiwiRequestDTO qiwiDTO = new QiwiRequestDTO();
    qiwiDTO.setPhone(application.getPhone());
    qiwiDTO.setEmail(application.getEmail());

    return qiwiDTO;
  }

  protected String getUrl() {
    return "/rest/v1/qiwi/payment";
  }

  public String getCode() {
    return "QIWI";
  }
}
