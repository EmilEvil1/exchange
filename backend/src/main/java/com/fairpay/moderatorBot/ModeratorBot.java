//package com.fairpay.moderatorBot;
//
//import com.fairpay.moderatorBot.services.CallbackHandlerImpl;
//import lombok.extern.log4j.Log4j2;
//import org.springframework.core.env.Environment;
//import org.telegram.telegrambots.bots.DefaultBotOptions;
//import org.telegram.telegrambots.bots.TelegramLongPollingBot;
//import org.telegram.telegrambots.meta.api.objects.Update;
//
//@Log4j2
//public class ModeratorBot extends TelegramLongPollingBot {
//  private static final String TOKEN = "telegram.notification.bot.token";
//  private static final String USERNAME = "telegram.notification.bot.username";
//
//  private final Environment environment;
//  private final CallbackHandlerImpl callbackHandlerImpl;
//
//  public ModeratorBot(DefaultBotOptions options,
//                      Environment environment,
//                      CallbackHandlerImpl callbackHandlerImpl) {
//    super(options);
//    this.environment = environment;
//    this.callbackHandlerImpl = callbackHandlerImpl;
//  }
//
//  @Override
//  public String getBotToken() {
//    return environment.getProperty(ModeratorBot.TOKEN);
//  }
//
//  @Override
//  public void onUpdateReceived(Update update) {
//    callbackHandlerImpl.run(update.getCallbackQuery().getData());
//  }
//
//  @Override
//  public String getBotUsername() {
//    return ModeratorBot.USERNAME;
//  }
//
//}
