import styled from 'styled-components';
import {colors} from 'src/styles';
import BaseIcon from '../Icon';

export const Root = styled.footer`
  padding: 16px 0;
  background-color: ${colors.secondary};
`;

export const Icon = styled(BaseIcon)`
  width: 26px;
  height: 26px;
  color: ${colors.primary};
  margin-right: 8px;
`;

export const PoweredBy = styled.div`
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 700;
`;
