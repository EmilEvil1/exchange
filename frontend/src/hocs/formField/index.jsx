import React from 'react';
import hash from 'object-hash';
import * as S from 'src/styles';
import types from './types';
import * as CS from './style';

const formField = (Component, defaultProps) => {
  const NextComponent = React.memo((props) => {
    const {input, meta, isEnabledShowError, isEnabledSubmitFailed, ...ownProps} = {...props, ...defaultProps};
    const id = hash({form: meta.form, name: input.name});
    const isInvalid = meta.touched && !!meta.error && (isEnabledSubmitFailed ? meta.submitFailed : true);
    const componentProps = {
      ...ownProps,
      ...input,
      id,
      $isInvalid: isInvalid,
    };
    return (
      <S.FormItem>
        <Component {...componentProps} />
        {isEnabledShowError && (
          <CS.Error $isInvalid={isInvalid}>{meta.error}</CS.Error>
        )}
      </S.FormItem>
    );
  });

  NextComponent.propTypes = types.propTypes;
  NextComponent.defaultProps = types.defaultProps;

  return NextComponent;
};

export default formField;
