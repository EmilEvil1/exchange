package com.fairpay.moderatorBot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.InlineKeyboardMarkup;
import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.InlineKeyboardButton;

import java.util.ArrayList;
import java.util.List;

@Service
public class InlineKeyboardSender {
    private MessageSender messageSender;

    @Autowired
    public void setMessageSender(MessageSender messageSender) {
        this.messageSender = messageSender;
    }

    public void sendInlineKeyboard(String userId, String messageText, String ButtonText){
        SendMessage message = new SendMessage(userId, messageText).setReplyMarkup(getMarkup(ButtonText));
        messageSender.send(message);
    }

    private InlineKeyboardMarkup getMarkup(String text){
        return new InlineKeyboardMarkup().setKeyboard(getKeyboard(text));
    }

    private List<List<InlineKeyboardButton>> getKeyboard(String text){
        List<List<InlineKeyboardButton>> keyboard = new ArrayList<>();
        keyboard.add(getButtons(text));
        return keyboard;
    }

    private List<InlineKeyboardButton> getButtons(String text){
        List<InlineKeyboardButton> buttons = new ArrayList<>();
        buttons.add(new InlineKeyboardButton().setText(text).setCallbackData(text));
        return buttons;
    }
}
