package com.fairpay.payments.advcash.model;

import com.fairpay.payments.bill.model.Bill;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@DiscriminatorValue("AC")
public class BillAdvCash extends Bill {
    protected String siteId; //Идентификатор сайта мерчанта в advCash Кассе
    protected String billId; //Уникальный идентификатор счета в системе мерчанта
    protected String name; //Название магазина мерчанта
}
