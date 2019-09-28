import styled from 'styled-components';
import {colors} from 'frontend/src/styles';
import BaseIcon from '../Icon';

export const Root = styled.div`
  margin-bottom: 10px;
`;

const getHead$isActive = (props) => {
  if (props.$isActive) {
    return `
      background-color: ${colors.common.transparent};
      border-color: ${colors.common.transparent};
    `;
  }
  return `
    background-color: ${colors.common.white};
    border-color: ${colors.borderColor};
  `;
}

export const Head = styled.div`
  padding: 8px 78px;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  transition: background-color 200ms linear,
    border-color 200ms linear;
  ${getHead$isActive}
`;

export const Icon = styled(BaseIcon)`
  position: absolute;
  top: 8px;
  left: 16px;
  width: 50px;
  height: 50px;
`;

export const Primary = styled.div`
  font-size: 23px;
  text-transform: uppercase;
  color: ${colors.primary};
`;

export const Secondary = styled.div`
  font-size: 22px;
  color: ${colors.secondary};
`;

const getBody$state = props => {
  if (props.$state === 'entered') {
    return ``;
  }
  if (props.$state === 'entering') {
    return `
    `;
  }
  if (props.$state === 'exiting') {
    return `
      height: 0px!important;
      opacity: 0;
    `;
  }
  if (props.$state === 'exited') {
    return `
      height: 0px!important;
      opacity: 0;
    `;
  }
  return undefined;
}

export const Body = styled.div`
  overflow: hidden;
  padding: 0 80px;
  transition: height 100ms linear,
    opacity 200ms linear;
  ${getBody$state}
`;

export const BodyContent = styled.div`
  padding: 65px 65px 95px 65px;
`;

export const BodyDecore = styled.div`
  position: absolute;
  ${props => props.$topLeft && `
    top: 10px;
    left: 0;
  `}
  ${props => props.$bottomRight && `
    bottom: 40px;
    right: 0;
  `}
  height: 220px;
  width: 310px;
  pointer-events: none;
  
  :before {
    content: '';
    position: absolute;
    ${props => props.$topLeft && `
      top: 0;
      left: 0;
    `}
    ${props => props.$bottomRight && `
      bottom: 0;
      right: 0;
    `}
    display: block;
    width: 100%;
    height: 8px;
    background-color: ${colors.primary};
    border-radius: 4px;
  }
  
  :after {
    content: '';
    position: absolute;
    ${props => props.$topLeft && `
      top: 0;
      left: 0;
    `}
    ${props => props.$bottomRight && `
      bottom: 0;
      right: 0;
    `}
    display: block;
    height: 100%;
    width: 8px;
    background-color: ${colors.primary};
    border-radius: 4px;
  }
`;
