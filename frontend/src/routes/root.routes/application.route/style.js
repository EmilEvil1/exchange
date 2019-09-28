import styled from 'styled-components';
import * as S from 'frontend/src/styles';
import {colors, mixins} from 'frontend/src/styles';

export const Text = styled(S.Text)`
  :after {
    content: '';
    position: absolute;
    ${mixins.pushCH}
    top: 100%;
    height: 2px;
    background-color: ${colors.primary};
    width: 150px;
  }
`;

export const PaperDecore = styled.div`
  position: absolute;
  ${props => props.$topLeft && `
    top: -40px;
    left: -40px;
  `}
  ${props => props.$bottomRight && `
    bottom: -40px;
    right: -40px;
  `}
  height: 170px;
  width: 250px;
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
    background-color: ${colors.common.white};
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
    background-color: ${colors.common.white};
    border-radius: 4px;
  }
`;
