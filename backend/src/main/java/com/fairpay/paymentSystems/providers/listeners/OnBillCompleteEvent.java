package com.fairpay.paymentSystems.providers.listeners;

import com.fairpay.paymentSystems.providers.bill.model.Bill;
import lombok.Getter;
import org.springframework.context.ApplicationEvent;

@Getter
public class OnBillCompleteEvent extends ApplicationEvent {

    private final Bill bill;

    public OnBillCompleteEvent(final Bill bill) {
        super(bill);
        this.bill = bill;
    }
}
