import styled, {css} from 'styled-components';
import {mixins, colors} from 'src/styles';
import BaseIcon from '../Icon';

export const Root = styled.div`
  padding-top: 20px;
`;

const getIconColor = props => {
  if (props.$isInvalid) {
    return colors.Input.Icon.isInvalidFill;
  }
  return colors.Input.Icon.fill;
};

export const Icon = styled(BaseIcon)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 35px;
  left: 17px;
  color: ${getIconColor};
`;

export const Label = styled.div`
  position: absolute;
  pointer-events: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: transform 200ms linear,
    top 200ms linear,
    left 200ms linear,
    right 200ms linear,
    color 200ms linear,
    font-size 200ms linear;
  
  > label {
    pointer-events: auto;
  }
`;

const getStyleLabel = ({value, $isInvalid, $hasIcon}) => {
  const isNotEmpty = String(value).length > 0;
  if ($isInvalid && isNotEmpty) {
    return `
      ~ ${Label} {
        top: 0px;
        left: 0px;
        right: 0px;
        color: ${colors.Input.Label.isInvalidColorNotEmpty};
        ${mixins.font({size: '14px', weight: '500'})}
        
        > label {
          cursor: pointer;
        }
      }
    `;
  }
  if ($isInvalid) {
    return `
      ~ ${Label} {
        top: 33px;
        left: ${$hasIcon ? '53px' : '17px'};
        right: 17px;
        color: ${colors.Input.Label.isInvalidColor};
        ${mixins.font({size: '20px', weight: '500'})}
        
        > label {
          user-select: none;
          cursor: text;
        }
      }
    `;
  }
  if (isNotEmpty) {
    return `
      ~ ${Label} {
        top: 0px;
        left: 0px;
        right: 0px;
        color: ${colors.Input.Label.colorNotEmpty};
        ${mixins.font({size: '14px', weight: '500'})}
        
        > label {
          cursor: pointer;
        }
      }
    `;
  }
  return `
    ~ ${Label} {
      top: 33px;
      left: ${$hasIcon ? '53px' : '17px'};
      right: 17px;
      color: ${colors.Input.Label.color};
      ${mixins.font({size: '20px', weight: '500'})}
      
      > label {
        user-select: none;
        cursor: text;
      }
    }
  `;
};

const getStyleInput = ({disabled, $isInvalid}) => {
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
    color: ${colors.Input.color};
    border-color: ${colors.Input.borderColor};
    background-color: ${colors.Input.backgroundColor};
    
    :hover {
      border-color: ${colors.Input.hoverBorderColor};
    }

    :focus {
      box-shadow: 0 0 0 2px ${colors.Input.focusBoxShadowColor};
      border-color: ${colors.Input.focusBorderColor};
    }
  `;
};

const getInputPadding = props => {
  if (props.$hasIcon) {
    return '0 16px 0 52px';
  }
  return '0 16px';
};

export const Input = styled.input`
  display: block;
  width: 100%;
  max-width: 100%;
  height: 50px;
  border-width: 1px;
  border-style: solid;
  padding: ${getInputPadding};
  border-radius: 6px;
  transition: border-color 200ms linear,
    background-color 200ms linear,
    box-shadow 200ms linear;
  ${getStyleInput}
  ${getStyleLabel}
  ${mixins.font({size: '20px', weight: '500'})}
`;
