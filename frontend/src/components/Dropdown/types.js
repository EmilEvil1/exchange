import PropTypes from 'prop-types';

export const hideActions = {
  documentClick: PropTypes.bool,
};

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
    closeAction: PropTypes.shape(hideActions),
  },
  defaultProps: {
    isOpen: false,
    closeAction: {
      documentClick: true,
    },
    width: 'auto',
  },
};
