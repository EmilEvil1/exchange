import Validator from 'validatorjs';
import set from 'lodash/set';
import resources from 'frontend/src/i18n/resources';

Validator.setAttributeFormatter(() => '');
Validator.register('ruPhone', v => {
  if (!['string', 'number'].includes(typeof v)) {
    return false;
  }
  const length = v.replace(/[^0-9]/g, '').length;

  return length === 11;
});

Validator.setMessages('en', {...Validator.getMessages('en'), ...resources.en.validator});
Validator.setMessages('ru', {...Validator.getMessages('ru'), ...resources.ru.validator});

export {Validator};

export default (values, rules) => {
  const validator = new Validator(values, rules);
  validator.passes();
  return Object.entries(validator.errors.all()).reduce((error, [k, v]) => set(error, k, v[0]), {});
};
