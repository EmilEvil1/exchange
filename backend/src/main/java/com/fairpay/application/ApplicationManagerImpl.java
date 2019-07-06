package com.fairpay.application;

import com.fairpay.application.api.ApplicationRequestDTO;
import com.fairpay.application.api.ApplicationResponseDTO;
import com.fairpay.currency.dao.CurrencyDao;
import com.fairpay.currency.model.CurrencyEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.UUID;

@Component
public class ApplicationManagerImpl implements  ApplicationManager{

  private ApplicationDao applicationDao;

  private CurrencyDao currencyDao;

  @Autowired
  public void setApplicationDao(ApplicationDao applicationDao) {
    this.applicationDao = applicationDao;
  }

  @Autowired
  public void setCurrencyDao(CurrencyDao currencyDao) {
    this.currencyDao = currencyDao;
  }

  public String saveApplication(ApplicationRequestDTO request) {
    ApplicationEntity application = new ApplicationEntity();
    UUID uuid = UUID.randomUUID();

    application.setId(uuid.toString());
    application.setFrom(request.getFrom());
    application.setTo(request.getTo());
    application.setAmountFrom(request.getAmountFrom());
    application.setAmountTo(request.getAmountTo());
    application.setFromDocumentPayment(request.getFromDocumentPayment());
    application.setToDocumentPayment(request.getFromDocumentPayment());
    application.setEmail(request.getEmail());
    application.setPhone(request.getPhone());
    application.setCreateDate(new Date());
    String fromCurrencyName = currencyDao.findById(request.getFrom()).orElse(new CurrencyEntity()).getName();
    String toCurrencyName = currencyDao.findById(request.getTo()).orElse(new CurrencyEntity()).getName();
    application.setFromCurrencyName(fromCurrencyName);
    application.setToCurrencyName(toCurrencyName);
    //TODO: get system document payment
//    application.setToDocumentPayment();

    applicationDao.save(application);
    return uuid.toString();
  }

  public ApplicationResponseDTO fetchApplication(String applicationId) {
    ApplicationEntity applicationEntity = applicationDao.findById(applicationId).orElse(new ApplicationEntity());
    ApplicationResponseDTO responseDTO = new ApplicationResponseDTO();
    responseDTO.setAmountFrom(applicationEntity.getAmountFrom());
    responseDTO.setAmountTo(applicationEntity.getAmountTo());
    responseDTO.setFrom(applicationEntity.getFrom());
    responseDTO.setTo(applicationEntity.getTo());
    responseDTO.setFromName(applicationEntity.getFromCurrencyName());
    responseDTO.setToName(applicationEntity.getToCurrencyName());
    responseDTO.setDocumentToPayment(applicationEntity.getToDocumentPayment());
    responseDTO.setCreateDate(applicationEntity.getCreateDate());
    return responseDTO;
  }
}
