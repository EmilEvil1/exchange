import React from 'react';
import {NavLink} from 'react-router-dom';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {reduxForm, Form, Field} from 'redux-form';
import * as S from 'src/styles';
import {InputField, Button, Link} from 'src/components';
import validator from 'src/utils/validator';
import truetype from 'src/utils/truetype';
import types from './types';
import * as CS from './style';

const staticData = {
  formId: 'SignInForm',
};

const mapStateToProps = state => {
  const isDisabledForm = false;
  const isDisabledSubmit = isDisabledForm;
  return {
    isDisabledForm,
    isDisabledSubmit,
  };
};

const reduxFormConfig = {
  form: staticData.formId,
  validate: values => {
    const rules = {
      username: 'required|min:3|max:50',
      password: 'required|min:8|max:32',
    };
    if (truetype.isString(values.username) && values.username.includes('@')) {
      rules.username = 'required|email|max:50';
    }
    const result = validator(values, rules);
    return result;
  },
  onSubmit: () => {
    alert('test');
  },
}

@withTranslation()
@connect(
  mapStateToProps,
  null
)
@reduxForm(reduxFormConfig)
class SignInForm extends React.PureComponent {
  static propTypes = types.propTypes;

  render() {
    const {t, isDisabledForm, isDisabledSubmit, handleSubmit} = this.props;
    return (
      <CS.Root as={Form} onSubmit={handleSubmit} autoComplete="off">
        {!isDisabledSubmit && <input type="submit" hidden />}
        <CS.Title>
          {t('SignInForm:title')}
        </CS.Title>
        <Field
          type="text"
          name="username"
          label={t('SignInForm:formField.username.label')}
          component={InputField}
          isEnabledSubmitFailed
          icon="icon-user"
          autoComplete="off"
          disabled={isDisabledForm}
        />
        <Field
          type="password"
          name="password"
          label={t('SignInForm:formField.password.label')}
          component={InputField}
          isEnabledSubmitFailed
          icon="icon-lock"
          autoComplete="off"
          disabled={isDisabledForm}
        />
        <S.Grid.Container $flexFlow="column">
          <S.Grid.Item>
            <Button
              type="submit"
              $variant="contained"
              $color="yellow"
              $fullWidth
              disabled={isDisabledSubmit}>
              {t('button:signIn1')}
            </Button>
          </S.Grid.Item>
          <S.Grid.Item>
            <Button
              as={NavLink}
              exact
              to="/sign-up"
              $variant="contained"
              $color="blackOnBlack"
              $fullWidth>
              {t('button:signUp')}
            </Button>
          </S.Grid.Item>
        </S.Grid.Container>
        <S.Grid.Container
          $justifyContent="center"
          $alignItems="center">
          <S.Grid.Item>
            <Link
              as={NavLink}
              exact
              to="/forgot-password"
              $textDecoration="underline"
              $textSize="15px"
              $color="gray">
              {t('button:forgotYouPassword')}
            </Link>
          </S.Grid.Item>
        </S.Grid.Container>
      </CS.Root>
    );
  }
}

export default SignInForm;
