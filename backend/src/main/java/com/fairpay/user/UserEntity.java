package com.fairpay.user;

import lombok.Data;

import javax.persistence.*;

@Entity(name = "users")
@Table(name = "users")
@Data
public class UserEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  @Column(name = "user_email")
  private String email;
  @Column(name = "user_password")
  private String password;
}
