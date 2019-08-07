import styled, {css} from 'styled-components';
import Color from 'color';
import {colors, mixins} from 'frontend/src/styles';

export const Root = styled.div`
  cursor: inherit;
  overflow: hidden;
  ${mixins.overlayA}
  border-radius: inherit;
`;

const getPulseBackgroundColor = props => {
  if (props.isHidden) {
    return colors.common.transparent;
  }
  return Color(colors.common.white).alpha(0.5).string();
}

const getPulseForm = props => {
  if (props.isActive) {
    return `
      width: 200%;
      padding-bottom: 200%;
    `;
  }
  return `
    width: 1px;
    padding-bottom: 1px;
  `;
};

const getPulseTransition = props => {
  return `
    background-color ${props.delay}ms linear,
    width ${props.delay}ms linear,
    padding-bottom ${props.delay}ms linear
  `;
};

export const Pulse = styled.div`
  pointer-events: none;
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  background-color: ${getPulseBackgroundColor};
  ${getPulseForm}
  transition: ${getPulseTransition};
`;
