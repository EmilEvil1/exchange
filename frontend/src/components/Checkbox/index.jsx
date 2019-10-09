import React from 'react';
import formField from 'src/hocs/formField';
import types from './types';
import * as CS from './style';

class Checkbox extends React.PureComponent {
  static propTypes = types.propTypes;

  static getDerivedStateFromProps(nextProps, prevState) {
    const nextState = {};
    if (nextProps.value !== undefined) {
      nextState.value = nextProps.value;
    }
    return nextState;
  }

  state = {
    value: false,
  };

  handleChange = () => {
    if (this.props.disabled) {
      return null;
    }
    const {value} = this.state;
    if (this.props.onChange !== undefined && this.props.value !== undefined) {
      return this.props.onChange(!value);
    }
    return this.setState({value: !value}, () => {
      if (this.props.onChange === undefined) {
        return null;
      }
      return this.props.onChange(!value);
    });
  };

  render() {
    const {id, controlLabel, disabled, $isInvalid} = this.props;
    const {value} = this.state;
    return (
      <CS.Root $value={value} $disabled={disabled} $isInvalid={$isInvalid}>
        <CS.Control id={id} tabIndex="0" onClick={this.handleChange}>
          <CS.Icon name="icon-ok" />
        </CS.Control>
        <CS.ControlLabel htmlFor={id} onClick={this.handleChange}>{controlLabel}</CS.ControlLabel>
      </CS.Root>
    );
  }
}

export default Checkbox;

export const CheckboxField = formField(Checkbox);
