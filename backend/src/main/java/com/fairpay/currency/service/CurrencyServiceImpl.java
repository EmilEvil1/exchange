package com.fairpay.currency.service;

import com.fairpay.currency.CurrencyDTO;
import com.fairpay.currency.dao.CurrencyDao;
import com.fairpay.currency.model.CurrencyEntity;
import com.fairpay.currency.vo.CoinmarketCurrenciesResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CurrencyServiceImpl implements CurrencyService {

  private static String GET_CURRENCIES_URL = "/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=";

  private static final String HOST_KEY = "coinmarket.url";
  private static final String API_KEY = "coinmarket.token";

  private static final String API_KEY_HEADER = "X-CMC_PRO_API_KEY";

  private final static Logger log = LoggerFactory.getLogger(CurrencyServiceImpl.class);

  @Bean
  public RestTemplate restTemplate(RestTemplateBuilder builder) {
    return builder.build();
  }

  @Autowired
  private RestTemplate restTemplate;

  @Autowired
  private Environment environment;

  private CurrencyDao currencyDao;

  @Autowired
  public void setCurrencyDao(CurrencyDao currencyDao) {
    this.currencyDao = currencyDao;
  }

  public CoinmarketCurrenciesResponse getCryptoRatesAgainstCurrency(String currency) {
    HttpHeaders headers = new HttpHeaders();
    headers.add(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);
    headers.add(CurrencyServiceImpl.API_KEY_HEADER, environment.getProperty(CurrencyServiceImpl.API_KEY));

    String url = environment.getProperty(CurrencyServiceImpl.HOST_KEY) + CurrencyServiceImpl.GET_CURRENCIES_URL + currency;

    log.info("Request with url " + url);
    HttpEntity<CoinmarketCurrenciesResponse> httpEntity = new HttpEntity(headers);
    try {
      ResponseEntity<CoinmarketCurrenciesResponse> response = restTemplate.exchange(url, HttpMethod.GET, httpEntity, CoinmarketCurrenciesResponse.class);
      return response.getBody();
//      System.out.println(response.getBody().getData().get(0).getQuote().getRub().getPrice());
    } catch (Exception e) {
      log.error("error in getCryptoRatesAgainstCurrency " + e.getMessage());
      e.printStackTrace();
    }

    return null;
  }

  public List<CurrencyDTO> getCurrenciesByPriority() {
    List<CurrencyEntity> currencyEntities = new ArrayList<>();
    for (CurrencyEntity currencyEntity : currencyDao.findAll()) {
      currencyEntities.add(currencyEntity);
    }



    return currencyEntities.stream()
      .sorted(Comparator.comparingInt(CurrencyEntity::getPriority))
      .map(currencyEntity -> {
        CurrencyDTO currencyDTO = new CurrencyDTO();
        currencyDTO.setName(currencyEntity.getName());
        currencyDTO.setRub(currencyEntity.getRub());
        currencyDTO.setUah(currencyEntity.getUah());
        currencyDTO.setTicker(currencyEntity.getTicker());
        return currencyDTO;
      }).collect(Collectors.toList());
  }
}
