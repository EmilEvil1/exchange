import styled, {css} from 'styled-components';
import Color from 'color';
import {colors, mixins} from 'frontend/src/styles';

export const Content = styled.span``;

export const Text = styled.span``;

const getRootStyles = props => {
  switch (props.$variant) {
    case 'contained': {
      const baseContained = css`
        border: none;
        transition: background-color 200ms linear,
          border-color 200ms linear,
          color 200ms linear;
        padding: 4px 12px;
        border-radius: 4px;
        ${props.disabled && `
          pointer-events: none;
          :hover {
            cursor: not-allowed;
          }
        `}
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
    }
    case 'text': {
      return undefined;
    }
    case 'default':
    default: {
      return undefined;
    }
  }
};

export const Root = styled.button`
  ${mixins.text}
  ${getRootStyles}
`;
