import React from 'react';
import {NavLink} from 'react-router-dom';
import {withTranslation} from 'react-i18next';
import * as S from 'src/styles';
import Logo from '../Logo';
import Link from '../Link';
import Button from '../Button';
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
                      $fontSize="18px"
                      $textTransform="none"
                      $padding="4px 12px">
                      {t('Button:signIn')}
                    </Button>
                  </S.Grid.Item>
                  <S.Grid.Item>
                    <Button
                      as={NavLink}
                      exact
                      to="/sign-up"
                      $variant="contained"
                      $color="yellow"
                      $fontSize="18px"
                      $textTransform="none"
                      $padding="4px 12px">
                      {t('Button:signUp')}
                    </Button>
                  </S.Grid.Item>
                  <CS.HeaderNetworks $alignItems="center">
                    <S.Grid.Container $spacing={8}>
                      <S.Grid.Item>
                        <Link
                          $textColor="white"
                          $color="opacity"
                          href={t('siteInfo:tgChannel.href')}
                          target="_blank"
                          rel="noopener noreferrer">
                          <CS.Icon name="icon-tg" />
                        </Link>
                      </S.Grid.Item>
                      <S.Grid.Item>
                        <Link
                          $textColor="white"
                          $color="opacity"
                          href={`mailto:${t('siteInfo:email')}`}>
                          <CS.Icon name="icon-mail" />
                        </Link>
                      </S.Grid.Item>
                      <S.Grid.Item>
                        <Link
                          $textColor="white"
                          $color="opacity"
                          href={`tel:${t('siteInfo:phone')}`}>
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
