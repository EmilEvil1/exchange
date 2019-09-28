import styled from 'styled-components';
import {colors, mixins} from 'frontend/src/styles';
import BaseIcon from '../Icon';

export const Decore = styled.div`
  position: absolute;
  ${props => props.$topLeft && `
    top: -8px;
    left: -8px;
  `}
  ${props => props.$bottomRight && `
    bottom: -8px;
    right: -8px;
  `}
  height: 95px;
  width: 95px;
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
    border-radius: 4px;
  }
`;

export const Icon = styled(BaseIcon)`
  position: absolute;
  ${mixins.pushC}
  width: 95px;
  height: 95px;
  color: ${colors.common.white};
`;

export const BackText = styled.div`
  position: absolute;
  ${mixins.pushC}
  ${mixins.font({
    size: '142px',
    weight: '500',
  })}
  color: ${colors.bodyBackgroundColor};
`;

export const ActiveText = styled.div`
  font-size: 36px;
  font-weight: 500;
  text-align: center;
`;

export const NotActiveText = styled.div`
  position: absolute;
  ${mixins.pushC}
  ${mixins.font({
    size: '37px',
  })}
`;

export const Root = styled.div`
  display: flex;
  align-items: center;
  width: 165px;
  height: 165px;
  border-radius: 4px;
  
  ${props => !props.$isActive && `
    transform: scale(0.7);
  `}
  
  ${props => props.$isComplete && `
    background-color: ${colors.primary};
    
    ${Decore} {
      
      :before,
      :after {
        background-color: ${colors.common.white};
      }
    }
  `}
  
  ${props => props.$isActive && `
    background-color: ${colors.common.white};
    
    ${Decore} {
      
      :before,
      :after {
        background-color: ${colors.primary};
      }
    }
  `}
  
  ${props => !props.$isComplete && !props.$isActive && `
    background-color: ${colors.common.white};
    
    ${Decore} {
      
      :before,
      :after {
        background-color: #666666;
      }
    }
  `}
`;
