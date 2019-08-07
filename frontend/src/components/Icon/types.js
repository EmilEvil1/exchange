import PropTypes from 'prop-types';

const types = {
  propTypes: {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(undefined)]),
    name: PropTypes.string.isRequired,
    isActiveBurger: PropTypes.oneOfType([PropTypes.bool, PropTypes.instanceOf(undefined)]),
  },
  defaultProps: {},
};

export default types;
