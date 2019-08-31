package com.fairpay.application;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ApplicationMailer {

    private final static String MODERATOR_EMAIL = "moderator.email";

    private final Environment environment;

    private final JavaMailSender emailSender;

    private final ApplicationFormatter applicationFormatter;

    public void sendApplicationToModerator(ApplicationEntity application) {
        String moderatorEmail = environment.getProperty(ApplicationMailer.MODERATOR_EMAIL);
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(moderatorEmail);
        message.setSubject("Новая заявка на обмен");
        message.setText(applicationFormatter.formatApplicationForMail(application));
        emailSender.send(message);
    }
}
