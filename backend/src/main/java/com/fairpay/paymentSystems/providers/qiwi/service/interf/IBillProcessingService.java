package com.fairpay.paymentSystems.providers.qiwi.service.interf;

import com.fairpay.paymentSystems.providers.qiwi.controllers.QiwiResponse;
import com.fairpay.paymentSystems.providers.qiwi.model.BillQiwi;
import com.fairpay.paymentSystems.providers.qiwi.model.dto.BillQiwiDTO;
import javassist.NotFoundException;
import org.springframework.http.ResponseEntity;

import javax.servlet.http.HttpServletRequest;
import java.net.URISyntaxException;

public interface IBillProcessingService {
    String createPayUrl(BillQiwiDTO paymentRequest);

    BillQiwi updateBillStatus(QiwiResponse response, HttpServletRequest httpServletResponse) throws NotFoundException;
}
