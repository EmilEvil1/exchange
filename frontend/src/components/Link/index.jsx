import React from 'react';
import {Link as BaseLink, NavLink} from 'react-router-dom';
import types from './types';
import * as CS from './style';

class Link extends React.PureComponent {
  static propTypes = types.propTypes;

  static defaultProps = types.defaultProps;

  getRootProps() {
    const {children, ...rootProps} = this.props;
    return rootProps;
  }

  render() {
    const {children} = this.props;
    return (
      <CS.Root {...this.getRootProps()}>
        <CS.Content>
          <CS.Text>{children}</CS.Text>
        </CS.Content>
      </CS.Root>
    );
  }
}

export default Link;
