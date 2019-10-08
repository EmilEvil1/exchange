import merge from 'lodash/merge';
import Notifier from 'src/models/notifier/i18n';

import AdvantageCard from 'src/components/AdvantageCard/i18n';
import Footer from 'src/components/Footer/i18n';
import Header from 'src/components/Header/i18n';
import ProgressCard from 'src/components/ProgressCard/i18n';
import Select from 'src/components/Select/i18n';

import ApplicationForm from 'src/routes/root.routes/root.route/ApplicationForm/i18n';
import SignInForm from 'src/routes/root.routes/signIn.route/SignInForm/i18n';
import SignUpForm from 'src/routes/root.routes/signUp.route/SignUpForm/i18n';

const siteInfo = {
  common: {
    name: 'Fairpay',
    tgChannel: {
      name: 'tg@smbdsmbd',
      href: 'https://teleg.run/ktznews',
    },
    email: 'fairpay24@gmail.com',
    phone: '+7 800 6696969',
    poweredBy: 'POWERED BY KTZ',
  },
  ru: {
    tagline: 'НАДЕЖНО. ВСЕГДА. 24/7.',
  },
  en: {
    tagline: 'RELIABLE. ALWAYS. 24/7.',
  },
};

const currency = {
  common: {
    ticker: {
      BTC: 'Bitcoin',
      ETH: 'Ethereum',
      XRP: 'Ripple',
      USDT: 'Tether',
      LTC: 'Litecoin',
      BCH: 'Bitcoin Cash',
      EOS: 'EOS',
      BNB: 'Binance Coin',
      TRX: 'TRON',
      ADA: 'Cardano',
      XLM: 'Stellar',
      XMR: 'Monero',
      DASH: 'Dash',
      ETC: 'Ethereum Classic',
      ZEC: 'Zcash',
      BAT: 'Basic Attention Token',
      WAVES: 'Waves',
      USDC: 'USD Coin',
      PAX: 'Paxos Token',
      HT: 'Huobi Token',
      KCS: 'KuCoin Shares',
      ZRX: '0x',
      ENJ: 'Enjin Coin',
      ADVCASH: 'AdvcashRub',
    },
  },
  ru: {
    holdType: {
      address: 'Номер кошелька',
      cardNumber: 'Номер карты',
    },
    ticker: {
      SBER: 'Сбербанк',
      YANDEX: 'Яндекс Деньги',
      TINKOFF: 'Тинькофф',
      ALPHA: 'Альфа Банк',
      VTB: 'ВТБ Банк',
    },
  },
  en: {
    holdType: {
      address: 'Wallet number',
      cardNumber: 'Card number',
    },
    ticker: {
      SBER: 'Sberbank',
      YANDEX: 'Yandex money',
      TINKOFF: 'Tinkoff',
      ALPHA: 'Alfa bank',
      VTB: 'VTB bank',
    },
  },
};

const button = {
  ru: {
    back: 'Назад',
    next: 'Далее',
    submit: 'Отправить',
    cancel: 'Отменить',
    exit: 'Выход',
    close: 'Закрыть',
    collapse: 'Свернуть',
    confirm: 'Подтвердить',
    signIn: 'Вход',
    signIn1: 'Войти',
    signUp: 'Регистрация',
    signUp1: 'Создать учетную запись',
    forgotYouPassword: 'Забыли пароль?',
  },
  en: {
    back: 'Back',
    next: 'Next',
    submit: 'Submit',
    cancel: 'Cancel',
    exit: 'Exit',
    close: 'Close',
    collapse: 'Collapse',
    confirm: 'Confirm',
    signIn: 'Sign in',
    signUp: 'Sign up',
    signUp1: 'Create an account',
    forgotYouPassword: 'Forgot your password?',
  },
};

const validator = {
  ru: {
    invalidPasswordFormat: 'Неверный формат пароля',
    required: 'Поле обязательно для заполнения.',
  },
  en: {
    invalidPasswordFormat: 'Invalid password format',
    required: 'The field is required.',
  },
};

export default {
  ru: {
    siteInfo: merge({}, siteInfo.common, siteInfo.ru),
    currency: merge({}, currency.common, currency.ru),
    button: button.ru,
    validator: validator.ru,
    // models
    Notifier: Notifier.ru,

    // components
    AdvantageCard: AdvantageCard.ru,
    Footer: Footer.ru,
    Header: Header.ru,
    ProgressCard: ProgressCard.ru,
    Select: Select.ru,

    // other
    ApplicationForm: ApplicationForm.ru,
    SignInForm: SignInForm.ru,
    SignUpForm: SignUpForm.ru,
  },
  en: {
    siteInfo: merge({}, siteInfo.common, siteInfo.en),
    currency: merge({}, currency.common, currency.en),
    button: button.en,
    validator: validator.en,
    // models
    Notifier: Notifier.en,

    // components
    AdvantageCard: AdvantageCard.en,
    Footer: Footer.en,
    Header: Header.en,
    ProgressCard: ProgressCard.en,
    Select: Select.en,

    // other
    ApplicationForm: ApplicationForm.en,
    SignInForm: SignInForm.en,
    SignUpForm: SignUpForm.en,
  },
};
