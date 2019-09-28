import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import actions from 'src/redux/actions';
import truetype from 'src/utils/truetype';
import types from './types';

class Route extends React.Component {
  static propTypes = types.propTypes;

  static defaultProps = types.defaultProps;

  componentDidMount() {
    const {route} = this.props;
    route.actions.init();
  }

  componentWillUnmount() {
    const {route} = this.props;
    route.actions.destroy();
  }

  render() {
    return null;
  }
}

export default Route;
