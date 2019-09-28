import styled from 'styled-components';
import {colors, mixins} from 'frontend/src/styles';

const getRootForm = props => `
  display: inline-flex;
  flex: 0 0 auto;
  width: 12px;
  height: 12px;
  color: inherit;
`;

const getIcomForm = props => {
  if (props.name === 'icon-arrow-backward') {
    return `
      stroke-width: 5px;
    `;
  }
  return undefined;
};

export const Root = styled.svg`
  ${getRootForm}
  ${getIcomForm}
`;

export const BurgerRoot = styled.div`
  ${getRootForm}
`;

export const Burger = styled.div`
  position: absolute;
  top: 5px;
  ${mixins.pushCH}
  height: 1px;
  width: 12px;
  background-color: ${props => props.isActiveBurger ? colors.common.transparent : colors.common.black};
  transition: background-color 200ms linear;
  
  :before,
  :after {
    content: '';
    position: absolute;
    ${props => !props.isActiveBurger && mixins.pushCH}
    ${props => props.isActiveBurger && `
      top: 50%;
      left: 50%;
    `}
    height: 1px;
    width: 12px;
    background-color: ${colors.common.black};
    transition: top 200ms linear, left 200ms linear, transform 200ms linear;
  }
  
    :before {
      ${props => !props.isActiveBurger && 'top: -4px;'}
      ${props => props.isActiveBurger && `
        transform: translate(-50%, -50%) rotate(45deg);
      `}
    }
    
    :after {
      ${props => !props.isActiveBurger && 'top: 4px;'}
      ${props => props.isActiveBurger && `
        transform: translate(-50%, -50%) rotate(-45deg);
      `}
    }
`;
