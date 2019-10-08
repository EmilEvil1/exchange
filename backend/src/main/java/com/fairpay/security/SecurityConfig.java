package com.fairpay.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.web.filter.CharacterEncodingFilter;

/**
 * Главный конфиг системы безопасности
 */
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        CharacterEncodingFilter filter = new CharacterEncodingFilter();
        filter.setEncoding("UTF-8");
        filter.setForceEncoding(true);

        http
                .addFilterBefore(filter, CsrfFilter.class)
                .authorizeRequests()
                .antMatchers("/qiwi/notification").permitAll()
                .anyRequest().permitAll()
                .and()
                .logout()
                .logoutUrl("/auth/logout")
//                .logoutSuccessUrl("/")
                .deleteCookies("JSESSIONID")
                .and()
                .httpBasic().disable()
                .formLogin().disable()
                .csrf().disable();
    }
}
