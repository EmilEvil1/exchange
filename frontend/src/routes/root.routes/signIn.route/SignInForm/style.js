import styled from 'styled-components';
import {colors, mixins} from 'src/styles';

export const Root = styled.form`
  width: 350px;
  max-width: 100%;
`;

export const Title = styled.h1`
  display: block;
  text-transform: uppercase;
  text-align: center;
  ${mixins.font({
    size: '28px',
    weight: 500,
  })}
  border-bottom: 2px solid ${colors.primary};
  margin-top: 0;
  margin-bottom: 24px;
  padding-bottom: 10px;
`;
