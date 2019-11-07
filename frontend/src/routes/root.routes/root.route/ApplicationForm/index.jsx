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
  const isDisabledSubmit = isDisabledForm || false; // todo
  return {
    currenciesIsReceived,
    currencies,
    stepId,
    initialValues: {
      from: query.from === undefined ? 'SBER' : query.from,
      to: query.to === undefined ? 'BTC' : query.to,
      amountFrom: query.amountFrom || '0',
      amountTo: query.amountTo || '0',
      fromDocumentPayment: query.fromDocumentPayment,
      toDocumentPayment: query.toDocumentPayment,
      name: query.name,
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

const onSubmit = (values, dispatch, ownProps) =>
  ownProps.restRequest({
    endpoint: '/api/application',
    method: 'POST',
    payload: values,
  }, {
    fieldId: 'submit',
    onSuccess: (result) => {
      ownProps.historyPush(`/application/${result.payload}`);
    },
    onFail: (error) => {}
  });

const validate = (values, {t}) => {
  const rules = {
    amountFrom: 'required',
    from: 'required',
    amountTo: 'required',
    to: 'required',
    fromDocumentPayment: 'required',
    toDocumentPayment: 'required',
    name: 'required|humanName|max:50',
    email: 'required|email|max:50',
    phone: 'required|phone/ru',
  };
  const result = validator(values, rules);
  if (values && !values.from) {
    result.from = t('validator:required');
  }
  if (values && !values.to) {
    result.to = t('validator:required');
  }
  return result;
};

const reduxFormConfig = {
  form: staticData.formId,
  onSubmit,
  validate,
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

    const step0IsValid = this.isValidStep(0);
    const step1IsValid = this.isValidStep(1);

    if (
      !step0IsValid &&
      this.state.stepId !== 0
    ) {
      this.setState({stepId: 0});
    } else if (
      step0IsValid &&
      !step1IsValid &&
      this.state.stepId !== 1
    ) {
      this.setState({stepId: 1});
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
            <Field name="name" component="input" hidden />
            <Field name="email" component="input" hidden />
            <Field name="phone" component="input" hidden />
          </>
        )}
      </>
    );
  }

  isValidStep(stepId) {
    const {formValues} = this.props;
    const result = validate(formValues, this.props);
    if (stepId === 0) {
      return !result.from &&
        !result.to &&
        !result.amountFrom &&
        !result.amountTo &&
        !result.fromDocumentPayment &&
        !result.toDocumentPayment;
    }
    if (stepId === 1) {
      return !result.name &&
        !result.email &&
        !result.phone;
    }
    return true;
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
    const {from, to} = getSelectedCurrencies(this.props);
    const amountFromProps = (() => {
      if (!currenciesIsReceived || !from || !to) {
        return {
          disabled: true,
        };
      }
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
      return {
        disabled: true,
      };
    })();
    const amountToProps = (() => {
      if (!currenciesIsReceived || !from || !to) {
        return {
          disabled: true,
        };
      }
      if (to.holdType === staticData.currency.holdType.address) {
        return {
          onChange: value => {
            // TODO
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
      return {
        disabled: true,
      };
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
                    onChange={value => {
                      const nextFrom = currencies.find(currency => currency.ticker === value);
                      if (nextFrom !== undefined && to !== undefined && nextFrom.holdType === to.holdType) {
                        this.props.change('to', null);
                      }
                      this.props.change('amountFrom', '0');
                      this.props.change('amountTo', '0');
                    }}
                    options={currencies.map(item => ({
                      value: item.ticker,
                      label: item.name,
                    }))}
                    renderOptions={({options, handleOptionClick}) =>
                      options.map((option, index) => {
                        if (option.value === null) {
                          return (
                            <CS.SelectOption onClick={handleOptionClick(option)} key={index}>
                              <CS.Icon name="icon-null" />
                              <CS.SelectText>{option.label}</CS.SelectText>
                            </CS.SelectOption>
                          );
                        }
                        return (
                          <CS.SelectOption onClick={handleOptionClick(option)} key={index}>
                            <CS.Icon name={`icon-${option.value.toLowerCase()}`} />
                            <CS.SelectText>{t(`currency:ticker.${option.value}`)}</CS.SelectText>
                          </CS.SelectOption>
                        );
                      })}
                    renderValue={({selected}) => {
                      if (selected === undefined) {
                        return null;
                      }
                      if (selected.value === null) {
                        return (
                          <CS.SelectValue>
                            <CS.Icon name="icon-null" />
                            <CS.SelectedText>{selected.label}</CS.SelectedText>
                          </CS.SelectValue>
                        );
                      }
                      return (
                        <CS.SelectValue>
                          <CS.Icon name={`icon-${selected.value.toLowerCase()}`} />
                          <CS.SelectedText>{t(`currency:ticker.${selected.value}`)}</CS.SelectedText>
                        </CS.SelectValue>
                      );
                    }}
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
                    onChange={value => {
                      const nextTo = currencies.find(currency => currency.ticker === value);
                      if (from !== undefined && nextTo !== undefined && from.holdType === nextTo.holdType) {
                        this.props.change('from', null);
                      }
                      this.props.change('amountFrom', '0');
                      this.props.change('amountTo', '0');
                    }}
                    renderOptions={({options, handleOptionClick}) =>
                      options.map((option, index) => {
                        if (option.value === null) {
                          return (
                            <CS.SelectOption onClick={handleOptionClick(option)} key={index}>
                              <CS.Icon name="icon-null" />
                              <CS.SelectText>{option.label}</CS.SelectText>
                            </CS.SelectOption>
                          );
                        }
                        return (
                          <CS.SelectOption onClick={handleOptionClick(option)} key={index}>
                            <CS.Icon name={`icon-${option.value.toLowerCase()}`} />
                            <CS.SelectText>{t(`currency:ticker.${option.value}`)}</CS.SelectText>
                          </CS.SelectOption>
                        );
                      })}
                    renderValue={({selected}) => {
                      if (selected === undefined) {
                        return null;
                      }
                      if (selected.value === null) {
                        return (
                          <CS.SelectValue>
                            <CS.Icon name="icon-null" />
                            <CS.SelectedText>{selected.label}</CS.SelectedText>
                          </CS.SelectValue>
                        );
                      }
                      return (
                        <CS.SelectValue>
                          <CS.Icon name={`icon-${selected.value.toLowerCase()}`} />
                          <CS.SelectedText>{t(`currency:ticker.${selected.value}`)}</CS.SelectedText>
                        </CS.SelectValue>
                      );
                    }}
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
                onClick={this.handleSetStep(1)}
                disabled={!this.isValidStep(0)}>
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
                onClick={this.handleSetStep(2)}
                disabled={!this.isValidStep(1)}>
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
                if (!value) {
                  return null;
                }
                if (['amountFrom', 'amountTo'].includes(name)) {
                  const iconName = currenciesIsReceived ? `icon-${name === 'amountFrom' ? from.ticker.toLowerCase() : to.ticker.toLowerCase()}` : '';
                  const ticker = currenciesIsReceived ? name === 'amountFrom' ? from.ticker : to.ticker : '';
                  return (
                    <S.Grid.Item $xs={12} $sm={6} key={index}>
                      <S.Text
                        $textSize="23px"
                        $textWeight="500">
                        {`${t(`ApplicationForm:resultMap.${name}`)}:`} <CS.Icon name={iconName} $result /> {value} {ticker}
                      </S.Text>
                    </S.Grid.Item>
                  );
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
