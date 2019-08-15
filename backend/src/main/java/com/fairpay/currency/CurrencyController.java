package com.fairpay.currency;

import com.fairpay.currency.api.CurrencyDTO;
import com.fairpay.currency.service.CurrencyService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CurrencyController {

  private final CurrencyService currencyService;

  @RequestMapping("/api/currencies")
  public List<CurrencyDTO> fetchCurrencies() {
    return currencyService.getCurrenciesByPriority();
  }


}
