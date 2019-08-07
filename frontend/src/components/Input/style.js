import styled from 'styled-components';
import {colors} from 'frontend/src/styles';

const getStyle = ({disabled, isInvalid}) => {
  if (disabled) {
    return `
      color: ${colors.Input.disabledColor};
      border-color: ${colors.Input.disabledBorderColor};
      background-color: ${colors.Input.disabledBackgroundColor};
      
      ::placeholder {
        color: ${colors.Input.disabledPlaceholder};
      }

      :hover {
        cursor: not-allowed;
      }
    `;
  }
  if (isInvalid) {
    return `
      color: ${colors.Input.errorColor};
      border-color: ${colors.Input.errorBorderColor};
      background-color: ${colors.Input.errorBackgroundColor};
      
      ::placeholder {
        color: ${colors.Input.errorPlaceholder};
      }

      :focus {
        box-shadow: 0 0 0 2px ${colors.Input.errorFocusBoxShadow};
        border-color: ${colors.Input.errorBorderColor};
      }
    `;
  }
  return `
    color: ${colors.Input.color};
    border-color: ${colors.Input.borderColor};
    background-color: ${colors.Input.backgroundColor};

    ::placeholder {
      color: ${colors.Input.placeholder};
    }
    
    :hover {
      border-color: ${colors.Input.hoverBorderColor};
    }

    :focus {
      box-shadow: 0 0 0 2px ${colors.Input.focusBoxShadow};
      border-color: ${colors.Input.focusBorderColor};
    }
  `;
};

export const Root = styled.input`
  display: block;
  width: 100%;
  max-width: 100%;
  line-height: 1.5;
  padding: 8px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  transition: color 0.2s linear, border-color 0.2s linear, box-shadow 0.2s linear;
  ${getStyle}
`;
