import styled, {css} from 'styled-components';
import * as mixins from 'frontend/src/styles/mixins';

const getFlow = (props) => {
  if (props.flow !== undefined) {
    return `flex-flow: ${props.flow};`;
  }
  return null;
};

const getJustifyContent = props => {
  if (props.justifyContent !== undefined) {
    return `justify-content: ${props.justifyContent};`;
  }
  return null;
};

const getJustifyItems = props => {
  if (props.justifyItems !== undefined) {
    return `justify-items: ${props.justifyItems};`;
  }
  return null;
};

const getAlignContent = props => {
  if (props.alignContent !== undefined) {
    return `align-content: ${props.alignContent};`;
  }
  return null;
};

const getAlignItems = props => {
  if (props.alignItems !== undefined) {
    return `align-items: ${props.alignItems};`;
  }
  return null;
};

const getSpacing = props => {
  const {spacing = 16} = props;
  return `
    margin: 0 -${spacing / 2}px;
    
    > ${Item} {
      padding: ${spacing / 2}px;
      
      > ${Container} {
        margin: -${spacing / 2}px !important;
      }
    }
  `;
};

export const Container = styled.div`
  display: flex;
  ${getFlow}
  ${getJustifyContent}
  ${getJustifyItems}
  ${getAlignItems}
  ${getAlignContent}
  ${getSpacing}
`;

const getItemColWidth = props => {
  const isEnabledXS = [1,2,3,4,5,6,7,8,9,10,11,12].includes(props.xs);
  const isEnabledSM = [1,2,3,4,5,6,7,8,9,10,11,12].includes(props.sm);
  const isEnabledMD = [1,2,3,4,5,6,7,8,9,10,11,12].includes(props.md);
  if (isEnabledXS && !isEnabledSM && !isEnabledMD) {
    return `
      flex: 0 0 ${100 / 12 * props.xs}%;
    `;
  }
  if (isEnabledXS && isEnabledSM && !isEnabledMD) {
    return `
      ${mixins.media('xs',isEnabledXS && `
        flex: 0 0 ${100 / 12 * props.xs}%;
      `)}
      ${mixins.media('xs-up', isEnabledSM && `
        flex: 0 0 ${100 / 12 * props.sm}%;
      `)}
    `;
  }
  return `
    ${mixins.media('xs',isEnabledXS && `
      flex: 0 0 ${100 / 12 * props.xs}%;
    `)}
    ${mixins.media('sm',isEnabledSM && `
      flex: 0 0 ${100 / 12 * props.sm}%;
    `)}
    ${mixins.media('md',isEnabledMD && `
      flex: 0 0 ${100 / 12 * props.md}%;
    `)}
  `;
};

export const Item = styled.div`
  display: flex;
  ${getFlow}
  ${getJustifyContent}
  ${getJustifyItems}
  ${getAlignItems}
  ${getAlignContent}
  ${getItemColWidth}
`;
