package com.fairpay.payment.providers.bankVault.binance.service;

import com.fairpay.payment.providers.bankVault.binance.model.BinanceBill;
import org.springframework.stereotype.Component;

@Component
public class BinanceBillService {
  public BinanceBill generateBill() {
    return new BinanceBill();
  }
}
