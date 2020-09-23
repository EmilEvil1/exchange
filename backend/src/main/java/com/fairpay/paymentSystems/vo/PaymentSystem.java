package com.fairpay.paymentSystems.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author dsorokin on 04.08.2020
 */

@Data
@Entity
@Table(name = "payment_systems")
@ToString
@EqualsAndHashCode
public class PaymentSystem {
	@Id
	private String code;
	private String name;
	private PaymentSystemType type;
}
