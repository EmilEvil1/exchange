// @flow
import React, {PureComponent} from 'react';
import formField from 'frontend/src/hocs/formField';
import NumberFormat from 'react-number-format';
import * as S from './style';

class Input extends PureComponent {
  render() {
    const {id, label, ...inputProps} = this.props;
    return (
      <S.Root>
        <S.Input id={id} {...inputProps} />
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
