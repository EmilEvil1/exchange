package com.fairpay.currencies.coin.service;

import com.fairpay.currencies.coin.vo.CoinmarketCurrenciesResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@Log4j2
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CoinServiceImpl implements CoinService {

  private static String GET_CURRENCIES_URL = "/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=";

  private static final String HOST_KEY = "coinmarket.url";
  private static final String API_KEY = "coinmarket.token";

  private static final String API_KEY_HEADER = "X-CMC_PRO_API_KEY";

  private final RestTemplate restTemplate;
  private final Environment environment;

  @Override
  public CoinmarketCurrenciesResponse getCryptoRatesAgainstCurrency(String currency) {
    HttpHeaders headers = new HttpHeaders();
    headers.add(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);
    headers.add(CoinServiceImpl.API_KEY_HEADER, environment.getProperty(CoinServiceImpl.API_KEY));

    String url = environment.getProperty(CoinServiceImpl.HOST_KEY) + CoinServiceImpl.GET_CURRENCIES_URL + currency;

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
}
