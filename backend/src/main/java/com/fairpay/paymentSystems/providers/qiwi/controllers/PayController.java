package com.fairpay.paymentSystems.providers.qiwi.controllers;

import com.fairpay.paymentSystems.providers.qiwi.fieldScope.Views;
import com.fairpay.paymentSystems.providers.qiwi.model.dto.BillQiwiDTO;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URISyntaxException;

@RestController
public class PayController {
    private final com.fairpay.paymentSystems.providers.qiwi.service.interf.IBillProcessingService IBillProcessingService;

    @Autowired
    public PayController(com.fairpay.paymentSystems.providers.qiwi.service.interf.IBillProcessingService IBillProcessingService) {
        this.IBillProcessingService = IBillProcessingService;
    }

    @PutMapping("/rest/v1/qiwi/payment")
    @JsonView(Views.Response.payUrl.class)
    public ResponseEntity<?> requestOfPayment (@RequestBody BillQiwiDTO billQiwiDTO) throws URISyntaxException {
       return IBillProcessingService.createPayUrl(billQiwiDTO);
    }
}
