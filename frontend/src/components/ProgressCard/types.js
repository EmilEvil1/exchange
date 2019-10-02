import PropTypes from 'prop-types';

export default {
  propTypes: {
    isComplete: PropTypes.oneOfType([PropTypes.bool, PropTypes.instanceOf(undefined)]),
    isActive: PropTypes.oneOfType([PropTypes.bool, PropTypes.instanceOf(undefined)]),
    activeText: PropTypes.string.isRequired,
    notActiveText: PropTypes.string.isRequired,
    backText: PropTypes.string.isRequired,
  },
};
