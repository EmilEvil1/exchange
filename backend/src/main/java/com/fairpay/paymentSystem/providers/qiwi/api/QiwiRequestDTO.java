package com.fairpay.paymentSystem.providers.qiwi.api;

import com.fairpay.paymentSystem.api.AbstractPaymentRequest;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
@Data
public class QiwiRequestDTO extends AbstractPaymentRequest {

    @JsonProperty("phone")
    private String phone = ""; //Номер телефона пользователя, на который выставляется счет (в международном формате)

    @JsonProperty("email")
    private String email = ""; //E-mail пользователя, куда будет отправлена ссылка для оплаты счета

    @JsonProperty("account")
    private String account = ""; //Идентификатор пользователя в системе мерчанта

    @JsonProperty("comment")
    private String comment = ""; //Комментарий к счету

    @JsonProperty("amount")
    private BigDecimal amount; //Сумма счета, округленная до 2 знаков после запятой в меньшую сторону

    @JsonProperty("coin")
    private String currency; //Валюта счета (Alpha-3 ISO 4217 код)
}
