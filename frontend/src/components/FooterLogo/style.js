import styled from 'styled-components';
import {colors} from 'src/styles';
import BaseIcon from '../Icon';

export const Root = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Icon = styled(BaseIcon)`
  width: 80px;
  height: 80px;
`;

export const Tagline = styled.div`
  font-size: 20px;
  color: ${colors.primary};
`;
