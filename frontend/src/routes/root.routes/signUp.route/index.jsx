import React from 'react';
import {Button} from 'src/components';
import routeConnect from 'src/models/route/routeConnect';
import RouteBase from 'src/models/route/Route';
import * as S from 'src/styles';
import hot from 'src/utils/hot';
import SignUpForm from './SignUpForm';

const staticData = {
  routeId: 'signUp.root',
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
        <S.Space $xs={{height: '30px'}} />
        <S.ContainerFluid>
          <S.Container>
            <S.Grid.Container $justifyContent="center">
              <S.Grid.Item>
                <SignUpForm />
              </S.Grid.Item>
            </S.Grid.Container>
          </S.Container>
        </S.ContainerFluid>
        <S.Space $xs={{height: '50px'}} />
      </>
    );
  }
}

export default Route;
