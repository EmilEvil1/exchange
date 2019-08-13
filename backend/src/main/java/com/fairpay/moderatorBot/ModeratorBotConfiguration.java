package com.fairpay.moderatorBot;

import com.fairpay.moderatorBot.services.CallbackHandlerImpl;
import com.fairpay.moderatorBot.services.InlineKeyboardSender;
import com.fairpay.moderatorBot.services.interf.MessageSender;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.telegram.telegrambots.bots.DefaultBotOptions;
import org.telegram.telegrambots.meta.ApiContext;

@Configuration
@Log4j2
public class ModeratorBotConfiguration {

  @Bean
  @Autowired
  public ModeratorBot moderatorBot(Environment environment,
                                   MessageSender messageSender,
                                   InlineKeyboardSender keyboardSender,
                                   CallbackHandlerImpl callbackHandlerImpl) {
    DefaultBotOptions options = ApiContext.getInstance(DefaultBotOptions.class);
    options.setProxyHost("127.0.0.1");
    options.setProxyPort(9150);
    options.setProxyType(DefaultBotOptions.ProxyType.SOCKS5);
    log.info("Options were set");
    return new ModeratorBot(options, environment, messageSender, keyboardSender, callbackHandlerImpl);
  }
}
