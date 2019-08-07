package com.fairpay.application;

import com.fairpay.application.api.ApplicationPayRequestDTO;
import com.fairpay.application.api.ApplicationRequestDTO;
import com.fairpay.application.api.ApplicationResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ApplicationController {

  private ApplicationManager applicationManager;

  @Autowired
  public void setApplicationManager(ApplicationManager applicationManager) {
    this.applicationManager = applicationManager;
  }

  @PostMapping("/api/application")
  public String createApplication(@RequestBody ApplicationRequestDTO request) {
    return applicationManager.saveApplication(request);
  }

  @GetMapping("/api/application")
  public ApplicationResponseDTO getApplication(String applicationId) {
    return applicationManager.fetchApplication(applicationId);
  }

  @PostMapping("/api/pay")
  public String payForApplication(@RequestBody ApplicationPayRequestDTO request) {
    return applicationManager.notifyModerator(request.getApplicationId());
  }
}
