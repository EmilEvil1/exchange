import React from 'react';
import {withRouter} from 'react-router-dom';
import {withTranslation} from 'react-i18next'
import {connect} from 'react-redux';
import {reduxForm, Form, Field, isPristine, isValid, formValueSelector} from 'redux-form';
import get from 'lodash/get';
import {Button, FormatInputField, SelectField} from 'frontend/src/components';
import actions from 'frontend/src/redux/actions'
import validator from 'frontend/utils/validator';
import {parseQuery} from 'frontend/utils/xhr';
import types from './types';
import * as S from 'frontend/src/styles';
import {utils} from 'frontend/src/models/rest';

const staticData = {
  formId: 'TradeForm',
  currency: {
    holdType: {
      address: 'ADDRESS',
      cardNumber: 'CARD_NUMBER',
    },
  },
};

const mapStateToProps = (state, ownProps) => {
  const {location} = ownProps;
  const query = parseQuery(location.search);
  return {
    formValues: get(state, `form.${staticData.formId}.values`),
    getFormValue: fieldName => formValueSelector(staticData.formId)(state, fieldName),
    stepId: Number(query.stepId) || 1,
    initialValues: {
      from: query.from,
      to: query.to,
      amountFrom: query.amountFrom,
      amountTo: query.amountTo,
      fromDocumentPayment: query.fromDocumentPayment,
      toDocumentPayment: query.toDocumentPayment,
      email: query.email,
      phone: query.phone,
    },
    currenciesIsLoading: utils.restIsLoading('currencies', state),
    currenciesIsFail: utils.restIsFail('currencies', state),
    currenciesIsReceived: utils.restIsReceived('currencies', state),
    currencies: utils.restContent('currencies', state, []),
  };
};

const mapDispatchToProps = {
  historyPush: actions.app.historyPush,
  restRequest: actions.rest.request,
  restReset: actions.rest.reset,
};

const reduxFormConfig = {
  form: staticData.formId,
  onSubmit: (payload, dispatch) => {
    console.log(payload);
  },
  validate: (values, {t}) => {
    const result = validator(values, {
      from: 'required',
      to: 'required',
      amountFrom: 'required',
      amountTo: 'required',
      fromDocumentPayment: 'required',
      toDocumentPayment: 'required',
      email: 'required',
      // phone: 'required',
    });

    if (values.from === values.to) {
      result.from = t('validator:TradeForm.equalFrom');
      result.to = t('validator:TradeForm.equalTo');
    }

    return result;
  },
};

@withRouter
@withTranslation()
@connect(
  mapStateToProps,
  mapDispatchToProps
)
@reduxForm(reduxFormConfig)
class TradeForm extends React.Component {
  static propTypes = types.propTypes;

  static defaultProps = types.defaultProps;

  state = {
    stepId: this.props.stepId,
  };

  componentDidMount() {
    this.props.restRequest({endpoint: '/rest/currencies'}, {fieldId: 'currencies'});
  }

  componentDidUpdate(prevProps, prevState) {
    const {historyPush, formValues} = this.props;
    const {stepId} = this.state;
    if (formValues !== prevProps.formValues || stepId !== prevState.stepId) {
      historyPush({
        path: '/',
        query: {
          stepId,
          ...formValues,
        }
      });
    }
  }

  componentWillUnmount() {
    this.props.restReset(null, {fieldId: 'currencies'});
  }

  getAmountSettings(fieldName) {
    const {getFormValue, currencies} = this.props;
    if (fieldName === 'amountFrom') {
      const from = currencies.find(item => item.ticker === getFormValue('from'));
      if (from !== undefined && from.holdType === staticData.currency.holdType.cardNumber) {
        return {
          suffix: '₽',
          thousandSeparator: true,
        };
      }
      if (from !== undefined && from.holdType === staticData.currency.holdType.address) {
        return {
          thousandSeparator: true,
        };
      }
    }
    if (fieldName === 'amountTo') {
      const to = currencies.find(item => item.ticker === getFormValue('to'));
      if (to !== undefined &&to.holdType === staticData.currency.holdType.cardNumber) {
        return {
          suffix: '₽',
          thousandSeparator: true,
        };
      }
      if (to !== undefined &&to.holdType === staticData.currency.holdType.address) {
        return {
          thousandSeparator: true,
        };
      }
    }
    return null;
  }

