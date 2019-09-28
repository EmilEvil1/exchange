import React from 'react';
import {withTranslation} from 'react-i18next';
import routeConnect from 'src/models/route/routeConnect';
import RouteBase from 'src/models/route/Route';
import * as S from 'src/styles';
import hot from 'src/utils/hot';
import {AdvantageCard} from 'src/components';
import ApplicationForm from './ApplicationForm';
import types from './types';

const staticData = {
  routeId: 'root.root',
};

@withTranslation()
@routeConnect({
  routeId: staticData.routeId,
})
@hot(module)
class Route extends RouteBase {
  static propTypes = types.propTypes;

  render() {
    const {route, t} = this.props;
    return (
      <>
        <S.Space $xs={{height: '30px'}} />
        <S.ContainerFluid>
          <S.Container>
            <ApplicationForm />
          </S.Container>
        </S.ContainerFluid>
        <S.Space $xs={{height: '30px'}} />
        <S.ContainerFluid>
          <S.Container>
            <S.Space $xs={{height: '1.5px'}} $backgroundColor={S.colors.primary} />
            <S.Space $xs={{height: '30px'}} />
            <S.Grid.Container $justifyContent="center">
              <S.Grid.Item $xs={3} $justifyContent="center">
                <AdvantageCard {...t('AdvantageCard:first', {returnObjects: true})} />
              </S.Grid.Item>
              <S.Grid.Item $xs={3} $justifyContent="center">
                <AdvantageCard {...t('AdvantageCard:second', {returnObjects: true})} />
              </S.Grid.Item>
              <S.Grid.Item $xs={3} $justifyContent="center">
                <AdvantageCard {...t('AdvantageCard:third', {returnObjects: true})} />
              </S.Grid.Item>
            </S.Grid.Container>
            <S.Space $xs={{height: '30px'}} />
            <S.Space $xs={{height: '1.5px'}} $backgroundColor={S.colors.primary} />
          </S.Container>
        </S.ContainerFluid>
        <S.Space $xs={{height: '50px'}} />
      </>
    );
  }
}

export default Route;
