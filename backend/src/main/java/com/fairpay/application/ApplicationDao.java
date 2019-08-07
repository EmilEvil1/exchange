package com.fairpay.application;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface ApplicationDao extends CrudRepository<ApplicationEntity, String> {

  @Transactional
  @Modifying
  @Query("UPDATE applications app SET app.status = ?2 where app.id = ?1")
  void updateStatus(String id, ApplicationEntity.ApplicationStatus status);
}