package com.fairpay.moderatorBot;

import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Configuration;

@Configuration
@Log4j2
public class ModeratorBotConfiguration {

//  @Bean
//  @Autowired
//  public ModeratorBot moderatorBot(Environment environment,
//                                   CallbackHandlerImpl callbackHandlerImpl) {
//
//    DefaultBotOptions options = ApiContext.getInstance(DefaultBotOptions.class);
//    String profile = environment.getProperty(Properties.profile);
//
//    if (Profiles.valueOf(profile) == Profiles.dev) {
//      options.setProxyHost("127.0.0.1");
//      options.setProxyPort(9150);
//      options.setProxyType(DefaultBotOptions.ProxyType.SOCKS5);
//    }
//
//    log.info("Options were set");
//    return new ModeratorBot(options, environment, callbackHandlerImpl);
//  }
}
