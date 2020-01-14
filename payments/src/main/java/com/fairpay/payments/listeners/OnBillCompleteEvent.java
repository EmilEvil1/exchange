package com.fairpay.payments.listeners;

import com.fairpay.payments.bill.model.Bill;
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
