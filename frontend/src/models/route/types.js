import PropTypes from 'prop-types';

const RouteState = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(undefined)]),
  flags: PropTypes.shape({}).isRequired,
  // status: PropTypes.oneOf(['idle', 'loading', 'failed', 'received']).isRequired,
  // meta: PropTypes.shape({
  //   title: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(undefined)]),
  //   description: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(undefined)]),
  //   keywords: PropTypes.oneOfType([
  //     PropTypes.arrayOf(PropTypes.string),
  //     PropTypes.instanceOf(undefined),
  //   ]),
  // }).isRequired,
}).isRequired;

const RouteActions = PropTypes.shape({
  initialize: PropTypes.func.isRequired,
  destroy: PropTypes.func.isRequired,
}).isRequired;

const types = {
  propTypes: {
    // routeState: RouteState,
    // routeActions: RouteActions,
  },
  defaultProps: {
    // routeInitialState: undefined,
  },
};

export default types;
