import React from 'react';
import types from './types';
import * as CS from './style';

class Icon extends React.PureComponent {
  static propTypes = types.propTypes;

  static defaultProps = types.defaultProps;

  render() {
    const {className, name} = this.props;
    const isBurger = name === 'burger';
    if (isBurger) {
      const {isActiveBurger} = this.props;
      return (
        <CS.BurgerRoot className={className}>
          <CS.Burger isActiveBurger={isActiveBurger} />
        </CS.BurgerRoot>
      );
    }
    return (
      <CS.Root className={className} name={name}>
        <use xlinkHref={`#${name}`} />
      </CS.Root>
    );
  }
}

export default Icon;
