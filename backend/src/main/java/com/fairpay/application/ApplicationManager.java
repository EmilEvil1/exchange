package com.fairpay.application;

public interface ApplicationManager {
  void saveApplication(ApplicationRequestDTO applicationRequestDTO);

  ApplicationResponseDTO fetchApplication(String applicationId);
}
