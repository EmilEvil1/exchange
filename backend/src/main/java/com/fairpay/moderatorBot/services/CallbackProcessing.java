package com.fairpay.moderatorBot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

@Service
public class CallbackProcessing {

    private Environment environment;

    private InlineKeyboardSender inlineKeyboardSender;

    @Autowired
    public void setEnvironment(Environment environment) {
        this.environment = environment;
    }

    @Autowired
    public void setInlineKeyboardSender(InlineKeyboardSender inlineKeyboardSender) {
        this.inlineKeyboardSender = inlineKeyboardSender;
    }

    public void selectCallbackQuery(String callback){
        if (callback.equals("Подтвердить платеж!"))
            confirmPayment();
    }

    private void confirmPayment(){
        inlineKeyboardSender.sendInlineKeyboard(environment.getProperty("telegram.bot.moderator.id"), "fdjhkjdshk", "Платеж проверен!");
    }
}
