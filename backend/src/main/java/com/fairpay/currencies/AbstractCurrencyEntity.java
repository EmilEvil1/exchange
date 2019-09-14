package com.fairpay.currencies;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "currencies")
@DiscriminatorColumn(name = "CR_TYPE")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class AbstractCurrencyEntity {

  @Id
  private String code;

  private String name;

  private int priority;

  private BigDecimal reserves;
}
