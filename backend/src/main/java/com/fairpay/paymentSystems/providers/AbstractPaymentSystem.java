package com.fairpay.paymentSystems.providers;

/**
 * @author dsorokin on 28.07.2020
 */
public abstract class AbstractPaymentSystem {

	public abstract void transfer(PaymentTransferWrapper paymentTransferWrapper);

}
