export const LANGS = ['ru', 'en'];
export const DEFAULT_LANG = 'ru';
export const PASSWORD_RULES = [
  {
    id: 'lowercase',
    regExp: /[a-zа-я]/,
  },
  {
    id: 'uppercase',
    regExp: /[A-ZА-Я]/,
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