import React from 'react';
import {withTranslation} from 'react-i18next';
import hot from 'src/utils/hot';
import {buildQuery} from 'src/utils/xhr';
import restModel from 'src/models/rest/model';
import actions from 'src/redux/actions';
import routeConnect from 'src/models/route/routeConnect';
import RouteBase from 'src/models/route/Route';
import {AdvantageCard, Step, ProgressCard} from 'src/components';
import truetype from 'src/utils/truetype';
import * as S from 'src/styles';
import types from './types';
import * as CS from './style';

const staticData = {
  routeId: 'root.application',
  resultMap: [
    'amountFrom',
    'amountTo',
    'fromDocumentPayment',
    'toDocumentPayment',
    'name',
    'email',
    'phone',
  ],
};

const mapStateToProps = state => ({
  applicationIsReceived: restModel.utils.restIsReceived('application')(state),
  application: restModel.utils.restContent('application', {})(state),
});

const mapDispatchToProps = {
  restRequest: actions.rest.request,
  restReset: actions.rest.reset,
}

@withTranslation()
@routeConnect({
  routeId: staticData.routeId,
  mapStateToProps,
  mapDispatchToProps,
})
@hot(module)
class Route extends RouteBase {
  static propTypes = types.propTypes;

  componentDidMount() {
    const {match: {params: {id}}} = this.props;
    this.props.restRequest({
      endpoint: '/api/application',
      payload: {
        applicationId: id,
      },
    }, {
      fieldId: 'application',
    });
  }

  componentWillUnmount() {
    this.props.restReset(null, {fieldId: 'application'});
  }

  render() {
    const {application, t} = this.props;
    return (
        <>
          <S.Space $xs={{height: '30px'}} />
          <S.ContainerFluid>
            <S.Container>
              <Step
                iconName="icon-fairpay-ok"
                primary={t('ApplicationForm:step.0.primary')}
                secondary={t('ApplicationForm:step.0.secondary')}
              />
              <Step
                iconName="icon-fairpay-ok"
                primary={t('ApplicationForm:step.1.primary')}
                secondary={t('ApplicationForm:step.1.secondary')}
              />
              <Step
                iconName="icon-fairpay-ok"
                primary={t('ApplicationForm:step.2.primary')}
                secondary={t('ApplicationForm:step.2.secondary')}
              />
            </S.Container>
          </S.ContainerFluid>
          <S.Space $xs={{height: '80px'}} />
          <S.ContainerFluid>
            <S.Container>
              <S.Grid.Container $justifyContent="center">
                <S.Grid.Item $xs={8}>
                  <S.Paper>
                    <CS.PaperDecore $topLeft />
                    <CS.PaperDecore $bottomRight />
                    <CS.Text
                      $textSize="25px"
                      $textAlign="center"
                      $textWeight="500"
                      $margin="0 0 16px 0"
                      >Обмен #69</CS.Text>
                    <S.Grid.Container $flexFlow="row wrap">
                      {staticData.resultMap.map((name, index) => {
                        const {[name]: value} = {
                          amountFrom: 0,
                          amountTo: 0,
                          fromDocumentPayment: '4111 1111 1111 1111',
                          toDocumentPayment: '4111 1111 1111 1111',
                          name: 'Андрей',
                          email: 'test@mail.com',
                          ...application
                        };
                        if (!truetype.oneOf(value, ['String', 'Number'])) {
                          return null;
                        }
                        return (
                          <S.Grid.Item $xs={12} $sm={6} key={index}>
                            <S.Text
                              $textSize="23px"
                              $textWeight="500">
                              {`${t(`ApplicationForm:resultMap.${name}`)}: ${value}`}
                            </S.Text>
                          </S.Grid.Item>
                        );
                      })}
                    </S.Grid.Container>
                  </S.Paper>
                </S.Grid.Item>
              </S.Grid.Container>
            </S.Container>
          </S.ContainerFluid>
          <S.Space $xs={{height: '80px'}} />
          <S.ContainerFluid>
            <S.Container>
              <S.Grid.Container $justifyContent="center">
                <S.Grid.Item>
                  <ProgressCard {...t('ProgressCard:first', {returnObjects: true})} />
                </S.Grid.Item>
                <S.Grid.Item>
                  <ProgressCard {...t('ProgressCard:second', {returnObjects: true})} />
                </S.Grid.Item>
                <S.Grid.Item>
                  <ProgressCard {...t('ProgressCard:third', {returnObjects: true})} />
                </S.Grid.Item>
                <S.Grid.Item>
                  <ProgressCard {...t('ProgressCard:fourth', {returnObjects: true})} />
                </S.Grid.Item>
                <S.Grid.Item>
                  <ProgressCard {...t('ProgressCard:fifth', {returnObjects: true})} />
                </S.Grid.Item>
              </S.Grid.Container>
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
