package com.fairpay.moderatorBot.services;

import com.fairpay.application.ApplicationDao;
import com.fairpay.application.ApplicationEntity;
import com.fairpay.application.ApplicationManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CallbackHandler {

    private MessageSender messageSender;
    private ApplicationManager applicationManager;
    private ApplicationDao applicationDao;

    @Autowired
    public void setMessageSender(MessageSender messageSender) {
        this.messageSender = messageSender;
    }

    @Autowired
    public void setApplicationManager(ApplicationManager applicationManager) {
        this.applicationManager = applicationManager;
    }

    @Autowired
    public void setApplicationDao(ApplicationDao applicationDao) {
        this.applicationDao = applicationDao;
    }

    public void run(String callback){
        applicationManager.goToNextStatus(callback);

        ApplicationEntity applicationEntity = applicationDao.findById(callback).orElse(new ApplicationEntity());
        messageSender.send(applicationEntity);
    }

}
