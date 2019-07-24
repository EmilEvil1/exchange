package com.fairpay.currency.dao;

import com.fairpay.currency.model.CurrencyEntity;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

public interface CurrencyDao extends CrudRepository<CurrencyEntity, String> {

  @Transactional
  @Modifying
  @Query("UPDATE currencies cur SET cur.rub=?1 where cur.ticker = ?2")
  void updateRubRate(BigDecimal rubRate, String ticker);

  @Transactional
  @Modifying
  @Query("UPDATE currencies cur SET cur.uah=?1 where cur.ticker = ?2")
  void updateUahRate(BigDecimal uahRate, String ticker);

}
