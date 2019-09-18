import PropTypes from 'prop-types';

export default {
  propTypes: {
    $color: PropTypes.oneOf(['default', 'yellow', 'white', 'opacity']),
  },
  defaultProps: {
    $color: 'default',
  },
};
