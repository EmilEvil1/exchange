import React from 'react';
import {Transition} from 'react-transition-group';
import truetype from 'src/utils/truetype';
import types from './types';
import * as CS from './style';

class Step extends React.PureComponent {
  static propTypes = types.propTypes;

  static defaultProps = types.defaultProps;

  hiddenRef = React.createRef();

  visibleRef = React.createRef();

  getRootStyle(ref) {
    const {current} = ref;
    if (!truetype.isElement(current)) {
      return null;
    }
    const rect = current.getBoundingClientRect();
    return {
      height: `${rect.height}px`,
    };
  }

  render() {
    const {isActive, iconName, primary, secondary, children} = this.props;
    return (
      <CS.Root>
        <CS.Head $isActive={isActive}>
          {iconName !== undefined && <CS.Icon name={iconName} />}
          {primary !== undefined && <CS.Primary>{primary}</CS.Primary>}
          {secondary !== undefined && <CS.Secondary>{secondary}</CS.Secondary>}
        </CS.Head>
        <Transition in={isActive} timeout={200} unmountOnExit>
          {state => (
            <CS.Body $state={state} style={this.getRootStyle(this.visibleRef)}>
              <CS.BodyContent ref={this.visibleRef}>
                <CS.BodyDecore $topLeft></CS.BodyDecore>
                <CS.BodyDecore $bottomRight></CS.BodyDecore>
                {children}
              </CS.BodyContent>
            </CS.Body>
          )}
        </Transition>
      </CS.Root>
    );
  }
}

export default Step;
