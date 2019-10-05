import React from 'react';
import {NavLink} from 'react-router-dom';
import {withTranslation} from 'react-i18next';
import types from './types';
import * as CS from './style';

@withTranslation()
class Logo extends React.PureComponent {
  static propTypes = types.propTypes;

  render() {
    const {t} = this.props;
    return (
      <CS.Root exact to="/" as={NavLink}>
        <CS.Icon name="icon-logo" />
        <CS.Text>{t('siteInfo:name')}</CS.Text>
      </CS.Root>
    );
  }
}

export default Logo;
