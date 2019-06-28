package com.fairpay.application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class ApplicationController {

  private ApplicationManager applicationManager;

  @Autowired
  public void setApplicationManager(ApplicationManager applicationManager) {
    this.applicationManager = applicationManager;
  }

  @PostMapping("/api/application")
  public void createApplication(@RequestBody ApplicationRequestDTO request) {
    applicationManager.saveApplication(request);
  }

  @GetMapping("/api/application")
  public ApplicationResponseDTO getApplication(String applicationId) {
    return applicationManager.fetchApplication(applicationId);
  }
}
