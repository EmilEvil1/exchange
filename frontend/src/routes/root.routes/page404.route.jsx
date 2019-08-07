import React from 'react';
import {Button} from 'frontend/src/components';
import {routeDecorator, Route as RouteBase} from 'frontend/src/models/route';
import * as S from 'frontend/src/styles';
import hot from 'frontend/utils/hot';

@routeDecorator({
  routeId: 'page404.root',
})
@hot(module)
class Route extends RouteBase {
  render() {
    const {routeState} = this.props;
    return (
      <>
        <S.ContainerFluid>
          <S.Container>
            page404
          </S.Container>
        </S.ContainerFluid>
      </>
    );
  }
}

export default Route;
