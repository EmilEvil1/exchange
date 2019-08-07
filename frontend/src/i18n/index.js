import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {store} from 'frontend/src/redux/store';
import actions from 'frontend/src/redux/actions'
import {DEFAULT_LANG} from 'frontend/src/constants';
import {Validator} from 'frontend/utils/validator';
import resources from './resources';

i18n.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LANG,
  fallbackLng: DEFAULT_LANG,
  interpolation: {
    escapeValue: false,
  },
});

Validator.useLang(DEFAULT_LANG);

i18n.on('languageChanged', lang => {
  Validator.useLang(lang);
  store.dispatch(actions.app.setLang(lang));
});

export default i18n;
