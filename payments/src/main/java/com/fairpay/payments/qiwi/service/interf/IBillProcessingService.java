package com.fairpay.payments.qiwi.service.interf;

import com.fairpay.payments.qiwi.controllers.QiwiResponse;
import com.fairpay.payments.qiwi.model.BillQiwi;
import com.fairpay.payments.qiwi.model.dto.BillQiwiDTO;
import javassist.NotFoundException;
import org.springframework.http.ResponseEntity;

import javax.servlet.http.HttpServletRequest;
import java.net.URISyntaxException;

public interface IBillProcessingService {
    ResponseEntity<?> createPayUrl(BillQiwiDTO paymentRequest) throws URISyntaxException;

    BillQiwi updateBillStatus(QiwiResponse response, HttpServletRequest httpServletResponse) throws NotFoundException;
}
