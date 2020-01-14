package com.fairpay.payments.qiwi;

import com.qiwi.billpayments.sdk.client.BillPaymentClient;
import com.qiwi.billpayments.sdk.client.BillPaymentClientFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class QiwiConfiguration {

    @Bean
    public BillPaymentClient getBillPaymentClient(@Value("${application.qiwiSecretKey}") String SECRET_KEY) {
        return BillPaymentClientFactory.createDefault(SECRET_KEY);
    }
}
