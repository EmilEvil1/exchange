import React from 'react';
import {NavLink} from 'react-router-dom';
import {withTranslation, Trans} from 'react-i18next';
import {connect} from 'react-redux';
import {reduxForm, getFormValues, Form, Field} from 'redux-form';
import set from 'lodash/set';
import * as S from 'src/styles';
import {InputField, CheckboxField, Button, Link} from 'src/components';
import validator from 'src/utils/validator';
import {PASSWORD_RULES} from 'src/constants';
import stopPropagation from 'src/utils/stopPropagation';
import types from './types';
import * as CS from './style';

const checkPassword = value =>
  PASSWORD_RULES.reduce((result, {id, boolean, regExp}) => {
    if (value === undefined) {
      return {
        ...result,
        [id]: false,
      };
    }
    if (boolean !== undefined) {
      return {
        ...result,
        [id]: boolean(value),
      };
    }
    if (regExp !== undefined) {
      return {
        ...result,
        [id]: !!~value.search(regExp),
      };
    }
    return result;
  }, {});

const staticData = {
  formId: 'SignUpForm',
};

const mapStateToProps = state => {
  const formValues = getFormValues(staticData.formId)(state) || {};
  const isDisabledForm = false;
  const isDisabledSubmit = isDisabledForm;
  return {
    formValues,
    isDisabledForm,
    isDisabledSubmit,
  };
};

const reduxFormConfig = {
  form: staticData.formId,
  validate: (values, {t}) => {
    const rules = {
      email: 'required|email|max:50',
      password: 'required|min:8|max:32',
    };
    const result = validator(values, rules);
    if (values && result.password === undefined && !Object.entries(checkPassword(values.password)).every(([,v]) => v)) {
      result.password = t('validator:invalidPasswordFormat');
    }
    if (values && !values.test1) {
      result.test1 = t('validator:required');
    }
    return result;
  },
  onSubmit: () => {
    alert('test');
  },
  initialValues: {
    test1: false,
    test2: true,
  },
}

@withTranslation()
@connect(
  mapStateToProps,
  null
)
@reduxForm(reduxFormConfig)
class SignUpForm extends React.PureComponent {
  static propTypes = types.propTypes;

  render() {
    const {t, formValues, isDisabledForm, isDisabledSubmit, submitFailed, handleSubmit} = this.props;
    const checkPasswordResult = checkPassword(formValues.password);
    return (
      <CS.Root as={Form} onSubmit={handleSubmit} autoComplete="off">
        {!isDisabledSubmit && <input type="submit" hidden />}
        <CS.Title>
          {t('SignUpForm:title')}
        </CS.Title>
        <S.Text $textAlign="center" $textSize="17px">{t('SignUpForm:article.first')}</S.Text>
        <S.Space $xs={{height: '24px'}} />
        <Field
          type="text"
          name="email"
          label={t('SignUpForm:formField.email.label')}
          component={InputField}
          isEnabledSubmitFailed
          beforeIcon="icon-message"
          autoComplete="off"
          autoFocus
          disabled={isDisabledForm}
        />
        <Field
          type="password"
          name="password"
          label={t('SignUpForm:formField.password.label')}
          component={InputField}
          isEnabledSubmitFailed
          beforeIcon="icon-lock"
          autoComplete="off"
          disabled={isDisabledForm}
        />
        <CS.Rules>
          {PASSWORD_RULES.map((rule, index) => (
            <CS.Rule $isValid={checkPasswordResult[rule.id]} $isInvalid={submitFailed && !checkPasswordResult[rule.id]} key={index}>
              <CS.RuleView>{t(`SignUpForm:rules.${rule.id}.view`)}</CS.RuleView>
              <CS.RuleText>{t(`SignUpForm:rules.${rule.id}.text`).toLowerCase()}</CS.RuleText>
            </CS.Rule>
          ))}
        </CS.Rules>
        <S.Space $xs={{height: '16px'}} />
        <S.Grid.Container $alignItems="center" $flexFlow="column">
          <S.Grid.Item>
            <Field
              name="test1"
              controlLabel={(
                <Trans i18nKey="SignUpForm:formField.test1.controlLabel">
                  <Link onClick={stopPropagation} $color="primary" href="/static/docs/agreement.pdf" rel="noopener noreferrer" target="_blank" />
                </Trans>
              )}
              component={CheckboxField}
              isEnabledSubmitFailed
              disabled={isDisabledForm}
            />
          </S.Grid.Item>
          <S.Grid.Item>
            <Field
              name="test2"
              controlLabel={t('SignUpForm:formField.test2.controlLabel')}
              component={CheckboxField}
              isEnabledSubmitFailed
              disabled={isDisabledForm}
            />
          </S.Grid.Item>
        </S.Grid.Container>
        <S.Grid.Container $flexFlow="column">
          <S.Grid.Item>
            <Button
              type="submit"
              $variant="contained"
              $color="yellow"
              $fullWidth
              disabled={isDisabledSubmit}>
              {t('Button:signUp1')}
            </Button>
          </S.Grid.Item>
        </S.Grid.Container>
      </CS.Root>
    );
  }
}

export default SignUpForm;
