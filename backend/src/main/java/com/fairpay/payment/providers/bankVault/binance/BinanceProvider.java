package com.fairpay.payment.providers.bankVault.binance;

import com.fairpay.payment.providers.AbstractProvider;
import com.fairpay.payment.providers.ProviderMessage;
import com.fairpay.payment.providers.bankVault.binance.model.BinanceBill;
import com.fairpay.payment.providers.bankVault.binance.service.BinanceBillService;
import com.fairpay.payment.providers.bankVault.binance.service.BinanceTransfer;
import com.fairpay.payment.vo.PaymentInfo;
import org.springframework.stereotype.Component;

@Component
public class BinanceProvider extends AbstractProvider {

  private final BinanceTransfer binanceTransfer;
  private final BinanceBillService binanceBillService;

  public BinanceProvider(BinanceTransfer binanceTransfer, BinanceBillService binanceBillService) {
    this.binanceTransfer = binanceTransfer;
    this.binanceBillService = binanceBillService;d
  }

  @Override
  public String getProviderCode() {
    return "binance";
  }

  @Override
  public ProviderMessage pay(PaymentInfo paymentInfo) {
    ProviderMessage providerMessage = new ProviderMessage();
    BinanceBill bill = binanceBillService.generateBill();
    binanceTransfer.transfer(bill);
  }
}
