package com.fairpay.application;

import com.fairpay.application.api.ApplicationRequestDTO;
import com.fairpay.application.api.ApplicationResponseDTO;
import com.fairpay.currencies.coin.dao.CoinDao;
import com.fairpay.currencies.coin.model.CoinEntity;
import com.fairpay.moderatorBot.services.interf.MessageSender;
import com.fairpay.paymentSystem.PaymentSystemManager;
import com.fairpay.wallet.WalletDao;
import com.fairpay.wallet.WalletEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Date;
import java.util.UUID;

@Component
public class ApplicationManagerImpl implements  ApplicationManager{

  private final ApplicationDao applicationDao;
  private final CoinDao coinDao;
  private final WalletDao walletDao;
  private final ApplicationMailer applicationMailer;
  private final PaymentSystemManager paymentSystemManager;
  private MessageSender messageSender;

  public ApplicationManagerImpl(ApplicationDao applicationDao,
                                CoinDao coinDao,
                                WalletDao walletDao,
                                ApplicationMailer applicationMailer,
                                PaymentSystemManager paymentSystemManager) {
    this.applicationDao = applicationDao;
    this.coinDao = coinDao;
    this.walletDao = walletDao;
    this.applicationMailer = applicationMailer;
    this.paymentSystemManager = paymentSystemManager;
  }

  @Autowired
  public void setMessageSender(MessageSender messageSender) {
    this.messageSender = messageSender;
  }

  @Override
  public String saveApplication(ApplicationRequestDTO request) {
    ApplicationEntity application = new ApplicationEntity();
    UUID uuid = UUID.randomUUID();

    application.setId(uuid.toString());
    application.setFrom(request.getFrom());
    application.setTo(request.getTo());
    application.setAmountFrom(request.getAmountFrom());
    application.setAmountTo(calculateToAmount(request.getFrom(), request.getTo(), request.getAmountFrom()));
    application.setFromDocumentPayment(request.getFromDocumentPayment());
    application.setToDocumentPayment(request.getFromDocumentPayment());
    application.setEmail(request.getEmail());
    application.setPhone(request.getPhone());
    application.setCreateDate(new Date());
    application.setStatus(ApplicationEntity.ApplicationStatus.UNPAID);

    String fromCurrencyName = coinDao.findById(request.getFrom()).orElse(new CoinEntity()).getName();
    String toCurrencyName = coinDao.findById(request.getTo()).orElse(new CoinEntity()).getName();
    application.setFromCurrencyName(fromCurrencyName);
    application.setToCurrencyName(toCurrencyName);

    WalletEntity wallet = walletDao.findByTicker(request.getFrom()).orElse(new WalletEntity());
    application.setSystemDocumentPayment(wallet.getPaymentDocument());

    applicationDao.save(application);
    return uuid.toString();
  }

  @Override
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
    responseDTO.setStatus(applicationEntity.getStatus());

    return responseDTO;
  }

  @Override
  public String notifyModerator(String applicationId) {
    applicationDao.updateStatus(applicationId, ApplicationEntity.ApplicationStatus.PAYMENT_EXPECTED);

    ApplicationEntity application = applicationDao.findById(applicationId).orElse(new ApplicationEntity());
    applicationMailer.sendApplicationToModerator(application);

    messageSender.send(application);
    paymentSystemManager.sendPaymentRequest(application);

    return "success";
  }

  @Override
  public void goToNextStatus(String applicationId) {
    ApplicationEntity application = applicationDao.findById(applicationId).orElse(new ApplicationEntity());
    ApplicationEntity.ApplicationStatus status = getNextStatus(application.getStatus());
    applicationDao.updateStatus(applicationId, status);
  }

  private ApplicationEntity.ApplicationStatus getNextStatus(ApplicationEntity.ApplicationStatus currentStatus) {
    Integer currentStage = currentStatus.getStage();
    for (ApplicationEntity.ApplicationStatus status : ApplicationEntity.ApplicationStatus.values()) {
      if (currentStage + 1 == status.getStage()) {
        return status;
      }
    }
    return null;
  }

  private BigDecimal calculateToAmount(String fromTicker, String toTicker, BigDecimal fromAmout) {
    CoinEntity fromCurrency = coinDao.findByTicker(fromTicker).orElse(new CoinEntity());
    CoinEntity toCurrency = coinDao.findByTicker(toTicker).orElse(new CoinEntity());
    return fromCurrency.getRub().divide(toCurrency.getRub(), 10, RoundingMode.HALF_UP).multiply(fromAmout);
  }
}
