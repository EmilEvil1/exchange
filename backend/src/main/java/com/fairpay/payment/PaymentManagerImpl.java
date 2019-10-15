package com.fairpay.payment;

import com.fairpay.application.ApplicationDao;
import com.fairpay.application.ApplicationEntity;
import com.fairpay.payment.providers.PaymentProviderManager;
import com.fairpay.payment.vo.PaymentInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class PaymentManagerImpl implements PaymentManager {

  private final ApplicationDao applicationDao;
  private final PaymentProviderManager paymentProviderManager;

  @Override
  public void processUserPayment(String applicationId) {
    ApplicationEntity application = applicationDao.findById(applicationId).get();

    PaymentInfo paymentInfo = new PaymentInfo();
    paymentInfo.setFrom(application.getFrom());
    paymentInfo.setTo(application.getTo());
    paymentInfo.setFromUserDocumentPayment(application.getFromDocumentPayment());
    paymentInfo.setToUserDocumentPayment(application.getToDocumentPayment());
    paymentInfo.setToSystemDocumentPayment(application.getToSystemDocumentPayment());
    paymentInfo.setFromSystemDocumentPayment(application.getFromSystemDocumentPayment());

    paymentProviderManager.doPay(paymentInfo);
  }

  @Override
  public void processSystemPayment(String applicationId) {

  }
}
