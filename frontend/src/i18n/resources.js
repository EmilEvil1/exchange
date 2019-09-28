import Notifier from 'frontend/src/models/notifier/i18n';

import AdvantageCard from 'frontend/src/components/AdvantageCard/i18n';
import Footer from 'frontend/src/components/Footer/i18n';
import Header from 'frontend/src/components/Header/i18n';
import ProgressCard from 'frontend/src/components/ProgressCard/i18n';
import Select from 'frontend/src/components/Select/i18n';

import ApplicationForm from 'frontend/src/routes/root.routes/root.route/ApplicationForm/i18n';

const siteInfo = {
  en: {
    tagline: 'RELIABLE. ALWAYS. 24/7.',
  },
  ru: {
    tagline: 'НАДЕЖНО. ВСЕГДА. 24/7.',
  },
  common: {
    tgChannel: {
      name: 'tg@smbdsmbd',
      href: '',
    },
    email: 'fairpay24@gmail.com',
    phone: '+7 800 6696969',
    poweredBy: 'POWERED BY KTZ',
  },
};

export default {
  ru: {
    siteInfo: siteInfo.ru,
    common: {
      siteInfo: siteInfo.common,
      button: {
        back: 'Назад',
        next: 'Далее',
        submit: 'Отправить',
        cancel: 'Отменить',
        exit: 'Выход',
        close: 'Закрыть',
        collapse: 'Свернуть',
        confirm: 'Подтвердить',
        signIn: 'Вход',
        signUp: 'Регистрация',
      },
    },
    validator: {
      required: 'Поле обязательно для заполнения.',
    },
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
  },
  en: {
    siteInfo: siteInfo.en,
    common: {
      siteInfo: siteInfo.common,
      button: {
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
      },
    },
    validator: {
      required: 'The field is required.',
    },
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
  },
};
