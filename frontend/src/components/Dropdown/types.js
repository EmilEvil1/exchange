import PropTypes from 'prop-types';

export default {
  propTypes: {
    isOpen: PropTypes.bool,
    anchorRef: PropTypes.shape({
      current: PropTypes.instanceOf(Element)
    }).isRequired,
    position: PropTypes.string,
    width: PropTypes.string,
    onMouseEnter: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(undefined)]),
    onMouseLeave: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(undefined)]),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(undefined)]),
  },
  defaultProps: {
    isOpen: false,
    position: 'auto',
    width: 'auto',
  },
};
