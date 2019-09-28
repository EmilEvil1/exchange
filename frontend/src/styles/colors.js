import Color from 'color';

const colors = {
  common: {
    white: '#FFFFFF',
    black: '#282828',
    blackOnBlack: '#5b5b5b',
    blue: '#41a0ee',
    yellow: '#f2b92b',
    green: '#6ed64d',
    red: '#e23555',
    gray: '#dedede',
    transparent: 'transparent',
  },
  bodyBackgroundColor: '#ededed',
  borderColor: '#dedede',
};

colors.primary = colors.common.yellow;
colors.secondary = colors.common.black;

colors.formField = require('frontend/src/hocs/formField/style.colors').default(colors);
colors.Paper = require('./Paper/style.colors').default(colors);
colors.Input = require('frontend/src/components/Input/style.colors').default(colors);
colors.Select = require('frontend/src/components/Select/style.colors').default(colors);

export default colors;
