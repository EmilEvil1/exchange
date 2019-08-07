import React from 'react';
import * as S from 'frontend/src/styles';
import * as CS from './style';

class Footer extends React.PureComponent {
  render() {
    return (
      <CS.Root>
        <S.ContainerFluid>
          <S.Container>
            <S.Grid.Container>
              <S.Grid.Item>
                Footer
              </S.Grid.Item>
            </S.Grid.Container>
          </S.Container>
        </S.ContainerFluid>
      </CS.Root>
    );
  }
}

export default Footer;
