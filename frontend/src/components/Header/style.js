import styled from 'styled-components';
import {colors, Grid} from 'src/styles';
import BaseIcon from '../Icon';

export const Root = styled.header`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 50px;
  background-color: ${colors.secondary};
`;

export const Logo = styled(Grid.Item)`
  margin-right: 30px;
`;

export const HeaderNetworks = styled(Grid.Item)`
  margin-left: 30px;
`;

export const Icon = styled(BaseIcon)`
  width: 26px;
  height: 26px;
`;
