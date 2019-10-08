package com.fairpay.payments.bankVault.model;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
@Data
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public abstract class Wallet {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected long id;
    protected String site;
    protected String walletType;

    @ManyToMany
    protected List<Currency> currencyList = new ArrayList<>();
}
