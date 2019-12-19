import styled, {css} from 'styled-components';
import Color from 'color';
import {colors, mixins} from 'src/styles';
import BaseIcon from '../Icon';

export const Control = styled.div`
  flex-shrink: 0;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-style: solid;
  margin-right: 16px;
  transition: background-color 200ms linear,
    border-color 200ms linear;
  border-radius: 4px;
`;

export const Icon = styled(BaseIcon)`
  position: absolute;
  ${mixins.pushC}
  width: 20px;
  height: 20px;
  transition: color 200ms linear,
    opacity 200ms linear;
`;

export const ControlLabel = styled.label`
  flex-shrink: 1;
  cursor: pointer;
  ${mixins.font({
    size: '18px',
  })}
`;

const getRootIconStyle = props => css`
  ${Control} {
    ${!props.$disabled && props.$isInvalid && `
      background-color: ${Color(colors.common.red).lighten(0.7).string()};
      border-color: ${colors.common.red};
    `}
    ${!props.$disabled && !props.$isInvalid && `
      background-color: ${props.$value ? colors.primary : colors.common.white};
      border-color: ${props.$value ? colors.primary : colors.borderColor};
    `}
    ${props.$disabled && `
      background-color: ${Color(colors.borderColor).lighten(0.05).string()};
      border-color: ${colors.borderColor};
    `}
  }
  ${Icon} {
    ${!props.$disabled && props.$isInvalid && `
      opacity: ${props.$value ? '1' : '0'};
      color: ${colors.common.red};
    `}
    ${!props.$disabled && !props.$isInvalid && `
      opacity: ${props.$value ? '1' : '0'};
      color: ${colors.common.white};
    `}
    ${props.$disabled && `
      opacity: ${props.$value ? '1' : '0'};
      color: ${colors.common.blackOnBlack};
    `}
  }
`;

export const Root = styled.div`
  display: flex;
  ${getRootIconStyle}
`;
