package com.fairpay.currencies;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrencyDao extends JpaRepository<AbstractCurrencyEntity, Long> {
  AbstractCurrencyEntity findByCode(String code);
}
