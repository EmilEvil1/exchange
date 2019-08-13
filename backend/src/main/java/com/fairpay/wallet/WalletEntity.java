package com.fairpay.wallet;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "wallets")
@Table(name = "wallets")
@Data
public class WalletEntity {
  @Id
  private Long id;
  private String paymentDocument;
  private String ticker;
}
