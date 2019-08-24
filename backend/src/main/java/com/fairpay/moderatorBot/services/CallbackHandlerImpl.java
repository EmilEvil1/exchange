package com.fairpay.moderatorBot.services;

import com.fairpay.application.ApplicationDao;
import com.fairpay.application.ApplicationEntity;
import com.fairpay.application.ApplicationManager;
import com.fairpay.moderatorBot.services.interf.CallbackHandler;
import com.fairpay.moderatorBot.services.interf.MessageSender;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CallbackHandlerImpl implements CallbackHandler {

    private MessageSender messageSender;
    private final ApplicationManager applicationManager;
    private final ApplicationDao applicationDao;

    @Autowired
    public CallbackHandlerImpl(ApplicationManager applicationManager, ApplicationDao applicationDao) {
        this.applicationManager = applicationManager;
        this.applicationDao = applicationDao;
    }


    @Autowired
    public void setMessageSender(MessageSender messageSender) {
      this.messageSender = messageSender;
    }


    @Override
    public void run(String callback){
        applicationManager.goToNextStatus(callback);

        ApplicationEntity applicationEntity = applicationDao.findById(callback).orElse(new ApplicationEntity());
        messageSender.send(applicationEntity);
    }

}
