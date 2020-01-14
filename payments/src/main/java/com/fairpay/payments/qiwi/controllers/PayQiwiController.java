package com.fairpay.payments.qiwi.controllers;

import com.fairpay.payments.qiwi.fieldScope.Views;
import com.fairpay.payments.qiwi.model.dto.BillQiwiDTO;
import com.fairpay.payments.qiwi.service.interf.IBillProcessingService;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URISyntaxException;

@RestController()
public class PayQiwiController {
    private final IBillProcessingService IBillProcessingService;

    @Autowired
    public PayQiwiController(IBillProcessingService IBillProcessingService) {
        this.IBillProcessingService = IBillProcessingService;
    }

    @PutMapping("/rest/v1/payment/qiwi/request")
    @JsonView(Views.Response.payUrl.class)
    public ResponseEntity<?> requestOfPaymentQiwi (@RequestBody BillQiwiDTO billQiwiDTO) throws URISyntaxException {
       return IBillProcessingService.createPayUrl(billQiwiDTO);
    }
}
