package com.fairpay.payment;

import com.fairpay.application.ApplicationDao;
import com.fairpay.application.ApplicationEntity;
import com.fairpay.currencies.AbstractCurrencyEntity;
import com.fairpay.currencies.CurrencyDao;
import com.fairpay.payment.providers.PaymentProviderManager;
import com.fairpay.payment.providers.ProviderMessage;
import com.fairpay.payment.vo.PaymentInfo;
import com.fairpay.payment.vo.PaymentResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class PaymentManagerImpl implements PaymentManager {

  private final ApplicationDao applicationDao;
  private final PaymentProviderManager paymentProviderManager;
  private final CurrencyDao currencyDao;

  @Override
  public PaymentResponseDTO processUserPayment(String applicationId) {
    ApplicationEntity application = applicationDao.findById(applicationId).get();

    PaymentInfo paymentInfo = new PaymentInfo();

    AbstractCurrencyEntity currencyFrom = currencyDao.findByCode(application.getFrom());
    AbstractCurrencyEntity currencyTo = currencyDao.findByCode(application.getTo());

    paymentInfo.setProviderFromCode(currencyFrom.getCode());
    paymentInfo.setProviderToCode(currencyTo.getCode());
    paymentInfo.setFromUserDocumentPayment(application.getFromDocumentPayment());
    paymentInfo.setToUserDocumentPayment(application.getToDocumentPayment());
    paymentInfo.setToSystemDocumentPayment(application.getToSystemDocumentPayment());
    paymentInfo.setFromSystemDocumentPayment(application.getFromSystemDocumentPayment());
    paymentInfo.setAmount(application.getAmountFrom());

    ProviderMessage message = paymentProviderManager.doPay(paymentInfo);

    PaymentResponseDTO paymentResponseDTO = new PaymentResponseDTO();
    paymentResponseDTO.setUrl(message.getUrl());

    return paymentResponseDTO;
  }

  @Override
  public void processSystemPayment(String applicationId) {

  }
}
