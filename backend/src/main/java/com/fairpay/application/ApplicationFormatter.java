package com.fairpay.application;

public interface ApplicationFormatter {
  String formatApplicationForMail (ApplicationEntity application);

  String formatApplicationForBot(ApplicationEntity application);
}
