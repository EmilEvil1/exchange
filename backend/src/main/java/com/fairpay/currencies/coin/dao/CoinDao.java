package com.fairpay.currencies.coin.dao;

import com.fairpay.currencies.coin.model.CoinEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public interface CoinDao extends JpaRepository<CoinEntity, String> {

  @Transactional
  @Modifying
  @Query("UPDATE coins cur SET cur.rub=?1 where cur.ticker = ?2")
  void updateRubRate(BigDecimal rubRate, String ticker);

  @Transactional
  @Modifying
  @Query("UPDATE coins cur SET cur.uah=?1 where cur.ticker = ?2")
  void updateUahRate(BigDecimal uahRate, String ticker);

  Optional<CoinEntity> findByTicker (String ticker);

  List<CoinEntity> findAllByOrderByPriorityAsc();

}
