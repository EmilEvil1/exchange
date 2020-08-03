package com.fairpay.paymentSystems;

import com.fairpay.application.ApplicationDao;
import com.fairpay.application.ApplicationEntity;
import com.fairpay.paymentSystems.vo.PaymentInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class PaymentManagerImpl implements PaymentManager {

  private final ApplicationDao applicationDao;
//  private final

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

  }

  @Override
  public void processSystemPayment(String applicationId) {

  }
}
