package com.fairpay.wallet;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface WalletDao extends CrudRepository<WalletEntity, Long> {
  Optional<WalletEntity> findByTicker(String ticker);
}
