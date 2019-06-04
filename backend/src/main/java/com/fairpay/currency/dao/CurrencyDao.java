package com.fairpay.currency.dao;

import com.fairpay.currency.model.CurrencyEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CurrencyDao extends CrudRepository<CurrencyEntity, String> {

}
