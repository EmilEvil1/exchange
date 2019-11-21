package com.fairpay.payment.providers.qiwi;

import com.fairpay.payment.providers.AbstractProvider;
import com.fairpay.payment.providers.ProviderMessage;
import com.fairpay.payment.providers.qiwi.model.dto.BillQiwiDTO;
import com.fairpay.payment.providers.qiwi.service.interf.IBillProcessingService;
import com.fairpay.payment.vo.PaymentInfo;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

import java.net.URISyntaxException;

@Log4j2
@Component
public class QiwiProvider extends AbstractProvider {

  private final IBillProcessingService iBillProcessingService;

  public String getProviderCode() {
    return "qiwi";
  }

  public QiwiProvider(IBillProcessingService iBillProcessingService) {
    this.iBillProcessingService = iBillProcessingService;
  }

  @Override
  public ProviderMessage pay(PaymentInfo paymentInfo) {
    BillQiwiDTO billQiwiDTO = new BillQiwiDTO();
    billQiwiDTO.setPhone(paymentInfo.getFromUserDocumentPayment());
    billQiwiDTO.setAmount(paymentInfo.getAmount());
    billQiwiDTO.setCurrency("RUB");

    String payUrl = "";
    try{
      payUrl = iBillProcessingService.createPayUrl(billQiwiDTO);
    } catch (URISyntaxException e) {
      log.error("creating URL error", e);
    }

    ProviderMessage providerMessage = new ProviderMessage();
    providerMessage.setUrl(payUrl);

    return providerMessage;
  }
}
