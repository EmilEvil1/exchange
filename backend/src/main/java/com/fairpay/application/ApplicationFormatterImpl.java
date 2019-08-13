package com.fairpay.application;

import org.springframework.stereotype.Component;

@Component
public class ApplicationFormatterImpl implements ApplicationFormatter {
    @Override
    public String formatApplicationForMail(ApplicationEntity application) {
        return application.toString();
    }

    @Override
    public String formatApplicationForBot(ApplicationEntity application) {
        return application.toString();
    }
}
