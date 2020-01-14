package com.fairpay.payments.qiwi.controllers;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.qiwi.billpayments.sdk.model.out.BillResponse;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QiwiResponse {
    @JsonProperty("bill")
    BillResponse billResponse;
    private String version;
}