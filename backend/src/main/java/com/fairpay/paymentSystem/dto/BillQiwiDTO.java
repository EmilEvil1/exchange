package com.fairpay.paymentSystem.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class BillQiwiDTO extends AbstractPaymentRequest {
    private String phone = ""; //Номер телефона пользователя, на который выставляется счет (в международном формате)
    private String email = ""; //E-mail пользователя, куда будет отправлена ссылка для оплаты счета
    private String account = ""; //Идентификатор пользователя в системе мерчанта
    private String comment = ""; //Комментарий к счету
    private BigDecimal amount; //Сумма счета, округленная до 2 знаков после запятой в меньшую сторону
    private String currency; //Валюта счета (Alpha-3 ISO 4217 код)
    private String payUrl; //Ссылка на созданную платежную форму
}
