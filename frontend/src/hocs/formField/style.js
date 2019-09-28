import styled from 'styled-components';
import {colors, mixins} from 'src/styles';

export const Error = styled.div`
  ${props => !props.$isInvalid && 'visibility: hidden;'}
  color: ${colors.formField.isInvalidColor};
  ${mixins.font({size: '14px'})}
  margin-top: 2px;
  min-height: 18px;
  transition: visibility 200ms linear, color 200ms linear;
`;
