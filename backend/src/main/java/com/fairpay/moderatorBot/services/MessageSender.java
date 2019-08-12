package com.fairpay.moderatorBot.services;

import com.fairpay.application.ApplicationEntity;

public interface MessageSender {
  void send(ApplicationEntity applicationEntity);
}
