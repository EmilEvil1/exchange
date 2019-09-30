import styled from 'styled-components';
import {colors} from 'src/styles';
import {Icon as BaseIcon} from 'src/components';

export const Heading = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;
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
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;
