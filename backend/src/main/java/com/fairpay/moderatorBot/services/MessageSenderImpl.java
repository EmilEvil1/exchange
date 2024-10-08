package com.fairpay.moderatorBot.services;

import com.fairpay.application.ApplicationEntity;
import com.fairpay.moderatorBot.ModeratorBot;
import com.fairpay.moderatorBot.services.interf.MessageSender;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.InlineKeyboardMarkup;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

@Service
@Log4j2
public class MessageSenderImpl implements MessageSender {

  private ModeratorBot moderatorBot;
  private final InlineKeyboardSender inlineKeyboardSender;
  private final Environment environment;

  @Autowired
  public MessageSenderImpl(InlineKeyboardSender inlineKeyboardSender,
                           Environment environment) {
    this.inlineKeyboardSender = inlineKeyboardSender;
    this.environment = environment;
  }

  @Autowired
  public void setModeratorBot(ModeratorBot moderatorBot) {
    this.moderatorBot = moderatorBot;
  }

  @Override
  public void send(ApplicationEntity application) {
    String userId = environment.getProperty("telegram.bot.moderator.id");
    InlineKeyboardMarkup markup = inlineKeyboardSender.getMarkup(application);
    SendMessage sendMessage = new SendMessage(userId, "Hello");
    sendMessage.setReplyMarkup(markup);

    try {
      moderatorBot.execute(sendMessage);
    } catch (TelegramApiException e) {
      log.error("Error occured during sending message to telegram", e);
    }
  }


  public void send(SendMessage message){
    try {
      moderatorBot.execute(message);
    } catch (TelegramApiException e) {
      log.error("Error in sending message to moderator", e);
    }
  }
}
