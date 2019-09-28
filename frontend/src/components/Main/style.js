import styled from 'styled-components';
import * as S from 'src/styles';

export const Root = styled.main`
  display: flex;
  flex-flow: column;
  flex: 1 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 0 auto;
  
  ${S.ContainerFluid} {
    flex: 1 0 auto;
  }
  
  ${S.Container} {
    flex: 1 0 auto;
  }
`;
