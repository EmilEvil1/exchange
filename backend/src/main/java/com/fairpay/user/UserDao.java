package com.fairpay.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDao extends JpaRepository<UserEntity, Long> {
  Optional<UserEntity> findByEmail(String email);
}
