package com.fairpay.moderatorBot;

import com.fairpay.moderatorBot.services.MessageSender;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.telegram.telegrambots.bots.DefaultBotOptions;
import org.telegram.telegrambots.meta.ApiContext;

@Configuration
public class ModeratorBotConfiguration {

  private final static Logger log = LoggerFactory.getLogger(ModeratorBotConfiguration.class);

  @Bean
  public ModeratorBot moderatorBot() {
    DefaultBotOptions options = ApiContext.getInstance(DefaultBotOptions.class);
    options.setProxyHost("127.0.0.1");
    options.setProxyPort(9150);
    options.setProxyType(DefaultBotOptions.ProxyType.SOCKS5);
    log.info("Options were set");
    return new ModeratorBot(options);
  }
}
