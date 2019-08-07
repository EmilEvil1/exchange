import Color from 'color';

export default colors => ({
  color: colors.common.black,
  placeholder: colors.common.gray,
  borderColor: colors.common.gray,
  backgroundColor: colors.common.white,
  hoverBorderColor: colors.common.primary,
  focusBorderColor: colors.common.primary,
  focusBoxShadow: Color(colors.common.primary).alpha(0.2).string(),

  errorColor: colors.common.red,
  errorPlaceholder: colors.common.gray,
  errorBorderColor: colors.common.red,
  errorBackgroundColor: colors.common.white,
  errorFocusBoxShadow: Color(colors.common.red).alpha(0.2).string(),

  disabledColor: colors.common.black,
  disabledPlaceholder: colors.common.gray,
  disabledBorderColor: colors.common.gray,
  disabledBackgroundColor: Color(colors.common.gray).lighten(0.15).string(),
});
