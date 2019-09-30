import React from 'react';
import {NavLink} from 'react-router-dom';
import {withTranslation} from 'react-i18next';
import * as S from 'src/styles';
import FooterLogo from '../FooterLogo';
import Link from '../Link';
import types from './types';
import * as CS from './style';

@withTranslation()
class Footer extends React.PureComponent {
  static propTypes = types.propTypes;

  render() {
    const {t} = this.props;
    return (
      <CS.Root>
        <S.ContainerFluid>
          <S.Container>
            <S.Grid.Container $flexFlow="row wrap">
              <S.Grid.Item>
                <FooterLogo />
              </S.Grid.Item>
              <S.Grid.Item $flexFill />
              <S.Grid.Item $flexFlow="column">
                <S.Grid.Container as="nav" $justifyContent="flex-end">
                  <S.Grid.Item>
                    <Link
                      as={NavLink}
                      exact
                      to="/"
                      $textTransform="uppercase"
                      $textDecoration="none"
                      $textSize="15px"
                      $textWeight="700"
                      $color="white"
                    >
                      {t('Footer:link.exchange')}
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
                      $color="white"
                    >
                      {t('Footer:link.regulations')}
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
                      $color="white"
                    >
                      {t('Footer:link.support')}
                    </Link>
                  </S.Grid.Item>
                </S.Grid.Container>
                <S.Space $xs={{height: '24px'}} />
                <S.Grid.Container $spacing={8} $justifyContent="flex-end">
                  <S.Grid.Item>
                    <Link
                      $textSize="15px"
                      $textWeight="700"
                      $color="white"
                      href={t('siteInfo:tgChannel.href')}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CS.Icon name="icon-tg" />
                      {t('siteInfo:tgChannel.name')}
                    </Link>
                  </S.Grid.Item>
                  <S.Grid.Item>
                    <Link
                      $textSize="15px"
                      $textWeight="700"
                      $color="white"
                      href={`mailto:${t('siteInfo:email')}`}
                    >
                      <CS.Icon name="icon-mail" />
                      {t('siteInfo:email')}
                    </Link>
                  </S.Grid.Item>
                  <S.Grid.Item>
                    <Link
                      $textSize="15px"
                      $textWeight="700"
                      $color="white"
                      href={`tel:${t('siteInfo:phone')}`}
                    >
                      <CS.Icon name="icon-phone" />
                      {t('siteInfo:phone')}
                    </Link>
                  </S.Grid.Item>
                </S.Grid.Container>
              </S.Grid.Item>
              <S.Grid.Item $xs={12} $justifyContent="center">
                <CS.PoweredBy>{t('siteInfo:poweredBy')}</CS.PoweredBy>
              </S.Grid.Item>
            </S.Grid.Container>
          </S.Container>
        </S.ContainerFluid>
      </CS.Root>
    );
  }
}

export default Footer;
