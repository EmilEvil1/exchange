import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {colors, mixins} from 'src/styles';
import BaseIcon from '../Icon';

export const Root = styled.div`
  display: flex;
  align-items: flex-start;
  overflow: hidden;
`;

export const Icon = styled(BaseIcon)`
  width: 46px;
  height: 46px;
  margin-left: -8px;
  margin-right: -8px;
`;

export const Text = styled.div`
  color: ${colors.common.yellow};
  text-transform: uppercase;
  top: 5px;
  line-height: 1;
  ${mixins.font({
    size: '28px',
    weight: 500,
  })}
`;
