import React from 'react';
import types from './types';
import * as CS from './style';

class AdvantageCard extends React.PureComponent {
  static propTypes = types.propTypes;

  static defaultProps = types.defaultProps;

  render() {
    const {iconName, value, text} = this.props;
    return (
      <CS.Root>
        <CS.Content>
          <CS.Icon name={iconName}></CS.Icon>
          <CS.Value>{value}</CS.Value>
          <CS.Text>{text}</CS.Text>
        </CS.Content>
      </CS.Root>
    );
  }
}

export default AdvantageCard;
