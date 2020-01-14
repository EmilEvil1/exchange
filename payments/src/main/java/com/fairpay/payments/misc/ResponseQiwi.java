package com.fairpay.payments.misc;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class ResponseQiwi {
    @NonNull
    private String error;
}