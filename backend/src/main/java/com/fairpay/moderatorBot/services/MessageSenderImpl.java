package com.fairpay.moderatorBot.services;

import com.fairpay.application.ApplicationEntity;
import com.fairpay.moderatorBot.ModeratorBot;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.InlineKeyboardMarkup;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

@Service
public class MessageSenderImpl implements MessageSender {
  private final static Logger logger = LoggerFactory.getLogger(MessageSenderImpl.class);

  private ModeratorBot moderatorBot;
  private InlineKeyboardSender inlineKeyboardSender;
  private Environment environment;

  @Autowired
  public void setModeratorBot(ModeratorBot moderatorBot) {
    this.moderatorBot = moderatorBot;
  }

  @Autowired
  public void setInlineKeyboardSender(InlineKeyboardSender inlineKeyboardSender) {
    this.inlineKeyboardSender = inlineKeyboardSender;
  }

  @Autowired
  public void setEnvironment(Environment environment) {
    this.environment = environment;
  }

  public void send(ApplicationEntity application) {
    String userId = environment.getProperty("telegram.bot.moderator.id");
    InlineKeyboardMarkup markup = inlineKeyboardSender.getMarkup(application);
    SendMessage sendMessage = new SendMessage(userId, "Hello");
    sendMessage.setReplyMarkup(markup);

    try {
      moderatorBot.execute(sendMessage);
    } catch (TelegramApiException e) {
      logger.error("Error occured during sending message to telegram", e);
    }
  }


  public void send(SendMessage message){
    try {
      moderatorBot.execute(message);
    } catch (TelegramApiException e) {
      logger.error("Error in sending message to moderator", e);
    }
  }
}
