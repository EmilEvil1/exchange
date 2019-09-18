import PropTypes from 'prop-types';

export default {
  propTypes: {
    applicationIsReceived: PropTypes.bool.isRequired,
    application: PropTypes.object.isRequired,
    restRequest: PropTypes.func.isRequired,
    restReset: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  },
};
