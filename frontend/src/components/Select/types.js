import PropTypes from 'prop-types';

export default {
  propTypes: {
    renderValue: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(undefined)]),
    renderOptions: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(undefined)]),
  },
};
