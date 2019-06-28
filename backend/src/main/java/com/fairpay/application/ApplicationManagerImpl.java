package com.fairpay.application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.Optional;
import java.util.UUID;

@Component
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

  public ApplicationResponseDTO fetchApplication(String applicationId) {
    ApplicationEntity applicationEntity = applicationDao.findById(applicationId).orElse(new ApplicationEntity());
    ApplicationResponseDTO responseDTO = new ApplicationResponseDTO();
    responseDTO.setAmountFrom(applicationEntity.getAmountFrom());
    responseDTO.setAmountTo(applicationEntity.getAmountTo());
    responseDTO.setFrom(applicationEntity.getFrom());
    responseDTO.setTo(applicationEntity.getTo());
    responseDTO.setDocumentToPayment(applicationEntity.getToDocumentPayment());
    return responseDTO;
  }
}
