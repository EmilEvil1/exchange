import PropTypes from 'prop-types';

export default {
  propTypes: {
    isEnabledLabel: PropTypes.bool,
    isEnabledShowError: PropTypes.bool,
    isEnabledSubmitFailed: PropTypes.bool,
    input: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    meta: PropTypes.shape({
      form: PropTypes.string.isRequired,
      touched: PropTypes.bool.isRequired,
      error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.instanceOf(undefined)]),
    }).isRequired,
  },
  defaultProps: {
    isEnabledLabel: true,
    isEnabledShowError: true,
    isEnabledSubmitFailed: false,
  },
};
