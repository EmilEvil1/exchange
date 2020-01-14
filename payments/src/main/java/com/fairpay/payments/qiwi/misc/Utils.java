package com.fairpay.payments.qiwi.misc;

import com.fairpay.payments.qiwi.model.dto.BillQiwiDTO;
import com.qiwi.billpayments.sdk.model.MoneyAmount;
import com.qiwi.billpayments.sdk.model.in.CreateBillInfo;
import com.qiwi.billpayments.sdk.model.in.Customer;
import org.springframework.stereotype.Component;

import java.time.ZonedDateTime;
import java.util.Currency;
import java.util.UUID;

@Component
public class Utils {
    public CreateBillInfo buildBillInfo (BillQiwiDTO paymentRequest) throws NullPointerException {
        return new CreateBillInfo(
                UUID.randomUUID().toString(),
                new MoneyAmount(
                        paymentRequest.getAmount(),
                        Currency.getInstance(paymentRequest.getCurrency())
                ),
                paymentRequest.getComment(),
                ZonedDateTime.now().plusMinutes(20),
                new Customer(
                        paymentRequest.getEmail(),
                        paymentRequest.getAccount(),
                        paymentRequest.getPhone()
                ),
                "http://95.165.130.218:80/test"
        );
    }
}
