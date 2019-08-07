import notifier from 'frontend/src/models/notifier/i18n';
import TradeForm from 'frontend/src/routes/root.routes/root.route/TradeForm/i18n';
import Select from 'frontend/src/components/Select/i18n';

export default {
  en: {
    common: {
      button: {
        back: 'Back',
        next: 'Next',
        submit: 'Submit',
        cancel: 'Cancel',
        exit: 'Exit',
        close: 'Close',
        collapse: 'Collapse',
        confirm: 'Confirm',
      },
    },
    validator: {
      TradeForm: {
        equalFrom: '', // TODO local
        equalTo: '', // TODO local
      },
    },
    Notifier: notifier.en,
    TradeForm: TradeForm.en,
    Select: Select.en,
  },
  ru: {
    common: {
      button: {
        back: 'Назад',
        next: 'Далее',
        submit: 'Отправить',
        cancel: 'Отменить',
        exit: 'Выход',
        close: 'Закрыть',
        collapse: 'Свернуть',
        confirm: 'Подтвердить',
      },
    },
    validator: {
      TradeForm: {
        equalFrom: 'Вы не можете отдавать и получать ту же самую валюту',
        equalTo: 'Выбирите другую валюту',
      },
    },
    notifier: notifier.ru,
    TradeForm: TradeForm.ru,
    Select: Select.ru,
  },
};
