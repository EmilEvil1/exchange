package com.fairpay.payments.bankVault.dao;

import com.fairpay.payments.bankVault.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface  WalletDao extends JpaRepository<Wallet, Long> {


    @Query(value = "SELECT * FROM wallet w LEFT JOIN currency cu on cu.currency = ?1 RIGHT JOIN wallet_currency_list wal on wal.currency_list_id = cu.id where w.id = wal.wallet_id limit 1", nativeQuery = true)
    Wallet findWalletByCurrency(String currency);
}
