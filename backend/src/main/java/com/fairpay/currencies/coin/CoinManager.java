package com.fairpay.currencies.coin;

public interface CoinManager {
  /**
   * Fetch actual rates from service and update DB
   */
  void updateCoinsWithActualRates();
}
