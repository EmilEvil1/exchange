import React from 'react';
import {NavLink} from 'react-router-dom';
import * as CS from './style';

class Logo extends React.PureComponent {
  render() {
    return (
      <CS.Root exact to="/" as={NavLink}>
        <CS.Icon name="icon-logo" />
      </CS.Root>
    );
  }
}

export default Logo;
