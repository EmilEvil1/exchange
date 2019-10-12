package com.fairpay.payment.providers.qiwi.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/test")
public class test {
    @GetMapping()
    public String dsfsd () {
        return "OK";
    }
}
