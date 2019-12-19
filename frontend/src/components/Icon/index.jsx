import React from 'react';
import types from './types';
import * as CS from './style';

class Icon extends React.PureComponent {
  static propTypes = types.propTypes;

  static defaultProps = types.defaultProps;

  render() {
    const {className, name, ...ownProps} = this.props;
    return (
      <CS.Root className={className} {...ownProps}>
        <use xlinkHref={`#${name}`} />
      </CS.Root>
    );
  }
}

export default Icon;
