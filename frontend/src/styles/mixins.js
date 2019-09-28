import {css} from 'styled-components';
import * as fonts from './fonts';

export const media = (breakpoint, content) => {
  switch (breakpoint) {
    case 'md': {
      return `@media (min-width: 1024px) {${content}}`;
    }
    case 'md-down': {
      return `@media (max-width: 1023px) {${content}}`;
    }
    case 'sm': {
      return `@media (min-width:768px) and (max-width: 1023px) {${content}}`;
    }
    case 'sm-up': {
      return `@media (min-width: 1024px) {${content}}`;
    }
    case 'sm-down': {
      return `@media (max-width: 767px) {${content}}`;
    }
    case 'xs': {
      return `@media (min-width: 1px) and (max-width: 767px) {${content}}`;
    }
    case 'xs-up': {
      return `@media (min-width: 768px) {${content}}`;
    }
    default: {
      return `@media ${breakpoint} {${content}}`;
    }
  }
};

export const flexFill = `
  flex: 1 1 auto;
`;

export const containerFluid = `
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const container = `
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 1272px;
  padding: 0 16px;
`;

const defaultFontOptions = {
  family: fonts.family.DINProCondensed,
  size: '14px',
  weight: 400,
  style: 'normal',
};

export const font = (options = defaultFontOptions) => {
  const {
    size = defaultFontOptions.size,
    family = defaultFontOptions.family,
    weight = defaultFontOptions.weight,
    style = defaultFontOptions.style,
  } = options;
  return `
    ${fonts.cssFamily[family]}
    font-size: ${size};
    font-weight: ${weight};
    font-style: ${style};
  `;
};

export const oA = `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const oF = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const pushC = `
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const pushCH = `
  left: 50%;
  transform: translate(-50%, 0);
`;

export const pushCV = `
  top: 50%;
  transform: translate(0, -50%);
`;

export const text = (props) => css`
  ${props.$textTransform && `text-transform: ${props.$textTransform};`}
  ${props.$textDecoration && `text-decoration: ${props.$textDecoration};`}
  ${props.$textAlign && `text-align: ${props.$textAlign};`}
  ${props.$textSize && `font-size: ${props.$textSize};`}
  ${props.$textWeight && `font-weight: ${props.$textWeight};`}
  ${props.$textStyle && `font-style: ${props.$textStyle};`}
  ${props.$textColor && `color: ${props.$textColor};`}
  ${props.$margin && `margin: ${props.$margin};`}
`;
