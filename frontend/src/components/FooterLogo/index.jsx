import React from 'react';
import {NavLink} from 'react-router-dom';
import {withTranslation} from 'react-i18next';
import types from './types';
import * as CS from './style';

const FooterLogo = React.memo(({t}) => (
  <CS.Root exact to="/" as={NavLink}>
    <CS.Icon name="icon-logo" />
    <CS.Tagline>
      {t('siteInfo:tagline')}
    </CS.Tagline>
  </CS.Root>
));

FooterLogo.propTypes = types.propTypes;

export default withTranslation()(FooterLogo);
