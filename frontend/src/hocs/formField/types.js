import PropTypes from 'prop-types';

const types = {
  propTypes: {
    label: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(undefined)]),
    actions: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(undefined)]),
    footer: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(undefined)]),
    isEnabledShowError: PropTypes.bool,
    input: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    meta: PropTypes.shape({
      active: PropTypes.bool.isRequired,
      touched: PropTypes.bool.isRequired,
      error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.instanceOf(undefined)]),
    }).isRequired,
  },
  defaultProps: {
    isEnabledShowError: true,
  },
};

export default types;
