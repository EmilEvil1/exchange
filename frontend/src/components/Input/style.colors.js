import Color from 'color';

export default colors => ({
  disabledColor: colors.common.black,
  disabledBorderColor: colors.borderColor,
  disabledBackgroundColor: Color(colors.borderColor).lighten(0.11).string(),

  isInvalidColor: colors.common.red,
  isInvalidBorderColor: colors.common.red,
  isInvalidBackgroundColor: colors.common.white,
  isInvalidBorderColor: colors.common.red,
  isInvalidFocusBoxShadowColor: Color(colors.common.red).alpha(0.3).string(),

  color: colors.common.black,
  borderColor: colors.borderColor,
  backgroundColor: colors.common.white,
  hoverBorderColor: colors.primary,
  focusBoxShadowColor: Color(colors.primary).alpha(0.3).string(),
  focusBorderColor: colors.primary,

  Icon: {
    fill: '#606060',
    isInvalidFill: colors.common.red,
  },

  Label: {
    isInvalidColor: colors.common.red,
    isInvalidColorNotEmpty: colors.common.red,

    colorNotEmpty: '#606060',

    color: '#606060',
  },
});
