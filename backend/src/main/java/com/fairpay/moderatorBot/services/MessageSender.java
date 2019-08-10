package com.fairpay.moderatorBot.services;

import com.fairpay.moderatorBot.ModeratorBot;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

@Service
public class MessageSender {
  private final static Logger logger = LoggerFactory.getLogger(MessageSender.class);

  private ModeratorBot moderatorBot;

  @Autowired
  public void setModeratorBot(ModeratorBot moderatorBot) {
    this.moderatorBot = moderatorBot;
  }

  public void send(String userId, String message) {
    try {
      moderatorBot.execute(new SendMessage(userId, message));
    } catch (TelegramApiException e) {
      logger.error("Error in sending message to moderator", e);
    }
  }

  void send(SendMessage message){
    try {
      moderatorBot.execute(message);
    } catch (TelegramApiException e) {
      logger.error("Error in sending message to moderator", e);
    }
  }
}
