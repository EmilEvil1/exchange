package com.fairpay.paymentSystems.providers.bankVault.dao;

import com.fairpay.paymentSystems.providers.bankVault.model.Currency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CurrencyPaymentDao extends JpaRepository<Currency, Long> {
}
