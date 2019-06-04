package com.fairpay;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class FairpayApplication {

  public static void main(String[] args) {
    SpringApplication.run(FairpayApplication.class, args);
  }

}
