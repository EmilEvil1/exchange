package com.fairpay.config;

import org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.telegram.telegrambots.bots.DefaultBotOptions;
import org.telegram.telegrambots.meta.ApiContext;

@Configuration
public class FairpayConfiguration {

  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurerAdapter() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
          .allowedMethods("HEAD", "GET", "PUT", "POST", "DELETE", "PATCH");
      }
    };
  }

  @Bean
  public DefaultBotOptions options() {
    DefaultBotOptions options = ApiContext.getInstance(DefaultBotOptions.class);
    options.setProxyHost("127.0.0.1");
    options.setProxyPort(9150);
    options.setProxyType(DefaultBotOptions.ProxyType.SOCKS5);
    return options;
  }
}
