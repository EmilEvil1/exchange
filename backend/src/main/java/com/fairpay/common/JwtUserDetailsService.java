package com.fairpay.common;

import com.fairpay.user.UserDao;
import com.fairpay.user.UserEntity;
import com.fairpay.user.vo.UserAuthInfo;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {
  private UserDao userDao;

  public JwtUserDetailsService(UserDao userDao) {
    this.userDao = userDao;
  }

  @Override
  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    if (!userDao.findByEmail(email).isPresent()) {
      throw new UsernameNotFoundException(email);
    }
    UserEntity user = userDao.findByEmail(email).orElse(new UserEntity());
    return new UserAuthInfo(user);
  }
}
