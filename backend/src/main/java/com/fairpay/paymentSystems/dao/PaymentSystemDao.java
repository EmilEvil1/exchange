package com.fairpay.paymentSystems.dao;

import com.fairpay.paymentSystems.vo.PaymentSystem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentSystemDao extends JpaRepository<PaymentSystem, String> {

}
