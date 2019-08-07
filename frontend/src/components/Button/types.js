import PropTypes from 'prop-types';

const types = {
  propTypes: {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
    component: PropTypes.oneOf(['button', 'Link', 'a']),
    type: PropTypes.oneOfType([PropTypes.oneOf(['button', 'submit', 'reset']), PropTypes.instanceOf(undefined)]),
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(undefined)]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(undefined)]),
    variant: PropTypes.oneOfType([PropTypes.oneOf(['text', 'contained']), PropTypes.instanceOf(undefined)]),
    color: PropTypes.oneOfType([PropTypes.oneOf(['white', 'blue', 'red', 'green']), PropTypes.instanceOf(undefined)]),
    block: PropTypes.oneOfType([PropTypes.bool, PropTypes.instanceOf(undefined)]),
    beforeIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(undefined)]),
    afterIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(undefined)]),
    onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(undefined)]),
    onMouseDown: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(undefined)]),
    onMouseUp: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(undefined)]),
    onFocus: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(undefined)]),
    onBlur: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(undefined)]),
    onMouseEnter: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(undefined)]),
    onMouseLeave: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(undefined)]),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(undefined)]),
  },
  defaultProps: {
    component: 'button',
  },
};

export default types;
