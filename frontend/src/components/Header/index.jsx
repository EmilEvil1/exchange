import React from 'react';
import {NavLink} from 'react-router-dom';
import {withTranslation} from 'react-i18next';
import * as S from 'frontend/src/styles';
import Button from '../Button';
import Logo from '../Logo';
import Link from '../Link';
import types from './types';
import * as CS from './style';

@withTranslation()
class Header extends React.PureComponent {
  static propTypes = types.propTypes;

  render() {
    const {t} = this.props;
    return (
      <CS.Root>
        <S.ContainerFluid>
          <S.Container>
            <S.Grid.Container $alignItems="center" as="nav">
              <CS.Logo>
                <Logo />
              </CS.Logo>
              <S.Grid.Item>
                <Link
                  as={NavLink}
                  exact
                  to="/"
                  $textTransform="uppercase"
                  $textDecoration="none"
                  $textSize="15px"
                  $textWeight="700"
                  $color="white">
                  {t('Header:link.exchange')}
                </Link>
              </S.Grid.Item>
              <S.Grid.Item>
                <Link
                  as={NavLink}
                  exact
                  to="/regulations"
                  $textTransform="uppercase"
                  $textDecoration="none"
                  $textSize="15px"
                  $textWeight="700"
                  $color="white">
                  {t('Header:link.regulations')}
                </Link>
              </S.Grid.Item>
              <S.Grid.Item>
                <Link
                  as={NavLink}
                  exact
                  to="/support"
                  $textTransform="uppercase"
                  $textDecoration="none"
                  $textSize="15px"
                  $textWeight="700"
                  $color="white">
                  {t('Header:link.support')}
                </Link>
              </S.Grid.Item>
              <S.FlexFill />
              <S.Grid.Item>
                <S.Grid.Container>
                  <S.Grid.Item>
                    <Button
                      as={NavLink}
                      exact
                      to="/sign-in"
                      $variant="contained"
                      $color="blackOnBlack"
                      $size="small"
                      $textSize="18px"
                      $textWeight="500">
                      {t('common:button.signIn')}
                    </Button>
                  </S.Grid.Item>
                  <S.Grid.Item>
                    <Button
                      as={NavLink}
                      exact
                      to="/sign-up"
                      $variant="contained"
                      $color="yellow"
                      $size="small"
                      $textSize="18px"
                      $textWeight="500">
                      {t('common:button.signUp')}
                    </Button>
                  </S.Grid.Item>
                  <CS.HeaderNetworks $alignItems="center">
                    <S.Grid.Container $spacing={8}>
                      <S.Grid.Item>
                        <Link
                          $textColor="white"
                          $color="opacity"
                          href="https://yandex.ru"
                          target="_blank"
                          rel="noopener noreferrer">
                          <CS.Icon name="icon-tg" />
                        </Link>
                      </S.Grid.Item>
                      <S.Grid.Item>
                        <Link
                          $textColor="white"
                          $color="opacity"
                          href="https://yandex.ru"
                          target="_blank"
                          rel="noopener noreferrer">
                          <CS.Icon name="icon-mail" />
                        </Link>
                      </S.Grid.Item>
                      <S.Grid.Item>
                        <Link
                          $textColor="white"
                          $color="opacity"
                          href="https://yandex.ru"
                          target="_blank"
                          rel="noopener noreferrer">
                          <CS.Icon name="icon-phone" />
                        </Link>
                      </S.Grid.Item>
                    </S.Grid.Container>
                  </CS.HeaderNetworks>
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
