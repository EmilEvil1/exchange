import styled from 'styled-components';
import {colors} from 'frontend/src/styles';

const getStyle = ({disabled, isInvalid}) => {
  if (disabled) {
    return `
      color: ${colors.Select.disabledColor};
      border-color: ${colors.Select.disabledBorderColor};
      background-color: ${colors.Select.disabledBackgroundColor};
      
      ::placeholder {
        color: ${colors.Select.disabledPlaceholder};
      }

      :hover {
        cursor: not-allowed;
      }
    `;
  }
  if (isInvalid) {
    return `
      color: ${colors.Select.errorColor};
      border-color: ${colors.Select.errorBorderColor};
      background-color: ${colors.Select.errorBackgroundColor};
      
      ::placeholder {
        color: ${colors.Select.errorPlaceholder};
      }

      :focus {
        box-shadow: 0 0 0 2px ${colors.Select.errorFocusBoxShadow};
        border-color: ${colors.Select.errorBorderColor};
      }
    `;
  }
  return `
    color: ${colors.Select.color};
    border-color: ${colors.Select.borderColor};
    background-color: ${colors.Select.backgroundColor};

    ::placeholder {
      color: ${colors.Select.placeholder};
    }
    
    :hover {
      border-color: ${colors.Select.hoverBorderColor};
    }

    :focus {
      box-shadow: 0 0 0 2px ${colors.Select.focusBoxShadow};
      border-color: ${colors.Select.focusBorderColor};
    }
  `;
};

export const Root = styled.input`
  cursor: pointer;
  caret-color: ${colors.common.transparent};
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

export const Options = styled.div`
  margin-top: 2px !important;
  background-color: ${colors.common.white};
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: ${colors.common.gray};
  max-height: 200px;
  overflow-y: auto;
`;

export const Option = styled.div`
  padding: 8px;
  transition: background-color 200ms linear;
  
  :hover {
    cursor: pointer;
    background-color: ${colors.blue};
  }
`;
