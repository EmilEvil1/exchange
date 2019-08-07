import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import actions from 'frontend/src/redux/actions';
import truetype from 'frontend/utils/truetype';
import types from './types';

class Route extends React.Component {
  static propTypes = types.propTypes;

  static defaultProps = types.defaultProps;

  componentDidMount() {
    const {routeActions} = this.props;
    routeActions.initialize();
  }

  componentWillUnmount() {
    const {routeActions} = this.props;
    routeActions.destroy();
  }

  render() {
    return null;
  }
}

export default Route;
