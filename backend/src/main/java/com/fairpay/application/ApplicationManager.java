package com.fairpay.application;

import com.fairpay.application.api.ApplicationRequestDTO;
import com.fairpay.application.api.ApplicationResponseDTO;

public interface ApplicationManager {
  String saveApplication(ApplicationRequestDTO applicationRequestDTO);

  ApplicationResponseDTO fetchApplication(String applicationId);
}
