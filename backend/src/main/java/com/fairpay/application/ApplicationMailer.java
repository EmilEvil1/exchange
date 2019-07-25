package com.fairpay.application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class ApplicationMailer {

  private final static String MODERATOR_EMAIL = "moderator.email";

  @Autowired
  private Environment environment;

  @Autowired
  private JavaMailSender emailSender;

  public void sendApplicationToModerator(ApplicationEntity application) {
    String moderatorEmail = environment.getProperty(ApplicationMailer.MODERATOR_EMAIL);
    SimpleMailMessage message = new SimpleMailMessage();
    message.setTo(moderatorEmail);
    message.setSubject("New Application");
    message.setText(application.toString());
    emailSender.send(message);
  }
}
