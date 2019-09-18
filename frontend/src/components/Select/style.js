import styled from 'styled-components';
import {colors, mixins} from 'frontend/src/styles';

export const Root = styled.div`
  padding-top: 20px;
`;

const getControlStyle = ({disabled, $isInvalid}) => {
  if (disabled) {
    return `
      color: ${colors.Input.disabledColor};
      border-color: ${colors.Input.disabledBorderColor};
      background-color: ${colors.Input.disabledBackgroundColor};
      
      :hover {
        cursor: not-allowed;
      }
    `;
  }
  if ($isInvalid) {
    return `
      color: ${colors.Input.isInvalidColor};
      border-color: ${colors.Input.isInvalidBorderColor};
      background-color: ${colors.Input.isInvalidBackgroundColor};

      :focus {
        box-shadow: 0 0 0 2px ${colors.Input.isInvalidFocusBoxShadowColor};
        border-color: ${colors.Input.isInvalidBorderColor};
      }
    `;
  }
  return `
    color: ${colors.Select.color};
    border-color: ${colors.Select.borderColor};
    background-color: ${colors.Select.backgroundColor};
    
    :hover {
      cursor: pointer;
      border-color: ${colors.Select.hoverBorderColor};
    }
    
    :focus {
      box-shadow: 0 0 0 2px ${colors.Select.focusBoxShadowColor};
      border-color: ${colors.Select.focusBorderColor};
    }
  `;
};

export const Control = styled.div`
  width: 100%;
  max-width: 100%;
  height: 50px;
  border-width: 1px;
  border-style: solid;
  padding: 0 18px;
  border-radius: 6px;
  transition: border-color 200ms linear,
    background-color 200ms linear,
    box-shadow 200ms linear;
  ${getControlStyle}
  ${mixins.font({size: '20px', weight: '500'})}
`;

export const Selected = styled.div`
  position: absolute;
  ${mixins.pushCV}
  left: 19px;
  right: 19px;
  pointer-events: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  box-shadow: 0 0 6px 0 ${colors.common.gray};
`;

export const Option = styled.div`
  padding: 8px;
  transition: background-color 200ms linear;
  
  :hover {
    cursor: pointer;
    background-color: ${colors.common.gray};
  }
`;
