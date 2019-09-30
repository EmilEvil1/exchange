import React from 'react';
import {withRouter, Link, NavLink} from 'react-router-dom';
// import Pulse from '../Pulse';
import types from './types';
import * as CS from './style';

class Button extends React.PureComponent {
  static propTypes = types.propTypes;

  static defaultProps = types.defaultProps;

  getRootProps() {
    const {children, ...rootProps} = this.props;
    return rootProps;
  }

  render() {
    const {$color, children} = this.props;
    return (
      <CS.Root {...this.getRootProps()}>
        <CS.Content>
          <CS.Text>{children}</CS.Text>
        </CS.Content>
      </CS.Root>
    );
  }
}

export default Button;
