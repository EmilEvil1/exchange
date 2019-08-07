// @flow
import React from 'react';
import formField from 'frontend/src/hocs/formField';
import NumberFormat from 'react-number-format';
import * as S from './style';

export default S.Root;

export const InputField = formField(S.Root);

export const FormatInput = props => (
  <NumberFormat {...props} customInput={S.Root} />
);

export const FormatInputField = formField(FormatInput);
