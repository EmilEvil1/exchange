import React from 'react';
import PropTypes from 'prop-types';
import {createPortal} from 'react-dom';
import truetype from 'frontend/utils/truetype';

class Portal extends React.PureComponent {
  static propTypes = {
    component: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.shape(),
    isOpen: PropTypes.bool,
    container: PropTypes.shape({
      current: PropTypes.instanceOf(Element)
    }).isRequired,
    method: PropTypes.oneOf(['before', 'after', 'append', 'prepend']),
    onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(undefined)]),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(undefined)]),
  };

  static defaultProps = {
    component: 'div',
    className: null,
    style: null,
    isOpen: false,
    method: 'append',
    onClick: undefined,
  };

  actions = {
    create: () => {
      const { component, className, onClick } = this.props;
      this.portal = document.createElement(component);
      this.portal.className = className || '';
      this.portal.onclick = onClick;
    },
    open: () => {
      const {
        className,
        style,
        container,
        method
      } = this.props;
      const { current: $container } = container;
      if (!truetype.isFalse(className)) this.portal.className = className;
      if (truetype.isFalse(className)) this.portal.removeAttribute('class');
      if (!truetype.isFalse(style)) this.portal.style = style;
      if (truetype.isFalse(style)) this.portal.removeAttribute('style');
      if (!this.portal.closest('body')) {
        $container[method](this.portal);
      }
    },
    close: () => {
      if (this.portal.closest('body')) {
        this.portal.removeAttribute('class');
        this.portal.removeAttribute('style');
        this.portal.remove();
      }
    }
  };

  constructor(props) {
    super(props);
    this.actions.create();
  }

  componentWillUnmount() {
    this.actions.close();
  }

  render() {
    const {
      isOpen,
      children
    } = this.props;
    if (isOpen) {
      this.actions.open();
      return createPortal(
          children,
          this.portal
      );
    }
    this.actions.close();
    return null;
  }
}

export default Portal;
