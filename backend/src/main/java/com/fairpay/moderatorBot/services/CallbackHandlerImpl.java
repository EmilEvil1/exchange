package com.fairpay.moderatorBot.services;

import com.fairpay.application.ApplicationDao;
import com.fairpay.application.ApplicationEntity;
import com.fairpay.application.ApplicationManager;
import com.fairpay.moderatorBot.services.interf.CallbackHandler;
import com.fairpay.moderatorBot.services.interf.MessageSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CallbackHandlerImpl implements CallbackHandler {

    private final MessageSender messageSender;
    private final ApplicationManager applicationManager;
    private final ApplicationDao applicationDao;

    @Autowired
    public CallbackHandlerImpl(MessageSender messageSender, ApplicationManager applicationManager, ApplicationDao applicationDao) {
        this.messageSender = messageSender;
        this.applicationManager = applicationManager;
        this.applicationDao = applicationDao;
    }

    @Override
    public void run(String callback){
        applicationManager.goToNextStatus(callback);

        ApplicationEntity applicationEntity = applicationDao.findById(callback).orElse(new ApplicationEntity());
        messageSender.send(applicationEntity);
    }

}
