package com.fairpay.application;

import com.fairpay.application.api.ApplicationRequestDTO;
import com.fairpay.application.api.ApplicationResponseDTO;
import com.fairpay.currency.dao.CurrencyDao;
import com.fairpay.currency.model.CurrencyEntity;
import com.fairpay.moderatorBot.services.MessageSender;
import com.fairpay.wallet.WalletDao;
import com.fairpay.wallet.WalletEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Date;
import java.util.UUID;

@Component
public class ApplicationManagerImpl implements  ApplicationManager{

  private static final String MODERATOR_ID = "telegram.bot.moderator.chat.id";

  private ApplicationDao applicationDao;
  private CurrencyDao currencyDao;
  private WalletDao walletDao;
  private ApplicationMailer applicationMailer;
  private ApplicationFormatter applicationFormatter;
  private Environment environment;
  private MessageSender messageSender;

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

  @Autowired
  public void setApplicationMailer(ApplicationMailer applicationMailer) {
    this.applicationMailer = applicationMailer;
  }

  @Autowired
  public void setApplicationFormatter(ApplicationFormatter applicationFormatter) {
    this.applicationFormatter = applicationFormatter;
  }

  @Autowired
  public void setEnvironment(Environment environment) {
    this.environment = environment;
  }

  @Autowired
  public void setMessageSender(MessageSender messageSender) {
    this.messageSender = messageSender;
  }

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

  public String notifyModerator(String applicationId) {
    ApplicationEntity application = applicationDao.findById(applicationId).orElse(new ApplicationEntity());
    applicationMailer.sendApplicationToModerator(application);

    String applicationBotFormatting = applicationFormatter.formatApplicationForBot(application);
    Long moderatorId = Long.valueOf(environment.getProperty(ApplicationManagerImpl.MODERATOR_ID));

    applicationDao.updateStatus(applicationId, ApplicationEntity.ApplicationStatus.PAYMENT_EXPECTED);
    messageSender.send(moderatorId, applicationBotFormatting);

    return "success";
  }

  private BigDecimal calculateToAmount(String fromTicker, String toTicker, BigDecimal fromAmout) {
    CurrencyEntity fromCurrency = currencyDao.findByTicker(fromTicker).orElse(new CurrencyEntity());
    CurrencyEntity toCurrency = currencyDao.findByTicker(toTicker).orElse(new CurrencyEntity());
    return fromCurrency.getRub().divide(toCurrency.getRub(), 10, RoundingMode.HALF_UP).multiply(fromAmout);
  }
}
