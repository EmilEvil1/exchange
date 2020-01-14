package com.fairpay.payments.advcash.service;

import com.fairpay.payments.advcash.model.dto.BillAdvCashDTO;
import com.fairpay.payments.advcash.service.interf.IBillAdvCashProcessingService;
import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.runtime.RuntimeConstants;
import org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader;
import org.springframework.stereotype.Service;

import java.io.StringWriter;
import java.util.HashMap;
import java.util.Map;

@Service
public class BillAdvCashProcessingService implements IBillAdvCashProcessingService {

    @Override
    public String createPay(BillAdvCashDTO billAdvCashDTO) {
        return createHTMLTemplate(billAdvCashDTO);
    }

    private String createHTMLTemplate(BillAdvCashDTO billAdvCashDTO) {
        Map<String, Object> data = new HashMap<>();
        VelocityEngine ve = new VelocityEngine();
        ve.setProperty(RuntimeConstants.RESOURCE_LOADER, "classpath");
        ve.setProperty("classpath.resource.loader.class", ClasspathResourceLoader.class.getName());
        ve.init();
        Template t = ve.getTemplate("/templates/advcash.vm");
        VelocityContext vc = new VelocityContext();
        //**************************

        data.put("orderId", billAdvCashDTO.getBillId()); //уникальный идентификатор покупки
        data.put("account", "account"); //идентификатор магазина в системе платежа
        data.put("currency", billAdvCashDTO.getCurrency()); //валюта в которой оплачивается
        data.put("amount", billAdvCashDTO.getAmount()); //сумма оплаты покупателем
        data.put("name", "name"); //название магазина
        data.put("sign", "sign"); //контрольная сумма для подтверждение что форма от продавца
        vc.put("data", data);
        StringWriter sw = new StringWriter();
        t.merge(vc, sw);
        return sw.toString();
    }
}
