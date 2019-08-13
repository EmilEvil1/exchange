package com.fairpay.moderatorBot.services.interf;

import com.fairpay.application.ApplicationEntity;

public interface MessageSender {
  void send(ApplicationEntity applicationEntity);
}
