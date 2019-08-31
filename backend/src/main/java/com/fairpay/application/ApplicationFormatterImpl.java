package com.fairpay.application;

import org.springframework.stereotype.Component;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Component
public class ApplicationFormatterImpl implements ApplicationFormatter {

    private TemplateEngine templateEngine;

    public ApplicationFormatterImpl(TemplateEngine templateEngine) {
        this.templateEngine = templateEngine;
    }

    @Override
    public String formatApplicationForMail(ApplicationEntity application) {
        Context mailContext = new Context();
        mailContext.setVariable("application", application);
        return templateEngine.process("applicationEmailToModerator", mailContext);
    }

    @Override
    public String formatApplicationForBot(ApplicationEntity application) {
        return application.toString();
    }
}
