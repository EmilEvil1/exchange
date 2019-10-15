package com.fairpay.currencies.bank;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface BankDao extends JpaRepository<BankEntity, String> {

  List<BankEntity> findAllByOrderByPriorityAsc();
}
