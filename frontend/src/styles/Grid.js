import styled, {css} from 'styled-components';
import * as mixins from './mixins';

const get$flexFill = (props) => {
  if (props.$flexFill !== undefined) {
    if ([props.$xs, props.$sm, props.$md].some(prop => prop !== undefined)) {
      throw props;
    }
    return 'flex: 1 1 auto;';
  }
  return undefined;
}

const get$flexFlow = (props) => {
  if (props.$flexFlow !== undefined) {
    return `flex-flow: ${props.$flexFlow};`;
  }
  return undefined;
};

const get$justifyContent = props => {
  if (props.$justifyContent !== undefined) {
    return `justify-content: ${props.$justifyContent};`;
  }
  return undefined;
};

const get$justifyItems = props => {
  if (props.$justifyItems !== undefined) {
    return `justify-items: ${props.$justifyItems};`;
  }
  return undefined;
};

const get$alignContent = props => {
  if (props.$alignContent !== undefined) {
    return `align-content: ${props.$alignContent};`;
  }
  return undefined;
};

const get$alignItems = props => {
  if (props.$alignItems !== undefined) {
    return `align-items: ${props.$alignItems};`;
  }
  return undefined;
};

const get$spacing = props => {
  const {$spacing = 16} = props;
  return `
    margin: 0 -${$spacing / 2}px;
    
    > ${Item} {
      padding: ${$spacing / 2}px;
      
      > ${Container} {
        margin: -${$spacing / 2}px !important;
      }
    }
  `;
};

const getContainerItemStyle = props => {
  if (props.$flexFlow !== undefined && props.$flexFlow.includes('column')) {
    return `
      ${Item} {
        width: 100%;
      }
    `;
  }
  return undefined;
};

export const Container = styled.div`
  display: flex;
  ${get$flexFlow}
  ${get$justifyContent}
  ${get$justifyItems}
  ${get$alignItems}
  ${get$alignContent}
  ${get$spacing}
  ${getContainerItemStyle}
`;

const get$xs$sm$md = props => {
  const isEnabledXS = [1,2,3,4,5,6,7,8,9,10,11,12].includes(props.$xs);
  const isEnabledSM = [1,2,3,4,5,6,7,8,9,10,11,12].includes(props.$sm);
  const isEnabledMD = [1,2,3,4,5,6,7,8,9,10,11,12].includes(props.$md);
  if (isEnabledXS && !isEnabledSM && !isEnabledMD) {
    return `
      flex: 0 0 ${100 / 12 * props.$xs}%;
    `;
  }
  if (isEnabledXS && isEnabledSM && !isEnabledMD) {
    return css`
      ${isEnabledXS && mixins.media('xs',`
        flex: 0 0 ${100 / 12 * props.$xs}%;
      `)}
      ${isEnabledSM && mixins.media('xs-up', `
        flex: 0 0 ${100 / 12 * props.$sm}%;
      `)}
    `;
  }
  return css`
    ${isEnabledXS && mixins.media('xs', `
      flex: 0 0 ${100 / 12 * props.$xs}%;
    `)}
    ${isEnabledSM && mixins.media('sm', `
      flex: 0 0 ${100 / 12 * props.$sm}%;
    `)}
    ${isEnabledMD && mixins.media('md', `
      flex: 0 0 ${100 / 12 * props.$md}%;
    `)}
  `;
};

export const Item = styled.div`
  display: flex;
  ${get$flexFill}
  ${get$flexFlow}
  ${get$justifyContent}
  ${get$justifyItems}
  ${get$alignItems}
  ${get$alignContent}
  ${get$xs$sm$md}
`;
