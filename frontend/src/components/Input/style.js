import styled, {css} from 'styled-components';
import {mixins, colors} from 'src/styles';

export const Root = styled.div`
  padding-top: 20px;
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
    cursor: pointer;
    pointer-events: auto;
  }
`;

const getStyleLabel = ({value, $isInvalid}) => {
  const isNotEmpty = String(value).length > 0;
  if ($isInvalid && isNotEmpty) {
    return `
      ~ ${Label} {
        top: 0px;
        left: 0px;
        right: 0px;
        color: ${colors.Input.Label.isInvalidColorNotEmpty};
        ${mixins.font({size: '14px', weight: '500'})}
      }
    `;
  }
  if ($isInvalid) {
    return `
      ~ ${Label} {
        top: 33px;
        left: 17px;
        right: 17px;
        color: ${colors.Input.Label.isInvalidColor};
        ${mixins.font({size: '20px', weight: '500'})}
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
      }
    `;
  }
  return `
    ~ ${Label} {
      top: 33px;
      left: 17px;
      right: 17px;
      color: ${colors.Input.Label.color};
      ${mixins.font({size: '20px', weight: '500'})}
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

export const Input = styled.input`
  display: block;
  width: 100%;
  max-width: 100%;
  height: 50px;
  border-width: 1px;
  border-style: solid;
  padding: 0 16px;
  border-radius: 6px;
  transition: border-color 200ms linear, background-color 200ms linear, box-shadow 200ms linear;
  ${getStyleInput}
  ${getStyleLabel}
  ${mixins.font({size: '20px', weight: '500'})}
`;
