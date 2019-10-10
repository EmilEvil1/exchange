// @flow
import React, {PureComponent} from 'react';
import formField from 'src/hocs/formField';
import NumberFormat from 'react-number-format';
import * as CS from './style';
import types from './types';

class Input extends PureComponent {
  static propTypes = types.propTypes;

  static getDerivedStateFromProps(nextProps) {
    const nextState = {};
    if (nextProps.value !== undefined) {
      nextState.value = nextProps.value;
    }
    return nextState;
  }

  state = {
    value: this.props.value || '',
    type: this.props.type || 'text',
  };

  handleChange = e => {
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

  handleTogglePasswordType = () => this.setState(prevState => ({type: prevState.type === 'password' ? 'text' : 'password'}));

  render() {
    const {beforeIcon, label, ...inputProps} = this.props;
    const {type} = this.state;
    const hasBeforeIcon = beforeIcon !== undefined;
    const isRenderPasswordEye = inputProps.type === 'password';
    const passwordEyeIcon = type === 'password' ? 'icon-eye-lock' : 'icon-eye';
    return (
      <CS.Root>
        <CS.Input {...inputProps} type={type} onChange={this.handleChange} $hasBeforeIcon={hasBeforeIcon} $isRenderPasswordEye={isRenderPasswordEye} />
        {hasBeforeIcon && <CS.Icon name={beforeIcon} $isInvalid={inputProps.$isInvalid} $beforeIcon />}
        {label !== undefined && (
          <CS.Label $hasBeforeIcon={hasBeforeIcon}>
            <label htmlFor={inputProps.id}>{label}</label>
          </CS.Label>
        )}
        {isRenderPasswordEye && (
          <CS.Icon name={passwordEyeIcon} $passwordEyeIcon onClick={this.handleTogglePasswordType} />
        )}
      </CS.Root>
    );
  }
}

export default Input;

export const InputField = formField(Input, {isEnabledLabel: false});

export const FormatInput = ({numberFormat, numberMask, ...props}) => (
  <NumberFormat {...props} format={numberFormat} mask={numberMask} customInput={Input} />
);

export const FormatInputField = formField(FormatInput);
