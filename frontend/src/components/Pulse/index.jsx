import React from 'react';
import moment from 'moment';
import truetype from 'frontend/utils/truetype'
import types from './types';
import * as CS from './style';

class Pulse extends React.PureComponent {
  static propTypes = types.propTypes;

  static defaultProps = types.defaultProps;

  rootRef = React.createRef();

  state = {
    lastMoment: undefined,
    count: 0,
    pulses: [],
  };

  timeout = {
    handleClick: null,
    handleMouseDown: null,
    handleMouseUp: null,
  };

  componentDidMount() {
    document.addEventListener('mouseup', this.handleMouseUp);
  };

  componentWillMount() {
    document.removeEventListener('mouseup', this.handleMouseUp);
    clearTimeout(this.timeout.handleClick);
    clearTimeout(this.timeout.handleMouseDown);
    clearTimeout(this.timeout.handleMouseUp);
  };

  setTimeout(key, handler, delay) {
    this.timeout[key] = setTimeout(handler, delay);
  }

  handleClick = (e) => {
    const {delay} = this.props;
    const {lastMoment, pulses} = this.state;
    if (lastMoment.unix() < moment().subtract({millisecond: 1}).unix()) {
      return null;
    }
    return this.setState({
      pulses: pulses.map(pulse => ({...pulse, isHidden: true})),
    }, () => this.setTimeout('handleClick', () => {
      const nextState = this.state;
      return this.setState({pulses: nextState.pulses.filter(pulse => pulse.key !== nextState.pulses[0].key)});
    }, delay + 1));
  }

  handleMouseDown = (e) => {
    const x = (e.nativeEvent.offsetX === undefined) ? e.nativeEvent.layerX : e.nativeEvent.offsetX;
    const y = (e.nativeEvent.offsetY === undefined) ? e.nativeEvent.layerY : e.nativeEvent.offsetY;
    const {count, pulses} = this.state;
    const nextCount = count + 1;
    return this.setState({lastMoment: moment(), count: nextCount, pulses: [...pulses, {key: nextCount, isActive: false, x, y}]}, () => this.setTimeout('handleMouseDown', () => {
      const nextState = this.state;
      return this.setState({pulses: nextState.pulses.map(pulse => ({...pulse, isActive: true}))});
    }, 1));
  };

  handleMouseUp = (e) => {
    const {delay} = this.props;
    const {lastMoment, pulses} = this.state;
    if (pulses.length === 0) {
      return null;
    }
    if (lastMoment.unix() >= moment().subtract({millisecond: 1}).unix()) {
      return null;
    }
    return this.setState({
      pulses: pulses.map(pulse => ({...pulse, isHidden: true})),
    }, () => this.setTimeout('handleMouseUp', () => {
      const nextState = this.state;
      return this.setState({pulses: nextState.pulses.filter(pulse => pulse.key !== nextState.pulses[0].key)});
    }, delay + 1));
  };

  render() {
    const {delay} = this.props;
    const {pulses} = this.state;
    return (
      <>
        {pulses.map((pusle) => <CS.Pulse delay={delay} {...pusle} />)}
        <CS.Root ref={this.rootRef} delay={delay} onClick={this.handleClick} onMouseDown={this.handleMouseDown} />
      </>
    );
  }
}

export default Pulse;
