package com.fairpay.application;

import com.fairpay.application.api.ApplicationRequestDTO;
import com.fairpay.application.api.ApplicationResponseDTO;
import com.fairpay.currency.dao.CurrencyDao;
import com.fairpay.currency.model.CurrencyEntity;
import com.fairpay.wallet.WalletDao;
import com.fairpay.wallet.WalletEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.UUID;

@Component
public class ApplicationManagerImpl implements  ApplicationManager{

  private ApplicationDao applicationDao;
  private CurrencyDao currencyDao;
  private WalletDao walletDao;

  @Autowired
  public void setApplicationDao(ApplicationDao applicationDao) {
    this.applicationDao = applicationDao;
  }

  @Autowired
  public void setCurrencyDao(CurrencyDao currencyDao) {
    this.currencyDao = currencyDao;
  }

  @Autowired
  public void setWalletDao(WalletDao walletDao) {
    this.walletDao = walletDao;
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

    WalletEntity wallet = walletDao.findByTicker(request.getFrom()).orElse(new WalletEntity());
    application.setSystemDocumentPayment(wallet.getPaymentDocument());

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
    responseDTO.setDocumentToPayment(applicationEntity.getSystemDocumentPayment());
    responseDTO.setCreateDate(applicationEntity.getCreateDate());
    responseDTO.setCurrentTime(new Date());
    return responseDTO;
  }
}
