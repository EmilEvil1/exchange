package com.fairpay.payment.providers.qiwi.model;

import com.fairpay.payment.providers.bill.model.Bill;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@DiscriminatorValue("QW")
public class BillQiwi extends Bill {
    protected String siteId; //Идентификатор сайта мерчанта в QIWI Кассе
    protected String billId; //Уникальный идентификатор счета в системе мерчанта
    protected String phone; //Номер телефона пользователя, на который выставляется счет (в международном формате)
    protected String email; //E-mail пользователя, куда будет отправлена ссылка для оплаты счета
    protected String account; //Идентификатор пользователя в системе мерчанта

}
