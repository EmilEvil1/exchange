package com.fairpay.payment.providers.qiwi.controllers;

import com.fairpay.payment.providers.listeners.OnBillCompleteEvent;
import com.fairpay.payment.providers.misc.ResponseQiwi;
import com.fairpay.payment.providers.qiwi.model.BillQiwi;
import javassist.NotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Log4j2
public class QiwiNotificationController {

    private final com.fairpay.payment.providers.qiwi.service.interf.IBillProcessingService IBillProcessingService;
    private final ApplicationEventPublisher eventPublisher;


    @PostMapping("/qiwi/notification")
    public ResponseEntity<?> getNotificationByBillStatus(@RequestBody QiwiResponse qiwiResponse, HttpServletRequest request) {
        if(log.isDebugEnabled()) {
            log.debug("received payment confirmation", qiwiResponse);
        }
        try {
            BillQiwi billQiwi = IBillProcessingService.updateBillStatus(qiwiResponse, request);
            eventPublisher.publishEvent(new OnBillCompleteEvent(billQiwi));
        } catch (NotFoundException e) {
            log.error(e);
            return ResponseEntity.ok(new ResponseQiwi("500"));
        }
        return ResponseEntity.ok(new ResponseQiwi("0"));
    }


}
