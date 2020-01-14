package com.fairpay.payments.qiwi.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.qiwi.billpayments.sdk.model.MoneyAmount;
import com.qiwi.billpayments.sdk.model.in.CustomFields;
import com.qiwi.billpayments.sdk.model.in.Customer;
import com.qiwi.billpayments.sdk.model.out.ResponseStatus;
import lombok.Data;

import java.time.ZonedDateTime;

@Data
public class QiwiBillResponse {
    @JsonProperty("siteId")
    String siteId;
    @JsonProperty("billId")
    String billId;
    @JsonProperty("amount")
    MoneyAmount amount;
    @JsonProperty("status")
    ResponseStatus status;
    @JsonProperty("comment")
    String comment;
    @JsonProperty("customer")
    Customer customer;
    @JsonProperty("creationDateTime")
    ZonedDateTime creationDateTime;
    @JsonProperty("expirationDateTime")
    ZonedDateTime expirationDateTime;
    @JsonProperty("payUrl")
    String payUrl;
    @JsonProperty("customFields")
    CustomFields customFields;
}
