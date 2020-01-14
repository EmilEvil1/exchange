package com.fairpay.payments.advcash.controllers;

import com.fairpay.payments.advcash.model.dto.BillAdvCashDTO;
import com.fairpay.payments.advcash.service.interf.IBillAdvCashProcessingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Log4j2
public class PayAdvCashController {

    private final IBillAdvCashProcessingService iBillAdvCashProcessingService;

    @PutMapping("/rest/v1/payment/advcash/request")
    public String requestOfPaymentAdvCah (@RequestBody BillAdvCashDTO billAdvCashDTO) {
        return iBillAdvCashProcessingService.createPay(billAdvCashDTO);
    }
}
