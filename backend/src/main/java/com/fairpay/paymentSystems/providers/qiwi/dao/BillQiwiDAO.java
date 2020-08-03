package com.fairpay.paymentSystems.providers.qiwi.dao;

import com.fairpay.paymentSystems.providers.qiwi.model.BillQiwi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
public interface BillQiwiDAO extends JpaRepository<BillQiwi, Long> {
    Optional<BillQiwi> findBillQiwiByBillId(String billdId);
}
