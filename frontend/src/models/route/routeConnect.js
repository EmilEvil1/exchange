import {connect} from 'react-redux';
import truetype from 'src/utils/truetype';
import actions from 'src/redux/actions';
import model from './model';

const routeConnect = settings => Route => {
  const {
    routeId,
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
  } = settings;
  const routeMapStateToProps = (state, ownProps) => {
    const routeState = state[model.namespace][routeId];
    if (truetype.isUndefined(routeState)) {
      return {
        default: truetype.isFunction(mapStateToProps) ? mapStateToProps(state, ownProps) : undefined,
        routeState: model.utils.createRouteState(routeId),
      };
    }
    return {
      default: truetype.isFunction(mapStateToProps) ? mapStateToProps(state, ownProps) : undefined,
      routeState,
    };
  };
  const routeMapDispatchToProps = (dispatch, ownProps) => ({
    default: (() => {
      if (truetype.isFunction(mapDispatchToProps)) {
        return mapDispatchToProps(dispatch, ownProps);
      }
      if (truetype.isObject(mapDispatchToProps)) {
        return Object.entries(mapDispatchToProps).reduce((result, [key, action]) => ({
          ...result,
          [key]: (...args) => dispatch(action(...args)),
        }), {});
      }
      return undefined;
    })(),
    routeActions: {
      init: (payload, meta) => dispatch(actions.route.init(payload, {...meta, routeId})),
      destroy: (payload, meta) => dispatch(actions.route.destroy(payload, {...meta, routeId})),
    },
  });
  const routeMergeProps = (mapState, mapDispatch, ownProps) => {
    if (truetype.isFunction(mergeProps)) {
      return mergeProps(mapState, mapDispatch, ownProps);
    }
    return {
      ...ownProps,
      ...mapState.default,
      ...mapDispatch.default,
      route: {
        state: mapState.routeState,
        actions: mapDispatch.routeActions,
      }
    };
  };
  return connect(routeMapStateToProps, routeMapDispatchToProps, routeMergeProps)(Route);
};

export default routeConnect;
