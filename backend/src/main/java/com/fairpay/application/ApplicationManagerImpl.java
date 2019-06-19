package com.fairpay.application;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.UUID;

public class ApplicationManagerImpl implements  ApplicationManager{

  private ApplicationDao applicationDao;

  @Autowired
  public void setApplicationDao(ApplicationDao applicationDao) {
    this.applicationDao = applicationDao;
  }

  public void saveApplication(ApplicationRequestDTO request) {
    ApplicationEntity application = new ApplicationEntity();
    UUID uuid = UUID.randomUUID();

    application.setId(uuid.toString());
    application.setFrom(request.getFrom());
    application.setTo(request.getTo());
    application.setAmountFrom(request.getAmountFrom());
    application.setAmountTo(request.getAmountTo());
    application.setFromDocumentPayment(request.getFromDocumentPayment());
    application.setEmail(request.getEmail());
    application.setPhone(request.getPhone());
    application.setCreateDate(new Date());
    //TODO: get document payment from wallet table
//    application.setToDocumentPayment();

    applicationDao.save(application);
  }
}
