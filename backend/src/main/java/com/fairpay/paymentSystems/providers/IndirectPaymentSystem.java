package com.fairpay.paymentSystems.providers;

public interface IndirectPaymentSystem {
	String generatePaymentLink(PaymentWithdrawMessage paymentInfo);
}
