package com.fairpay.payments.bill.model;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.ZonedDateTime;

@Entity
@Table
@Data
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "BILL_TYPE")
public abstract class Bill {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;
    protected String comment; //Комментарий к счету
    protected String systemComment; //Системный комментарий к счету
    protected String status; //Текущий статус счета
    protected String wallet; //адрес счета плательщика
    protected String cryptoCurrency; //название криптовалюты
    protected String currency; //Валюта в которой производится оплата (Alpha-3 ISO 4217 код)
    protected String payUrl; //Ссылка на созданную платежную форму
    protected BigDecimal amount = BigDecimal.ZERO; //Сумма счета, округленная до 2 знаков после запятой в меньшую сторону
    protected BigDecimal cryptoAmount = BigDecimal.ZERO; //Количество запрашиваемой валюты
    protected ZonedDateTime changedDateTime; //Дата обновления статуса. Формат даты: YYYY-MM-DDThh:mm:ss±hh
    protected ZonedDateTime creationDateTime; //Системная дата создания счета. Формат даты: YYYY-MM-DDThh:mm:ss
    protected ZonedDateTime expirationDateTime; //Срок действия созданной формы для оплаты. Формат даты: YYYY-MM-DDThh:mm:ss+\-hh:mm\
}