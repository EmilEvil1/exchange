import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {store} from 'src/redux/store';
import actions from 'src/redux/actions'
import {DEFAULT_LANG} from 'src/constants';
import validator from 'src/utils/validator';
import resources from './resources';

i18n.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LANG,
  fallbackLng: DEFAULT_LANG,
  interpolation: {
    escapeValue: false,
  },
});

validator.validatorjs.useLang(DEFAULT_LANG);

i18n.on('languageChanged', lang => {
  validator.validatorjs.useLang(lang);
  store.dispatch(actions.app.setLang(lang));
});

export default i18n;
