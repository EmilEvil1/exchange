package com.fairpay.notificationBot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.telegram.telegrambots.bots.DefaultBotOptions;
import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;

@Component
public class NotificationBot extends TelegramLongPollingBot {

  private static final String TOKEN = "telegram.notification.bot.token";
  private static final String USERNAME = "telegram.notification.bot.username";

  private Environment environment;


  @Autowired
  public void setEnvironment(Environment environment) {
    this.environment = environment;
  }

  @Override
  public String getBotToken() {
    return environment.getProperty(NotificationBot.TOKEN);
  }

  @Override
  public void onUpdateReceived(Update update) {
    SendMessage message = new SendMessage();
    message.setChatId(update.getMessage().getChatId());
    message.setText("Hello world");
  }

  @Override
  public String getBotUsername() {
    return NotificationBot.USERNAME;
  }

}
