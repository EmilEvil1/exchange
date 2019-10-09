import React from 'react';
import {withRouter} from 'react-router-dom';
import {withTranslation} from 'react-i18next';
import WAValidator from 'wallet-address-validator';
import {connect} from 'react-redux';
import {getFormValues, reduxForm, Form, Field} from 'redux-form';
import {
  Button,
  InputField,
  FormatInputField,
  SelectField,
  Step,
} from 'src/components';
import actions from 'src/redux/actions'
import validator from 'src/utils/validator';
import {parseQueryString} from 'src/utils/xhr';
import restModel from 'src/models/rest/model';
import parseFloatNumber from 'src/utils/parseFloatNumber';
import * as S from 'src/styles';
import types from './types';
import * as CS from './style';

const staticData = {
  formId: 'ApplicationForm',
  currency: {
    holdType: {
      address: 'ADDRESS',
      cardNumber: 'CARD_NUMBER',
    },
  },
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

const getSelectedCurrencies = props => {
  const {formValues, currencies} = props;
  return {
    from: currencies.find(item => item.ticker === formValues.from),
    to: currencies.find(item => item.ticker === formValues.to)
  };
}

const mapStateToProps = (state, ownProps) => {
  const currenciesIsReceived = restModel.utils.restIsReceived('currencies')(state);
  const currencies = restModel.utils.restContent('currencies', [])(state);
  const query = parseQueryString(ownProps.location.search);
  const stepId = Number(query.stepId) || 0;
  const formValues = getFormValues(staticData.formId)(state) || {};
  const isDisabledForm = !currenciesIsReceived;
  const isDisabledSubmit = isDisabledForm || true; // todo
  return {
    currenciesIsReceived,
    currencies,
    stepId,
    initialValues: {
      from: query.from || 'SBER',
      to: query.to || 'BTC',
      amountFrom: query.amountFrom || '0',
      amountTo: query.amountTo || '0',
      fromDocumentPayment: query.fromDocumentPayment,
      toDocumentPayment: query.toDocumentPayment,
      email: query.email,
      phone: query.phone,
    },
    formValues,
    isDisabledForm,
    isDisabledSubmit
  };
};

const mapDispatchToProps = {
  historyPush: actions.app.historyPush,
  restRequest: actions.rest.request,
  restReset: actions.rest.reset,
};

const reduxFormConfig = {
  form: staticData.formId,
  onSubmit: (values, dispatch) => {
    return dispatch(actions.rest.request({
      endpoint: '/api/application',
      method: 'POST',
      payload: values,
    }, {
      fieldId: 'submit',
      onSuccess(result) {
        dispatch(actions.app.historyPush(`/application/${result.payload}`));
      },
      onFail(error) {

      }
    }));
  },
  validate: (values, {t}) => {
    const rules = {
      from: 'required',
      to: 'required',
      amountFrom: 'required',
      amountTo: 'required',
      fromDocumentPayment: 'required',
      toDocumentPayment: 'required',
      email: 'required|email',
      phone: 'required|phone/ru',
    };
    return validator(values, rules);
  },
};

@withRouter
@withTranslation()
@connect(
  mapStateToProps,
  mapDispatchToProps
)
@reduxForm(reduxFormConfig)
class ApplicationForm extends React.Component {
  static propTypes = types.propTypes;

  static defaultProps = types.defaultProps;

  state = {
    stepId: this.props.stepId,
  };

  componentDidMount() {
    this.props.restRequest({endpoint: '/api/currencies'}, {fieldId: 'currencies'});
  }

  componentDidUpdate(prevProps, prevState) {
    const {formValues} = this.props;
    const {stepId} = this.state;

    if (formValues !== prevProps.formValues || stepId !== prevState.stepId) {
      this.props.historyPush({
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
    this.props.restReset(null, {fieldId: 'submit'});
  }

  handleSetStep = stepId => () => this.setState({stepId});

  renderHiddenFields() {
    const {isDisabledSubmit} = this.props;
    const {stepId} = this.state;
    return (
      <>
        {!isDisabledSubmit && <input type="submit" hidden />}
        {stepId !== 0 && (
          <>
            <Field name="from" component="input" hidden />
            <Field name="to" component="input" hidden />
            <Field name="amountFrom" component="input" hidden />
            <Field name="amountTo" component="input" hidden />
            <Field name="fromDocumentPayment" component="input" hidden />
            <Field name="toDocumentPayment" component="input" hidden />
          </>
        )}
        {stepId !== 1 && (
          <>
            <Field name="email" component="input" hidden />
            <Field name="phone" component="input" hidden />
          </>
        )}
        {stepId !== 2 && null}
      </>
    );
  }

  render() {
    const {
      currenciesIsReceived,
      currencies,
      formValues,
      isDisabledForm,
      isDisabledSubmit,
      handleSubmit,
      t
    } = this.props;
    const {stepId} = this.state;
    const amountFromProps = (() => {
      if (!currenciesIsReceived) {
        return undefined;
      }
      const {from, to} = getSelectedCurrencies(this.props);
      if (from.holdType === staticData.currency.holdType.address) {
        const amountFromMax = to.reserves / from.rub;
        return {
          onChange: value => {
            this.props.change('amountTo', parseFloatNumber({fixed: 2})(
              parseFloatNumber({
                max: amountFromMax,
                fixed: 10,
              })(value) * from.rub)
            );
          },
          parse: parseFloatNumber({
            max: amountFromMax,
            fixed: 10,
          }),
        };
      }
      if (from.holdType === staticData.currency.holdType.cardNumber) {
        const amountFromMax = to.rub * to.reserves;
        return {
          onChange: value => {
            this.props.change('amountTo', parseFloatNumber({fixed: 10})(
              parseFloatNumber({
                max: amountFromMax,
                fixed: 2,
              })(value) / to.rub
            ));
          },
          parse: parseFloatNumber({
            max: amountFromMax,
            fixed: 2,
          }),
        };
      }
      return undefined;
    })();
    const amountToProps = (() => {
      if (!currenciesIsReceived) {
        return undefined;
      }
      const {from, to} = getSelectedCurrencies(this.props);
      if (to.holdType === staticData.currency.holdType.address) {
        return {
          onChange: value => {
            // this.props.change('amountFrom', parseFloatNumber({fixed: 2})(
            //   parseFloatNumber({
            //     max: to.reserves,
            //     fixed: 10,
            //   })(value)
            // ));
          },
          parse: parseFloatNumber({
            max: to.reserves,
            fixed: 10,
          }),
        };
      }
      if (to.holdType === staticData.currency.holdType.cardNumber) {
        return {
          onChange: value => {
            this.props.change('amountFrom', parseFloatNumber({fixed: 10})(
              parseFloatNumber({
                max: to.reserves,
                fixed: 2,
              })(value)
            ));
          },
          parse: parseFloatNumber({
            max: to.reserves,
            fixed: 2,
          }),
        };
      }
      return undefined;
    })();
    return (
      <Form onSubmit={handleSubmit}>
        {this.renderHiddenFields()}
        <Step
          isActive={stepId === 0}
          iconName={t('ApplicationForm:step.0.iconName')}
          primary={t('ApplicationForm:step.0.primary')}
          secondary={t('ApplicationForm:step.0.secondary')}>
          <S.Grid.Container $flexFlow="row wrap">
            <S.Grid.Item $xs={12} $sm={6} $flexFlow="column">
              <CS.Heading>{`${t('ApplicationForm:heading.from')}:`}</CS.Heading>
              <S.Grid.Container $flexFlow="row wrap">
                <S.Grid.Item $xs={12} $sm={6}>
                  <Field
                    type="text"
                    name="amountFrom"
                    label={t('ApplicationForm:formField.amountFrom.label')}
                    component={InputField}
                    {...amountFromProps}
                  />
                </S.Grid.Item>
                <S.Grid.Item $xs={12} $sm={6}>
                  <Field
                    name="from"
                    label="test"
                    component={SelectField}
                    options={currencies.map(item => ({
                      value: item.ticker,
                      label: item.name,
                    }))}
                    renderOptions={({props, handleOptionClick}) =>
                      props.options.map((option, index) => (
                        <CS.SelectOption onClick={handleOptionClick(option)} key={index}>
                          <CS.Icon name={`icon-${option.value.toLowerCase()}`} />
                          <CS.SelectText>{t(`currency:ticker.${option.value}`)}</CS.SelectText>
                        </CS.SelectOption>
                      ))}
                    renderValue={({state: selectState}) => (
                      <CS.SelectValue>
                        <CS.Icon name={`icon-${selectState.value.toLowerCase()}`} />
                        <CS.SelectedText>{t(`currency:ticker.${selectState.value}`)}</CS.SelectedText>
                      </CS.SelectValue>
                    )}
                  />
                </S.Grid.Item>
                <S.Grid.Item $xs={12}>
                  <Field
                    type="text"
                    name="fromDocumentPayment"
                    label={t('ApplicationForm:formField.fromDocumentPayment.label.address')}
                    component={InputField}
                  />
                </S.Grid.Item>
              </S.Grid.Container>
            </S.Grid.Item>
            <S.Grid.Item $xs={12} $sm={6} $flexFlow="column">
              <CS.Heading>{`${t('ApplicationForm:heading.to')}:`}</CS.Heading>
              <S.Grid.Container $flexFlow="row wrap">
                <S.Grid.Item $xs={12} $sm={6}>
                  <Field
                    type="text"
                    name="amountTo"
                    label={t('ApplicationForm:formField.amountTo.label')}
                    component={InputField}
                    {...amountToProps}
                  />
                </S.Grid.Item>
                <S.Grid.Item $xs={12} $sm={6}>
                  <Field
                    name="to"
                    label="test"
                    component={SelectField}
                    options={currencies.map(item => ({
                      value: item.ticker,
                      label: item.name,
                    }))}
                    renderOptions={({props, handleOptionClick}) =>
                      props.options.map((option, index) => (
                        <CS.SelectOption onClick={handleOptionClick(option)} key={index}>
                          <CS.Icon name={`icon-${option.value.toLowerCase()}`} />
                          <CS.SelectText>{t(`currency:ticker.${option.value}`)}</CS.SelectText>
                        </CS.SelectOption>
                      ))}
                    renderValue={({state: selectState}) => (
                      <CS.SelectValue>
                        <CS.Icon name={`icon-${selectState.value.toLowerCase()}`} />
                        <CS.SelectedText>{t(`currency:ticker.${selectState.value}`)}</CS.SelectedText>
                      </CS.SelectValue>
                    )}
                  />
                </S.Grid.Item>
                <S.Grid.Item $xs={12}>
                  <Field
                    type="text"
                    name="toDocumentPayment"
                    label={t('ApplicationForm:formField.toDocumentPayment.label.address')}
                    component={InputField}
                  />
                </S.Grid.Item>
              </S.Grid.Container>
            </S.Grid.Item>
          </S.Grid.Container>
          <S.Grid.Container $justifyContent="flex-end">
            <S.Grid.Item>
              <Button
                type="button"
                $variant="contained"
                $color="yellow"
                onClick={this.handleSetStep(1)}>
                {t('button:next')}
              </Button>
            </S.Grid.Item>
          </S.Grid.Container>
        </Step>
        <Step
          isActive={stepId === 1}
          iconName={t('ApplicationForm:step.1.iconName')}
          primary={t('ApplicationForm:step.1.primary')}
          secondary={t('ApplicationForm:step.1.secondary')}>
          <S.Grid.Container $flexFlow="row wrap">
            <S.Grid.Item $xs={12} $sm={6}>
              <Field
                type="text"
                name="name"
                label={t('ApplicationForm:formField.name.label')}
                component={InputField}
              />
            </S.Grid.Item>
            <S.Grid.Item $xs={12} $sm={6}>
              <Field
                type="email"
                name="email"
                label={t('ApplicationForm:formField.email.label')}
                component={InputField}
              />
            </S.Grid.Item>
            <S.Grid.Item $xs={12} $sm={6}>
              <Field
                type="text"
                name="phone"
                label={t('ApplicationForm:formField.phone.label')}
                component={FormatInputField}
                numberFormat="+7 (###) ###-####"
                numberMask="_"
              />
            </S.Grid.Item>
          </S.Grid.Container>
          <S.Grid.Container $justifyContent="flex-end">
            <S.Grid.Item>
              <Button
                type="button"
                $variant="contained"
                onClick={this.handleSetStep(0)}>
                {t('button:back')}
              </Button>
            </S.Grid.Item>
            <S.Grid.Item>
              <Button
                type="button"
                $variant="contained"
                $color="yellow"
                onClick={this.handleSetStep(2)}>
                {t('button:next')}
              </Button>
            </S.Grid.Item>
          </S.Grid.Container>
        </Step>
        <Step
          isActive={stepId === 2}
          iconName={t('ApplicationForm:step.2.iconName')}
          primary={t('ApplicationForm:step.2.primary')}
          secondary={t('ApplicationForm:step.2.secondary')}>
          <S.Paper>
            <S.Grid.Container $flexFlow="row wrap">
              {staticData.resultMap.map((name, index) => {
                const value = formValues[name];
                if (value === undefined) {
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
          <S.Space $xs={{height: '30px'}} />
          <S.Grid.Container $justifyContent="flex-end">
            <S.Grid.Item>
              <Button
                type="button"
                $variant="contained"
                onClick={this.handleSetStep(1)}>
                {t('button:back')}
              </Button>
            </S.Grid.Item>
            <S.Grid.Item>
              <Button
                type="submit"
                $variant="contained"
                $color="yellow"
                disabled={isDisabledSubmit}>
                {t('button:confirm')}
              </Button>
            </S.Grid.Item>
          </S.Grid.Container>
        </Step>
      </Form>
    );
  }
}

export default ApplicationForm;
