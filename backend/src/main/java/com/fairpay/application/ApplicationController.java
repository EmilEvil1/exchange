package com.fairpay.application;

import com.fairpay.application.api.ApplicationRequestDTO;
import com.fairpay.application.api.ApplicationResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class ApplicationController {

  private ApplicationManager applicationManager;
  private ApplicationDao applicationDao;
  private ApplicationMailer applicationMailer;

  @Autowired
  public void setApplicationMailer(ApplicationMailer applicationMailer) {
    this.applicationMailer = applicationMailer;
  }

  @Autowired
  public void setApplicationManager(ApplicationManager applicationManager) {
    this.applicationManager = applicationManager;
  }

  @Autowired
  public void setApplicationDao(ApplicationDao applicationDao) {
    this.applicationDao = applicationDao;
  }

  @PostMapping("/api/application")
  public String createApplication(@RequestBody ApplicationRequestDTO request) {
    return applicationManager.saveApplication(request);
  }

  @GetMapping("/api/application")
  public ApplicationResponseDTO getApplication(String applicationId) {
    return applicationManager.fetchApplication(applicationId);
  }

  @PostMapping("/api/application/pay")
  public String payForApplication(String applicationId) {
    ApplicationEntity application = applicationDao.findById(applicationId).orElse(new ApplicationEntity());
    applicationMailer.sendApplicationToModerator(application);
    return "success";
  }
}
