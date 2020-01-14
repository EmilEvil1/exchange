package com.fairpay.payments.advcash.model.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.util.UUID;

@Data
public class BillAdvCashDTO {
    private String email = "anonim@anonim.ru"; //E-mail пользователя, куда будет отправлена ссылка для оплаты счета
    private String billId = UUID.randomUUID().toString(); //Идентификатор пользователя в системе мерчанта
    private String comment = ""; //Комментарий к счету
    private BigDecimal amount; //Сумма счета, округленная до 2 знаков после запятой в меньшую сторону
    private String cryptoCurrency; //название криптовалюты
    private String currency; //Валюта счета (Alpha-3 ISO 4217 код)
    private String wallet; //криптокошелек куда производить перевод.
}