  handleSetStep = stepId => () => this.setState({stepId});

  handleChangeCurrency = () => {
    // TODO replace to request by id or ticker
    this.props.restRequest({endpoint: '/rest/currencies'}, {fieldId: 'currencies'});
  }

  amountCalculation() {}

  render() {
    const {
      currenciesIsLoading,
      currenciesIsFail,
      currenciesIsReceived,
      currencies,
      handleSubmit,
      t
    } = this.props;
    const {stepId} = this.state;

    const isDisabledForm = false;

    return (
      <Form onSubmit={handleSubmit}>
        {stepId !== 1 && (
          <S.Grid.Container>
            <S.Grid.Item xs={12}>
              <S.Paper>
                test 1
              </S.Paper>
            </S.Grid.Item>
          </S.Grid.Container>
        )}
        {stepId === 1 && (
          <>
            <S.Grid.Container>
              <S.Grid.Item>
                <Field
                  component={SelectField}
                  label={t('TradeForm:formLabel.from')}
                  name="from"
                  type="text"
                  placeholder={t('TradeForm:formPlaceholder.from')}
                  onChange={this.handleChangeCurrency}
                  options={currencies.map(item => ({
                    value: item.ticker,
                    label: item.name,
                  }))}
                />
              </S.Grid.Item>
              <S.Grid.Item>
                <Field
                  component={SelectField}
                  label={t('TradeForm:formLabel.to')}
                  name="to"
                  type="text"
                  placeholder={t('TradeForm:formPlaceholder.to')}
                  onChange={this.handleChangeCurrency}
                  options={currencies.map(item => ({
                    value: item.ticker,
                    label: item.name,
                  }))}
                />
              </S.Grid.Item>
            </S.Grid.Container>
            <S.Grid.Container>
              <S.Grid.Item>
                <Field
                  component={FormatInputField}
                  label={t('TradeForm:formLabel.amountFrom')}
                  name="amountFrom"
                  type="text"
                  {...this.getAmountSettings('amountFrom')}
                  placeholder={t('TradeForm:formPlaceholder.amountFrom')}
                />
              </S.Grid.Item>
              <S.Grid.Item>
                <Field
                  component={FormatInputField}
                  label={t('TradeForm:formLabel.amountTo')}
                  name="amountTo"
                  type="text"
                  {...this.getAmountSettings('amountTo')}
                  placeholder={t('TradeForm:formPlaceholder.amountTo')}
                />
              </S.Grid.Item>
            </S.Grid.Container>
            <S.Grid.Container justifyContent="flex-end">
              <S.Grid.Item>
                <Button type="button" variant="contained" color="blue" onClick={this.handleSetStep(2)}>{t('common:button.next')}</Button>
              </S.Grid.Item>
            </S.Grid.Container>
          </>
        )}
        {stepId !== 2 && (
          <S.Grid.Container>
            <S.Grid.Item xs={12}>
              <S.Paper>
                test 2
              </S.Paper>
            </S.Grid.Item>
          </S.Grid.Container>
        )}
        {stepId === 2 && (
          <S.Grid.Container justifyContent="flex-end">
            <S.Grid.Item>
              <Button type="button" variant="contained" color="blue" onClick={this.handleSetStep(1)}>{t('common:button.back')}</Button>
            </S.Grid.Item>
            <S.Grid.Item>
              <Button type="button" variant="contained" color="blue" onClick={this.handleSetStep(3)}>{t('common:button.next')}</Button>
            </S.Grid.Item>
          </S.Grid.Container>
        )}
        {stepId !== 3 && (
          <S.Grid.Container>
            <S.Grid.Item xs={12}>
              <S.Paper>
                test 3
              </S.Paper>
            </S.Grid.Item>
          </S.Grid.Container>
        )}
        {stepId === 3 && (
          <S.Grid.Container justifyContent="flex-end">
            <S.Grid.Item>
              <Button type="button" variant="contained" color="blue" onClick={this.handleSetStep(2)}>{t('common:button.back')}</Button>
            </S.Grid.Item>
            <S.Grid.Item>
              <Button type="submit" variant="contained" color="blue" disabled>{t('common:button.confirm')}</Button>
            </S.Grid.Item>
          </S.Grid.Container>
        )}
      </Form>
    );
  }
}

export default TradeForm;
