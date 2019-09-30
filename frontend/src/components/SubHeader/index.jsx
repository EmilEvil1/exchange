import React from 'react';
import Button from '../Button';
import * as S from 'src/styles';
import * as CS from './style';

class SubHeader extends React.PureComponent {
  state = {
    isRenderMenuPortal: false,
  };

  handleMenuButtonClick = () => {
    const {isRenderMenuPortal} = this.state;
    return this.setState({isRenderMenuPortal: !isRenderMenuPortal});
  };

  renderMenuPortal = () => {
    const {isRenderMenuPortal} = this.state;
    if (!isRenderMenuPortal) {
      return null;
    }
    return null;
  };

  render() {
    const {isRenderMenuPortal} = this.state;
    return (
      <>
        {this.renderMenuPortal()}
        <CS.Root>
          <S.ContainerFluid>
            <S.Container>
              <S.Grid.Container>
                <S.Grid.Item>
                  {/*<Button*/}
                  {/*  beforeIcon="burger"*/}
                  {/*  isActive={isRenderMenuPortal}*/}
                  {/*  onClick={this.handleMenuButtonClick}*/}
                  {/*>Все категории</Button>*/}
                </S.Grid.Item>
              </S.Grid.Container>
            </S.Container>
          </S.ContainerFluid>
        </CS.Root>
      </>
    );
  }
}

export default SubHeader;
