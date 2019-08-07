import React from 'react';
import moment from 'moment';
import * as CS from './style';
import types from './types';
import truetype from '../../../utils/truetype'

class Pulse extends React.PureComponent {
  static propTypes = types.propTypes;

  static defaultProps = types.defaultProps;

  rootRef = React.createRef();

  state = {
    lastMoment: undefined,
    count: 0,
    pulses: [],
  };

  componentDidMount() {
    document.addEventListener('mouseup', this.handleMouseUp);
  };

  componentWillMount() {
    document.removeEventListener('mouseup', this.handleMouseUp);
  };

  handleClick = (e) => {
    if (!truetype.isElement(this.rootRef.current)) {
      return null;
    }
    const {delay} = this.props;
    const {lastMoment, pulses} = this.state;
    if (lastMoment.unix() < moment().subtract({millisecond: 1}).unix()) {
      return null;
    }
    return this.setState({
      pulses: pulses.map(pulse => ({...pulse, isHidden: true})),
    }, () => setTimeout(() => {
      const nextState = this.state;
      return this.setState({pulses: nextState.pulses.filter(pulse => pulse.key !== nextState.pulses[0].key)});
    }, delay + 1));
  }

  handleMouseDown = (e) => {
    if (!truetype.isElement(this.rootRef.current)) {
      return null;
    }
    const x = (e.nativeEvent.offsetX === undefined) ? e.nativeEvent.layerX : e.nativeEvent.offsetX;
    const y = (e.nativeEvent.offsetY === undefined) ? e.nativeEvent.layerY : e.nativeEvent.offsetY;
    const {count, pulses} = this.state;
    const nextCount = count + 1;
    return this.setState({lastMoment: moment(), count: nextCount, pulses: [...pulses, {key: nextCount, isActive: false, x, y}]}, () => setTimeout(() => {
      const nextState = this.state;
      return this.setState({pulses: nextState.pulses.map(pulse => ({...pulse, isActive: true}))});
    }, 1));
  };

  handleMouseUp = (e) => {
    if (!truetype.isElement(this.rootRef.current)) {
      return null;
    }
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
    }, () => setTimeout(() => {
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
