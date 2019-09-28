import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {colors} from 'src/styles';
import BaseIcon from '../Icon';

export const Root = styled(NavLink)``;

export const Icon = styled(BaseIcon)`
  width: 155px;
  height: 35px;
`;

export const Tagline = styled.div`
  font-size: 20px;
  color: ${colors.primary};
`;
