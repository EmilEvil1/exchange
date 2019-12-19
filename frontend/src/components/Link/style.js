import styled from 'styled-components';
import Color from 'color';
import {colors, mixins} from 'src/styles';

export const Content = styled.span``;

export const Text = styled.span`
  display: flex;
  align-items: center;
`;

const getRootStyles = (props) => {
  switch (props.$color) {
    case 'white': {
      return `
        transition: color 200ms linear;
        ${!props.disabled && `
          color: ${Color(colors.common.white).darken(0.2).string()};
          :hover {
            cursor: pointer;
            color: ${Color(colors.common.white).darken(0.1).string()};
          }
          :focus {
            color: ${Color(colors.common.white).darken(0.1).string()};
          }
          :active {
            color: ${colors.common.white};
          }
          &.active {
            cursor: default;
            pointer-events: none;
            color: ${colors.common.white};
          }
        `}
        ${props.disabled && `
          pointer-events: none;
          :hover {
            cursor: not-allowed;
          }
        `}
      `;
    }
    case 'opacity': {
      return `
        transition: opacity 200ms linear;
        opacity: 1;
        :hover {
           opacity: 0.9;
        }
        :focus {
           opacity: 0.9;
        }
        :active {
           opacity: 0.8;
        }
        &.active {
           opacity: 0.8;
        }
      `;
    }
    case 'primary': {
      return `
        transition: color 200ms linear;
        ${!props.disabled && `
          color: ${colors.primary};
          :hover {
            cursor: pointer;
            color: ${Color(colors.primary).lighten(0.1).string()};
          }
          :focus {
            color: ${Color(colors.primary).lighten(0.1).string()};
          }
          :active {
            color: ${colors.primary};
          }
          &.active {
            cursor: default;
            pointer-events: none;
            color: ${colors.primary};
          }
        `}
        ${props.disabled && `
          pointer-events: none;
          :hover {
            cursor: not-allowed;
          }
        `}
      `;
    }
    default: {
      return undefined;
    }
  }
};

export const Root = styled.a`
  ${mixins.text}
  display: inline-block;
  ${getRootStyles}
`;
