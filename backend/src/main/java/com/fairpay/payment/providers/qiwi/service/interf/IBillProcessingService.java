package com.fairpay.payment.providers.qiwi.service.interf;

import com.fairpay.payment.providers.qiwi.controllers.QiwiResponse;
import com.fairpay.payment.providers.qiwi.model.BillQiwi;
import com.fairpay.payment.providers.qiwi.model.dto.BillQiwiDTO;
import javassist.NotFoundException;
import org.springframework.http.ResponseEntity;

import javax.servlet.http.HttpServletRequest;
import java.net.URISyntaxException;

public interface IBillProcessingService {
    ResponseEntity<?> createPayUrl(BillQiwiDTO paymentRequest) throws URISyntaxException;

    BillQiwi updateBillStatus(QiwiResponse response, HttpServletRequest httpServletResponse) throws NotFoundException;
}
