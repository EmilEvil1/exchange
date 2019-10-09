export const LANGS = ['ru', 'en'];
export const DEFAULT_LANG = 'ru';
export const PASSWORD_RULES = [
  {
    id: 'lowercase',
    regExp: /[a-z]/,
  },
  {
    id: 'uppercase',
    regExp: /[A-Z]/,
  },
  {
    id: 'number',
    regExp: /[0-9]/,
  },
  {
    id: 'length',
    boolean: value => value.length > 8 && value.length < 32,
  },
]