import validatorjs from 'validatorjs';
import set from 'lodash/set';
import resources from 'src/i18n/resources';

validatorjs.setAttributeFormatter(() => '');
validatorjs.register('phone/ru', v => {
  if (!['string', 'number'].includes(typeof v)) {
    return false;
  }
  const length = v.replace(/[^0-9]/g, '').length;
  return length === 11;
});

validatorjs.setMessages('en', {...validatorjs.getMessages('en'), ...resources.en.validator});
validatorjs.setMessages('ru', {...validatorjs.getMessages('ru'), ...resources.ru.validator});

const validator = (values, rules) => {
  const result = new validatorjs(values, rules);
  result.passes();
  return Object.entries(result.errors.all()).reduce((error, [k, v]) => set(error, k, v[0]), {});
};

validator.validatorjs = validatorjs;

export default validator;
