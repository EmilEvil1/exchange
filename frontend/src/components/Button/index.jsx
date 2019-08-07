import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import Pulse from 'frontend/src/components/Pulse';
import * as CS from './style';
import types from './types';

@withRouter
class Button extends React.PureComponent {
  static propTypes = types.propTypes;

  static defaultProps = types.defaultProps;

  static getBaseState() {
    return {
      isDisabled: false,
      isActive: false,
      isActiveLink: false,
    };
  }

  static getStateRoot(props, state) {
    const {location, component, href} = props;
    if (component === 'Link' && (!state.isDisabled && !state.isActive && location.pathname !== href)) {
      return {
        Component: CS.Root(Link),
        componentType: 'Link',
      };
    } else if (component === 'a' && (!state.isDisabled && !state.isActive && location.pathname !== href)) {
      return {
        Component: CS.Root('a'),
        componentType: 'a',
      };
    } else if (component === 'Link' || component === 'a') {
      return {
        Component: CS.Root('span'),
        componentType: 'span',
      };
    }
    return {
      Component: CS.Root(component),
      componentType: component
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const nextState = Button.getBaseState();
    if (nextProps.disabled !== undefined) {
      nextState.isDisabled = nextProps.isDisabled;
    }
    if (nextProps.isActive !== undefined) {
      nextState.isActive = nextProps.isActive;
    }
    {
      const {location, component, href} = nextProps;
      if ((component === 'Link' || component === 'a') && location.pathname === href) {
        nextState.isActiveLink = true;
      }
      const nextStateRoot = Button.getStateRoot(nextProps, nextState);
      if (nextStateRoot.componentType !== prevState.Root.componentType) {
        nextState.Root = nextStateRoot;
      }
    }
    return nextState;
  }

  state = {
    ...Button.getBaseState(),
    Root: Button.getStateRoot(this.props, Button.getBaseState()),
  };

  getRootProps() {
    const {props, state} = this;
    const rootProps = {
      type: props.type,
      design: {
        isDisabled: state.isDisabled,
        isActive: state.isActive,
        isActiveLink: state.isActiveLink,
        variant: props.variant,
        color: props.color,
      },
      onClick: props.onClick,
      onMouseDown: props.onMouseDown,
      onMouseUp: props.onMouseUp,
      onFocus: props.onFocus,
      onBlur: props.onBlur,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      disabled: state.isDisabled,
    };
    if (props.component === 'Link' && !state.isDisabled && !state.isActive && !state.isActiveLink) {
      rootProps.to = props.href;
    } else if (props.component === 'a' && !state.isDisabled && !state.isActive && !state.isActiveLink) {
      rootProps.href = props.href;
    }
    return rootProps;
  }

  render() {
    const {beforeIcon, variant, children} = this.props;
    const {isActive, isDisabled} = this.state;
    const hasBeforeIcon = beforeIcon !== undefined;
    const isRenderPulse = [undefined, 'contained'].includes(variant) && !isActive && !isDisabled;
    const {Root} = this.state;
    return (
      <Root.Component {...this.getRootProps()}>
        <CS.Content>
          <CS.Text>{children}</CS.Text>
        </CS.Content>
        {isRenderPulse && <Pulse />}
      </Root.Component>
    );
  }
}

export default Button;
