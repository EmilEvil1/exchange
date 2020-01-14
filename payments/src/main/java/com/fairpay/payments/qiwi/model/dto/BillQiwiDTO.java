package com.fairpay.payments.qiwi.model.dto;

import com.fairpay.payments.qiwi.fieldScope.Views;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import java.math.BigDecimal;
import java.util.UUID;

@Data
public class BillQiwiDTO {
    private String phone = "+79999999999"; //Номер телефона пользователя, на который выставляется счет (в международном формате)
    private String email = "anonim@anonim.ru"; //E-mail пользователя, куда будет отправлена ссылка для оплаты счета
    private String account = UUID.randomUUID().toString(); //Идентификатор пользователя в системе мерчанта
    private String comment = ""; //Комментарий к счету
    private BigDecimal amount; //Сумма счета, округленная до 2 знаков после запятой в меньшую сторону
    private BigDecimal cryptoAmount; //Количество запрашиваемой криптовалюты валюты
    private String cryptoCurrency; //название криптовалюты
    private String currency; //Валюта счета (Alpha-3 ISO 4217 код)
    private String wallet; //криптокошелек куда производить перевод.
    @JsonView(Views.Response.payUrl.class)
    private String payUrl; //Ссылка на созданную платежную форму
}
