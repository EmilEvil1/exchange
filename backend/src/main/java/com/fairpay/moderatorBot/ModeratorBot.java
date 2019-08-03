package com.fairpay.moderatorBot;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.telegram.telegrambots.bots.DefaultBotOptions;
import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

@Component
public class ModeratorBot extends TelegramLongPollingBot {

  private static final Logger logger = LoggerFactory.getLogger(ModeratorBot.class);

  private static final String TOKEN = "telegram.notification.bot.token";
  private static final String USERNAME = "telegram.notification.bot.username";

  private Environment environment;

  @Autowired
  public void setEnvironment(Environment environment) {
    this.environment = environment;
  }

  public ModeratorBot(DefaultBotOptions options) {
    super(options);
  }

  public ModeratorBot() {

  }

  @Override
  public String getBotToken() {
    return environment.getProperty(ModeratorBot.TOKEN);
  }

  @Override
  public void onUpdateReceived(Update update) {
    SendMessage message = new SendMessage();
    message.setChatId(update.getMessage().getChatId());
    message.setText("Hello world");
    logger.info("Update {}", update.toString());
    executeMsg(message);
  }

  private void executeMsg(SendMessage message){
    try {
      execute(message);
    } catch (TelegramApiException e) {
      e.printStackTrace();
    }
  }

  @Override
  public String getBotUsername() {
    return ModeratorBot.USERNAME;
  }

}
