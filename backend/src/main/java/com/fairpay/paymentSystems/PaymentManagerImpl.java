package com.fairpay.paymentSystems;

import com.fairpay.application.ApplicationDao;
import com.fairpay.application.ApplicationEntity;
import com.fairpay.common.FairpayLogicException;
import com.fairpay.paymentSystems.dao.PaymentSystemDao;
import com.fairpay.paymentSystems.providers.IndirectPaymentSystem;
import com.fairpay.paymentSystems.vo.PaymentInfo;
import com.fairpay.paymentSystems.vo.PaymentSystem;
import com.fairpay.paymentSystems.vo.PaymentSystemType;
import com.fairpay.paymentSystems.vo.ProcessPaymentDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class PaymentManagerImpl implements PaymentManager {

  private final ApplicationDao applicationDao;
  private final PaymentSystemDao paymentSystemDao;

  private final List<IndirectPaymentSystem> indirectPaymentSystem;
//  private final

  @Override
  public ProcessPaymentDTO processUserPayment(String applicationId) {
    ApplicationEntity application = applicationDao.findById(applicationId).get();
    String fromCode = application.getFrom();
    PaymentSystem fromPaymentSystem = paymentSystemDao.findById(fromCode).orElseThrow(() -> new FairpayLogicException("No payment system was found"));

    if (fromPaymentSystem.getType() == PaymentSystemType.INDIRECT) {
      IndirectPaymentSystem paymentSystem = indirectPaymentSystem.stream().filter(ps -> ps.supports(fromCode)).findFirst()
              .orElseThrow(() -> new FairpayLogicException("No Indirect Payment with code: " + fromCode));


      ProcessPaymentDTO processPaymentDTO = new ProcessPaymentDTO();
//      processPaymentDTO.setPaymentLink(indirectPaymentSystem.ge);
    }


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
