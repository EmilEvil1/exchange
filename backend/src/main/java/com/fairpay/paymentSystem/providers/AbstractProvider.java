package com.fairpay.paymentSystem.providers;

import com.fairpay.application.ApplicationEntity;
import com.fairpay.paymentSystem.api.AbstractPaymentRequest;
import com.fairpay.paymentSystem.api.AbstractPaymentResponse;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

public abstract class AbstractProvider {
  private final static String portPaymentSystem = "payment.system.port";
  protected final Environment environment;
  protected final RestTemplate restTemplate;


  public AbstractProvider(Environment environment, RestTemplate restTemplate) {
    this.environment = environment;
    this.restTemplate = restTemplate;
  }


  public AbstractPaymentResponse sendPaymentData(ApplicationEntity application) {
    AbstractPaymentRequest request = createPaymentRequest(application);
    String port = environment.getProperty(portPaymentSystem);
    String url = "http://localhost:" + port + getUrl();

    HttpHeaders httpHeaders = new HttpHeaders();
    httpHeaders.add(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);

    HttpEntity<AbstractPaymentRequest> httpRequest = new HttpEntity<>(request, httpHeaders);

    ResponseEntity<AbstractPaymentResponse> response = restTemplate.exchange(url, HttpMethod.PUT, httpRequest, AbstractPaymentResponse.class);
    return response.getBody();
  }

  protected abstract AbstractPaymentRequest createPaymentRequest(ApplicationEntity application);

  protected abstract String getUrl();

  public abstract String getCode();
}
