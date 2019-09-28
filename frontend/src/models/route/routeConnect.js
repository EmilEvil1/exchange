import {connect} from 'react-redux';
import truetype from 'src/utils/truetype';
import actions from 'src/redux/actions';
import model from './model';

const routeConnect = settings => Route => {
  const {
    routeId,
    mapStateToProps: SMapStateToProps,
    mapDispatchToProps: SMapDispatchToProps,
    mergeProps: SMergeProps,
  } = settings;

  const mapStateToProps = (state, ownProps) => {
    const routeState = state[model.namespace][routeId];

    if (truetype.isUndefined(routeState)) {
      return {
        mapStateToProps: truetype.isFunction(SMapStateToProps) ? SMapStateToProps(state, ownProps) : undefined,
        routeState: model.utils.createRouteState(routeId),
      };
    }

    return {
      mapStateToProps: truetype.isFunction(SMapStateToProps) ? SMapStateToProps(state, ownProps) : undefined,
      routeState,
    };
  };

  const mapDispatchToProps = (dispatch, ownProps) => ({
    mapDispatchToProps: (() => {
      if (truetype.isFunction(SMapDispatchToProps)) {
        return SMapDispatchToProps(dispatch, ownProps);
      }
      if (truetype.isObject(SMapDispatchToProps)) {
        return Object.entries(SMapDispatchToProps).reduce((result, [key, action]) => ({
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

  const mergeProps = (mappedProps, dispatchedProps, ownProps) => {
    if (truetype.isFunction(SMergeProps)) {
      return SMergeProps(mappedProps, dispatchedProps, ownProps);
    }
    return {
      ...ownProps,
      ...mappedProps.mapStateToProps,
      ...dispatchedProps.mapDispatchToProps,
      route: {
        state: mappedProps.routeState,
        actions: dispatchedProps.routeActions,
      }
    };
  };

  return connect(mapStateToProps, mapDispatchToProps, mergeProps)(Route);
};

export default routeConnect;
