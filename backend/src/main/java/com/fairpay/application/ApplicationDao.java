package com.fairpay.application;

import org.springframework.data.repository.CrudRepository;

public interface ApplicationDao extends CrudRepository<ApplicationEntity, String> {
}