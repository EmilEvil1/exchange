import PropTypes from 'prop-types';

export default {
  propTypes: {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(undefined)]),
    name: PropTypes.string.isRequired,
    isActiveBurger: PropTypes.oneOfType([PropTypes.bool, PropTypes.instanceOf(undefined)]),
  },
  defaultProps: {},
};
