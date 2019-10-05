import styled from 'styled-components';
import {colors, mixins} from 'src/styles';
import BaseIcon from '../Icon';

export const Root = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  overflow: hidden;
`;

export const FirstLine = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: -22px;
`;

export const Icon = styled(BaseIcon)`
  width: 68px;
  height: 68px;
  margin-right: -12px;
`;

export const Text = styled.div`
  color: ${colors.common.yellow};
  text-transform: uppercase;
  top: 5px;
  line-height: 1;
  ${mixins.font({
    size: '42px',
    weight: 500,
  })}
`;

export const Tagline = styled.div`
  font-size: 20px;
  color: ${colors.primary};
`;
