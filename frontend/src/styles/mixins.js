import * as fonts from 'frontend/src/styles/fonts';

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
  max-width: 1276px;
  padding: 0 16px;
`;

const defaultFontOptions = {
  family: 'Roboto',
  size: '14px',
  weight: 400,
};

export const font = (options = defaultFontOptions) => {
  const {
    size = defaultFontOptions.size,
    family = defaultFontOptions.family,
    weight = defaultFontOptions.weight,
  } = options;
  return `
    ${fonts[family]}
    font-size: ${size};
    font-weight: ${weight};
  `;
};

export const overlayA = `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const overlayF = `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const pushCenter = `
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const pushCenterH = `
  left: 50%;
  transform: translate(-50%, 0);
`;

export const pushCenterV = `
  top: 50%;
  transform: translate(0, -50%);
`;
