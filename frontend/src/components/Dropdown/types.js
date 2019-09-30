import PropTypes from 'prop-types';

export default {
  propTypes: {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(undefined)]),
    isOpen: PropTypes.bool,
    anchorRef: PropTypes.shape({
      current: PropTypes.instanceOf(Element)
    }).isRequired,
    width: PropTypes.string,
    onHide: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(undefined)]),
    onMouseEnter: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(undefined)]),
    onMouseLeave: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(undefined)]),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(undefined)]),
  },
  defaultProps: {
    isOpen: false,
    closeAction: {
      externalClick: true,
    },
    width: 'auto',
  },
};
