package com.fairpay.paymentSystems.providers;

import lombok.Data;

import java.math.BigDecimal;

/**
 * @author dsorokin on 29.07.2020
 */

@Data
public class PaymentWithdrawMessage {
	private BigDecimal amountWithdraw;
	private String phone;
	private String email;
	private String incomingWallet;
}
