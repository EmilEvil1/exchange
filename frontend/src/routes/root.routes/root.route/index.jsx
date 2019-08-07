import React from 'react';
import {routeDecorator, Route as RouteBase} from 'frontend/src/models/route';
import * as S from 'frontend/src/styles';
import hot from 'frontend/utils/hot';
import TradeForm from './TradeForm';

@routeDecorator({
  routeId: 'root.root',
})
@hot(module)
class Route extends RouteBase {
  render() {
    const {routeState} = this.props;
    return (
      <>
        <S.ContainerFluid>
          <S.Container>
            <TradeForm />
          </S.Container>
        </S.ContainerFluid>
      </>
    );
  }
}

export default Route;
