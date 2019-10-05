// @flow
import React, {PureComponent} from 'react';
import formField from 'src/hocs/formField';
import NumberFormat from 'react-number-format';
import * as S from './style';
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

  setValue = value => {
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

  handleChange = e => {
    const {value} = e.target;
    return this.setValue(value);
  };

  handleBlur = () => {
    const {value} = this.state;
    return this.setValue(value);
  };

  render() {
    const {id, label, ...inputProps} = this.props;
    const {value} = this.state;
    return (
      <S.Root>
        <S.Input id={id} {...inputProps} value={value} onChange={this.handleChange} onBlur={this.handleBlur} />
        {label !== undefined && (
          <S.Label>
            <label htmlFor={id}>{label}</label>
          </S.Label>
        )}
      </S.Root>
    );
  }
}

export default Input;

export const InputField = formField(Input);

export const FormatInput = ({numberFormat, numberMask, ...props}) => (
  <NumberFormat {...props} format={numberFormat} mask={numberMask} customInput={Input} />
);

export const FormatInputField = formField(FormatInput);
