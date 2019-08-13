package com.fairpay.application;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface ApplicationDao extends JpaRepository<ApplicationEntity, String> {

  @Modifying
  @Query("UPDATE applications app SET app.status = ?2 where app.id = ?1")
  void updateStatus(String id, ApplicationEntity.ApplicationStatus status);
}