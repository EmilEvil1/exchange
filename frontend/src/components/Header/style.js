import styled from 'styled-components';
import {colors, Grid} from 'src/styles';
import BaseIcon from '../Icon';
import BaseButton from '../Button';

export const Root = styled.header`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 50px;
  background-color: ${colors.secondary};
`;

export const Logo = styled(Grid.Item)`
  padding-top: 0!important;
  padding-bottom: 0!important;
`;

export const HeaderNetworks = styled(Grid.Item)`
  margin-left: 30px;
`;

export const Icon = styled(BaseIcon)`
  width: 26px;
  height: 26px;
`;
