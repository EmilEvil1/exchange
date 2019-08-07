import React from 'react';
import hash from 'object-hash';
import * as S from './style';
import types from './types';

export default Component =>
  class extends React.PureComponent {
    static propTypes = types.propTypes;

    static defaultProps = types.defaultProps;

    render() {
      const {label, actions, footer, input, meta, isEnabledShowError, ...ownProps} = this.props;
      const id = hash({form: meta.form, name: input.name});
      const isInvalid = meta.touched && !!meta.error;
      const isRenderHeader = label !== undefined || actions !== undefined;
      const componentProps = {
        ...ownProps,
        ...input,
        id,
        label,
        isInvalid,
      };

      return (
        <S.Root>
          {isRenderHeader && (
            <S.Header>
              {label !== undefined && <S.Label htmlFor={id}>{label}</S.Label>}
              {actions !== undefined && <S.HeaderActions>{actions}</S.HeaderActions>}
            </S.Header>
          )}
          <Component {...componentProps} />
          {isEnabledShowError && (
            <S.Error isInvalid={isInvalid}>{meta.error}</S.Error>
          )}
          {footer !== undefined && <S.Footer>{footer}</S.Footer>}
        </S.Root>
      )
    };
  };
