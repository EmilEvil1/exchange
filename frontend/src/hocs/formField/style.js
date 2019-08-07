import styled from 'styled-components';
import {colors, mixins} from 'frontend/src/styles';

export const Root = styled.div`
  width: 100%;
  margin-bottom: 24px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;
`;

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  ${mixins.font({size: '12px'})}
  margin-right: auto;
  color: ${colors.formField.labelColor};
  transition: color 0.2s linear;
`;

export const HeaderActions = styled.div`
  margin-left: auto;
`;

export const Error = styled.div`
  ${props => !props.isInvalid && 'visibility: hidden;'}
  color: ${colors.formField.errorColor};
  ${mixins.font({size: '10px'})}
  margin-top: 2px;
  min-height: 18px;
`;

export const Footer = styled.div``;
