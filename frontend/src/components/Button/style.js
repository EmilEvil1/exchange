import styled from 'styled-components';
import Color from 'color';
import {colors, mixins} from 'src/styles';

export const Content = styled.span``;

export const Text = styled.span``;

const getRootContainedStyles = props => {
  if (props.$variant !== 'contained') {
    return null;
  }
  const baseContained = `
    border: none;
    transition: background-color 200ms linear, border-color 200ms linear, color 200ms linear;
    padding: ${props.$padding !== undefined ? props.$padding : '8px 28px'};
    border-radius: 4px;
    font-size: ${props.$fontSize !== undefined ? props.$fontSize : '20px'};
    text-transform: ${props.$textTransform !== undefined ? props.$textTransform : 'uppercase'};
    font-weight: ${props.$fontWeight !== undefined ? props.$fontWeight : '500'};
    text-align: ${props.$textAlign !== undefined ? props.$padding : 'center'};
    ${props.$fullWidth ? 'width: 100%;' : ''}
    ${props.disabled ? `
      pointer-events: none;
      :hover {
        cursor: not-allowed;
      }
    `: ''}
  `;
  switch (props.$color) {
    case 'blackOnBlack': {
      return `
        ${baseContained}
        ${!props.disabled && `
          color: ${colors.common.white};
          background-color: ${colors.common.blackOnBlack};
          :hover {
            cursor: pointer;
            color: ${Color(colors.common.white).darken(0.2).string()};
            background-color: ${Color(colors.common.blackOnBlack).darken(0.2).string()};
          }
          :focus {
            color: ${Color(colors.common.white).darken(0.2).string()};
            background-color: ${Color(colors.common.blackOnBlack).darken(0.2).string()};
          }
          :active {
            color: ${Color(colors.common.white).darken(0.3).string()};
            background-color: ${Color(colors.common.blackOnBlack).darken(0.3).string()};
          }
          &.active {
            cursor: default;
            pointer-events: none;
            color: ${colors.common.white};
            background-color: ${colors.common.blackOnBlack};
          }
        `}
      `;
    }
    case 'yellow': {
      return `
        ${baseContained}
        ${!props.disabled && `
          color: ${colors.common.black};
          background-color: ${colors.primary};
          :hover {
            cursor: pointer;
            color: ${colors.common.black};
            background-color: ${Color(colors.common.yellow).darken(0.2).string()};
          }
          :focus {
            color: ${colors.common.black};
            background-color: ${Color(colors.common.yellow).darken(0.2).string()};
          }
          :active {
            color: ${colors.common.black};
            background-color: ${Color(colors.common.yellow).darken(0.3).string()};
          }
          &.active {
            cursor: default;
            pointer-events: none;
            color: ${colors.common.black};
            background-color: ${colors.primary};
          }
        `}
      `;
    }
    default: {
      return `
        ${baseContained}
        ${!props.disabled && `
          color: ${colors.common.black};
          background-color: ${colors.common.white};
          :hover {
            cursor: pointer;
            color: ${Color(colors.common.black).lighten(1).string()};
            background-color: ${colors.common.white};
          }
          :focus {
            color: ${Color(colors.common.black).lighten(2).string()};
            background-color: ${colors.common.white};
          }
          :active {
            color: ${Color(colors.common.black).lighten(2).string()};
            background-color: ${colors.common.white};
          }
          &.active {
            cursor: default;
            pointer-events: none;
            color: ${colors.common.black};
            background-color: ${colors.common.white};
          }
        `}
      `;
    }
  }
};

export const Root = styled.button`
  ${getRootContainedStyles}
`;
