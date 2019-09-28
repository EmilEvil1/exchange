import PropTypes from 'prop-types';

export default {
  propTypes: {
    $isActive: PropTypes.bool.isRequired,
    iconName: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(undefined)]),
    primary: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(undefined)]),
    secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(undefined)]),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(undefined)]),
  },
  defaultProps: {},
};
