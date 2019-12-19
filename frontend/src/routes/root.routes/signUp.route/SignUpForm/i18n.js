export default {
  ru: {
    title: 'Регистрация',
    article: {
      first: 'Пожалуйста, внимательно и аккуратно заполните все поля регистрационной формы. На указанный вами e-mail будет выслано уведомление о регистрации.',
    },
    formField: {
      email: {
        label: 'E-mail',
      },
      password: {
        label: 'Введите пароль',
      },
      passwordConfirm: {
        label: 'Введите пароль повторно',
      },
      test1: {
        controlLabel: 'Я согласен с <0>правилами</0> обмена',
      },
      test2: {
        controlLabel: 'Получать уведомления об акциях и скидках',
      },
    },
    rules: {
      lowercase: {
        view: 'a',
        text: 'Строчная',
      },
      uppercase: {
        view: 'A',
        text: 'Заглавная',
      },
      number: {
        view: '123',
        text: 'Число',
      },
      specialCharacter: {
        view: '#&?',
        text: 'Символ',
      },
      length: {
        view: '8+',
        text: 'знаков',
      },
    },
  },
  en: {
    title: 'Registration',
    article: {
      first: 'Пожалуйста, внимательно и аккуратно заполните все поля регистрационной формы. На указанный вами e-mail будет выслано уведомление о регистрации.',
    },
    formField: {
      email: {
        label: 'E-mail',
      },
      password: {
        label: 'Enter password',
      },
      passwordConfirm: {
        label: 'Re-enter Password',
      },
      test1: {
        controlLabel: 'I agree to the <0>terms</0> of exchange',
      },
      test2: {
        controlLabel: 'Receive notifications about promotions and discounts',
      },
    },
    rules: {
      lowercase: {
        view: 'a',
        text: 'Lowercase',
      },
      uppercase: {
        view: 'A',
        text: 'Uppercase',
      },
      number: {
        view: '123',
        text: 'Number',
      },
      specialCharacter: {
        view: '#&?',
        text: 'Symbol',
      },
      length: {
        view: '8+',
        text: 'characters',
      },
    },
  },
};
