package com.fairpay.payments.bankVault.binance.dao;

import com.fairpay.payments.bankVault.binance.model.BinanceWallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BinanceWalletDao extends JpaRepository<BinanceWallet, Long> {
}
