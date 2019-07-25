package com.fairpay.application;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ApplicationDao extends CrudRepository<ApplicationEntity, String> {
}