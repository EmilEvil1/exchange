import {connect} from 'react-redux';
import truetype from 'frontend/utils/truetype';
import actions from 'frontend/src/redux/actions';
import model from './model';

const routeDecorator = settings => Route => {
  const {routeId} = settings;

  const mastStateToProps = (state, ownProps) => {
    const routeState = state[model.namespace][routeId];

    if (truetype.isUndefined(routeState)) {
      return {
        routeState: model.utils.createRouteState(routeId),
      };
    }

    return {
      routeState,
    };
  };

  const mastDispatchToProps = (dispatch, ownProps) => ({
    routeActions: {
      initialize: (payload, meta) => dispatch(actions.route.initialize(payload, {...meta, routeId})),
      destroy: (payload, meta) => dispatch(actions.route.destroy(payload, {...meta, routeId})),
    },
  });

  return connect(mastStateToProps, mastDispatchToProps)(Route);
};

export default routeDecorator;
