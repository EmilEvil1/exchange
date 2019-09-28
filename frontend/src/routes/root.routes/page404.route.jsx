import React from 'react';
import {Button} from 'src/components';
import {routeConnect, Route as RouteBase} from 'src/models/route';
import * as S from 'src/styles';
import hot from 'src/utils/hot';

const staticData = {
  routeId: 'page404.root',
}

@routeConnect({
  routeId: staticData.routeId,
})
@hot(module)
class Route extends RouteBase {
  render() {
    const {route} = this.props;
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
