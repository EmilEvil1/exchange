package com.fairpay.payments.bankVault.binance.model;


import com.fairpay.payments.bankVault.model.Wallet;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class BinanceWallet extends Wallet {

    private String apiKey;
    private String secret;
}
