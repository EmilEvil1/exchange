//package com.fairpay.moderatorBot.services;
//
//import com.fairpay.application.ApplicationEntity;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
//import org.telegram.telegrambots.meta.api.objects.replykeyboard.InlineKeyboardMarkup;
//import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.InlineKeyboardButton;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class InlineKeyboardSender {
//
//    public InlineKeyboardMarkup getMarkup(ApplicationEntity applicationEntity){
//        ApplicationEntity.ApplicationStatus status = applicationEntity.getStatus();
//        String btnMessage = "";
//        switch (status) {
//            case PAYMENT_EXPECTED:
//                btnMessage = "Подтвердите поступление средств";
//                break;
//            case PAYMENT_RECEIVED:
//                btnMessage = "Подтвердите реквизиты платежа";
//                break;
//            case PAYMENT_VALIDATION:
//                btnMessage = "Процессинг платежа окончен.";
//                break;
//            case PAYMENT_PROCESSING:
//                btnMessage = "Средства отправлены клиенту.";
//                break;
//            case PAYMENT_SENT:
//                btnMessage = "Окончание транзакции.";
//                break;
//        }
//
//        return new InlineKeyboardMarkup().setKeyboard(getKeyboard(btnMessage, applicationEntity.getId()));
//    }
//
//    private List<List<InlineKeyboardButton>> getKeyboard(String text, String applicationId){
//        List<List<InlineKeyboardButton>> keyboard = new ArrayList<>();
//        keyboard.add(getButtons(text, applicationId));
//        return keyboard;
//    }
//
//    private List<InlineKeyboardButton> getButtons(String text, String applicationId){
//        List<InlineKeyboardButton> buttons = new ArrayList<>();
//        buttons.add(new InlineKeyboardButton().setText(text).setCallbackData(applicationId));
//        return buttons;
//    }
//}
