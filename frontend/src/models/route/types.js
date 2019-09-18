import PropTypes from 'prop-types';

export default {
  propTypes: {
    route: PropTypes.shape({
      state: PropTypes.shape().isRequired,
      actions: PropTypes.shape({
        init: PropTypes.func.isRequired,
        destroy: PropTypes.func.isRequired,
      }).isRequired
    }).isRequired,
  },
  defaultProps: {},
};
