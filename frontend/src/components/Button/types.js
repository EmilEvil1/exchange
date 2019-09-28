import PropTypes from 'prop-types';

export default {
  propTypes: {
    $variant: PropTypes.oneOf(['default', 'text', 'contained', 'outlined']),
    $color: PropTypes.oneOf(['default', 'blackOnBlack', 'yellow']),
    $size: PropTypes.oneOf(['default', 'small']),
  },
  defaultProps: {
    $variant: 'default',
    $color: 'default',
    $size: 'default',
  },
};
