import Color from 'color';

const colors = {
  common: {
    white: '#FFFFFF',
    black: '#212121',
    blue: '#41a0ee',
    green: '#6ed64d',
    red: '#e23555',
    gray: '#ededed',
    transparent: 'transparent',
  },
};

colors.common.primary = colors.common.blue;
colors.common.border = colors.common.gray;

colors.formField = require('frontend/src/hocs/formField/style.colors').default(colors);
colors.Paper = require('frontend/src/styles/Paper/style.colors').default(colors);
colors.Input = require('frontend/src/components/Input/style.colors').default(colors);
colors.Select = require('frontend/src/components/Select/style.colors').default(colors);

export default colors;
