import React from 'react';
import Button from 'frontend/src/components/Button';
import Logo from 'frontend/src/components/Logo';
import Menu from 'frontend/src/components/Menu';
import SocialLinks from 'frontend/src/components/SocialLinks';
import * as S from 'frontend/src/styles';
import * as CS from './style';

class Header extends React.PureComponent {
  render() {
    return (
      <CS.Root>
        <S.ContainerFluid>
          <S.Container>
            <S.Grid.Container alignItems="center">
              <S.Grid.Item>
                <Logo />
              </S.Grid.Item>
              <S.Grid.Item>
                <Menu />
              </S.Grid.Item>
              <S.FlexFill />
              <S.Grid.Item>
                <S.Grid.Container>
                  <S.Grid.Item>
                    <Button
                      component="Link"
                      href="/sign-in"
                      variant="text"
                      color="white"
                    >Войти</Button>
                  </S.Grid.Item>
                  <S.Grid.Item>
                    <Button
                      component="Link"
                      href="/registration"
                      variant="text"
                      color="white"
                    >Регистрация</Button>
                  </S.Grid.Item>
                  <S.Grid.Item>
                    <SocialLinks />
                  </S.Grid.Item>                 
                </S.Grid.Container>
              </S.Grid.Item>
            </S.Grid.Container>
          </S.Container>
        </S.ContainerFluid>
      </CS.Root>
    );
  }
}

export default Header;
