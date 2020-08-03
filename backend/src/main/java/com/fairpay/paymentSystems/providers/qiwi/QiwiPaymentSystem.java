package com.fairpay.paymentSystems.providers.qiwi;

import com.fairpay.paymentSystems.providers.AbstractPaymentSystem;
import com.fairpay.paymentSystems.providers.IndirectPaymentSystem;
import com.fairpay.paymentSystems.providers.PaymentTransferWrapper;
import com.fairpay.paymentSystems.providers.PaymentWithdrawMessage;
import com.fairpay.paymentSystems.providers.qiwi.model.dto.BillQiwiDTO;
import com.fairpay.paymentSystems.providers.qiwi.service.interf.IBillProcessingService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author dsorokin on 28.07.2020
 */
public class QiwiPaymentSystem extends AbstractPaymentSystem implements IndirectPaymentSystem {

	private final IBillProcessingService billProcessingService;

	@Autowired
	public QiwiPaymentSystem(IBillProcessingService billProcessingService) {
		this.billProcessingService = billProcessingService;
	}

	@Override
	public void transfer(PaymentTransferWrapper paymentTransferWrapper) {

	}

	@Override
	public String generatePaymentLink(PaymentWithdrawMessage paymentInfo) {
		BillQiwiDTO qiwiDTO = new BillQiwiDTO();
//		qiwiDTO.s
		return billProcessingService.
	}
}
