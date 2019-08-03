package com.fairpay.application;

import org.springframework.stereotype.Component;

@Component
public class ApplicationFormatterImpl implements ApplicationFormatter {
  public String formatApplicationForMail(ApplicationEntity application) {
    return application.toString();
  }

  public String formatApplicationForBot(ApplicationEntity application) {
    return application.toString();
  }
}
