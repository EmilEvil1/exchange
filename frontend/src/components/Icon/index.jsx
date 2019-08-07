import React from 'react';
import * as CS from './style';
import types from './types';

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
