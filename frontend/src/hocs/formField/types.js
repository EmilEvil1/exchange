import PropTypes from 'prop-types';

export default {
  propTypes: {
    isEnabledShowError: PropTypes.bool,
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
    isEnabledShowError: true,
    isEnabledSubmitFailed: false,
  },
};
