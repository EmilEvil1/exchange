package com.fairpay.moderatorBot;

import com.fairpay.moderatorBot.services.CallbackProcessing;
import com.fairpay.moderatorBot.services.InlineKeyboardSender;
import com.fairpay.moderatorBot.services.MessageSender;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.telegram.telegrambots.bots.DefaultBotOptions;
import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.objects.Update;

@Component
public class ModeratorBot extends TelegramLongPollingBot {

  private static final Logger logger = LoggerFactory.getLogger(ModeratorBot.class);

  private static final String TOKEN = "telegram.notification.bot.token";
  private static final String USERNAME = "telegram.notification.bot.username";

  private Environment environment;

  private MessageSender messageSender;
  private InlineKeyboardSender keyboardSender;
  private CallbackProcessing callbackProcessing;

  @Autowired
  public void setEnvironment(Environment environment) {
    this.environment = environment;
  }

  @Autowired
  public void setMessageSender(MessageSender messageSender) {
    this.messageSender = messageSender;
  }

  @Autowired
  public void setKeyboardSender(InlineKeyboardSender keyboardSender) {
    this.keyboardSender = keyboardSender;
  }

  @Autowired
  public void setCallbackProcessing(CallbackProcessing callbackProcessing) {
    this.callbackProcessing = callbackProcessing;
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
    if (update.getCallbackQuery() != null)
      callbackProcessing.selectCallbackQuery(update.getCallbackQuery().getData());

  }


  @Override
  public String getBotUsername() {
    return ModeratorBot.USERNAME;
  }

}
