package com.fairpay.payments.listeners;

import com.fairpay.payments.bankVault.service.interf.ITransferService;
import com.fairpay.payments.bill.model.Bill;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Log4j2
public class BillCompleteListener implements ApplicationListener<OnBillCompleteEvent> {

    private final ITransferService iTransferService;

    @Override
    public void onApplicationEvent(final OnBillCompleteEvent event) {
        Bill bill = event.getBill();
        if(log.isDebugEnabled()) {
            log.debug("start transfer process");
        }
        if(bill.getStatus().equals("PAID")) {
            if(iTransferService.transferProcessing(bill)) {
                //Если удалось высылаем на фронт информацию о успешном переводе
            } else {
                //Иначе уведомляем/обрабатываем здесь или на уровне трансфера ответственному.
            }
        }
    }
}