import PropTypes from 'prop-types';

export default {
  propTypes: {
    $variant: PropTypes.oneOf(['default', 'text', 'contained', 'outlined']),
    $color: PropTypes.oneOf(['default', 'blackOnBlack', 'yellow']),
  },
  defaultProps: {
    $variant: 'default',
    $color: 'default',
  },
};
