package com.fairpay.paymentSystem.providers;

import com.fairpay.application.ApplicationEntity;
import com.fairpay.paymentSystem.dto.AbstractPaymentRequest;
import com.fairpay.paymentSystem.dto.BillQiwiDTO;
import org.springframework.stereotype.Component;

@Component
public class QiwiProvider extends AbstractProvider {

  public AbstractPaymentRequest createPaymentRequest(ApplicationEntity application) {
    BillQiwiDTO qiwiDTO = new BillQiwiDTO();
    qiwiDTO.setPhone(application.getPhone());
    qiwiDTO.setEmail(application.getEmail());

    return qiwiDTO;
  }

  public String getUrl() {
    return "/rest/v1/qiwi/payment";
  }

  public String getCode() {
    return "QIWI";
  }
}
