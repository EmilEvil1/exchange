// @flow
import React, {PureComponent} from 'react';
import formField from 'src/hocs/formField';
import NumberFormat from 'react-number-format';
import * as CS from './style';
import types from './types';

class Input extends PureComponent {
  static propTypes = types.propTypes;

  static getDerivedStateFromProps(nextProps, prevState) {
    const nextState = {};
    if (nextProps.value !== undefined) {
      nextState.value = nextProps.value;
    }
    return nextState;
  }

  state = {
    value: '',
  };

  handleChange = (e) => {
    const {value} = e.target;
    if (value === this.state.value) {
      return null;
    }
    if (this.props.onChange !== undefined && this.props.value !== undefined) {
      return this.props.onChange(value);
    }
    return this.setState({value}, () => {
      if (this.props.onChange === undefined) {
        return null;
      }
      return this.props.onChange(value);
    });
  };

  render() {
    const {icon, label, ...inputProps} = this.props;
    const hasIcon = icon !== undefined;
    return (
      <CS.Root>
        <CS.Input {...inputProps} onChange={this.handleChange} $hasIcon={hasIcon} />
        {hasIcon && <CS.Icon name={icon} $isInvalid={inputProps.$isInvalid} />}
        {label !== undefined && (
          <CS.Label $hasIcon={hasIcon}>
            <label htmlFor={inputProps.id}>{label}</label>
          </CS.Label>
        )}
      </CS.Root>
    );
  }
}

export default Input;

export const InputField = formField(Input);

export const FormatInput = ({numberFormat, numberMask, ...props}) => (
  <NumberFormat {...props} format={numberFormat} mask={numberMask} customInput={Input} />
);

export const FormatInputField = formField(FormatInput);
