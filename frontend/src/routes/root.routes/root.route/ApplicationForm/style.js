import styled from 'styled-components';
import {colors} from 'src/styles';
import BaseIcon from 'src/components/Icon';
import {Option as BaseOption} from 'src/components/Select/style';

export const Heading = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const SelectOption = styled(BaseOption)`
  display: flex;
  align-items: center;
`;

export const SelectText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SelectValue = styled.div`
  display: flex;
  align-items: center;
`;

export const SelectedText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Icon = styled(BaseIcon)`
  ${props => props.$result ? `
    width: 20px;
    height: 20px;
    top: 1px;
    margin: 0 4px 0 4px;
  ` : `
    width: 30px;
    height: 30px;
    margin-right: 8px;
  `}
`;
