package com.fairpay.currencies.bank;

import com.fairpay.currencies.AbstractCurrencyEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;


@Entity(name = "banks")
@DiscriminatorValue("BK")
@Data
@ToString
@EqualsAndHashCode
public class BankEntity extends AbstractCurrencyEntity {

}
