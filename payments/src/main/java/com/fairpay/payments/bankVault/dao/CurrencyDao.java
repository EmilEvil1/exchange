package com.fairpay.payments.bankVault.dao;

import com.fairpay.payments.bankVault.model.Currency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CurrencyDao extends JpaRepository<Currency, Long> {
}
