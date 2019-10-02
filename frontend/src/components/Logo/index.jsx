import React from 'react';
import * as CS from './style';

class Logo extends React.PureComponent {
  render() {
    return (
      <CS.Root exact to="/">
        <CS.Icon name="icon-logo" />
      </CS.Root>
    );
  }
}

export default Logo;
