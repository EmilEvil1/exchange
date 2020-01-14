package com.fairpay.payments.configs;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "application")
@Data
public class ApplicationConfigs {
    private String qiwiSecretKey;
    private String qiwiKey;
}
