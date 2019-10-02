import styled from 'styled-components';
import {colors, mixins} from 'src/styles';
import BaseIcon from '../Icon';

export const Root = styled.div`
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  border-color: ${colors.primary};
  background-color: ${colors.common.white};
  padding-bottom: 120%;
`;

export const Content = styled.div`
  position: absolute;
  ${mixins.pushC};
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Icon = styled(BaseIcon)`
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
  ${props => props.name === 'icon-like' && `
    padding: 12px;
  `}
  ${props => props.name === 'icon-rocket' && `
    padding: 12px;
  `}
`;

export const Value = styled.div`
  width: 150px;
  padding: 10px;
  border-radius: 4px;
  background-color: ${colors.common.black};
  color: ${colors.primary};
  text-align: center;
  font-size: 26px;
  margin-bottom: 16px;
`;

export const Text = styled.div`
  text-align: center;
  width: 200px;
  font-size: 26px;
`;
