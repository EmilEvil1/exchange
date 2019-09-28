import React from 'react';
import {css} from 'styled-components';
import {createPortal} from 'react-dom'
import truetype from 'src/utils/truetype';
import types from './types';
import * as CS from './style';

class Dropdown extends React.PureComponent {
  static propTypes = types.propTypes;

  static defaultProps = types.defaultProps;

  state = {
    style: {},
  };

  constructor(props) {
    super(props);
    this.dropdown = document.createElement('div');
    this.dropdown.className = 'dropdown dropdown_hidden';
  }

  componentDidMount() {
    window.addEventListener('resize', this.getPosition);
    window.addEventListener('scroll', this.getPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getPosition);
    window.removeEventListener('scroll', this.getPosition);
    this.close({removeAfter: 0});
  }

  open = ({showAfter}) => {
    const {style} = this.state;
    if (!truetype.isFalse(style)) this.dropdown.style = style;
    if (truetype.isFalse(style)) this.dropdown.removeAttribute('style');
    if (!this.dropdown.closest('body')) {
      this.getPosition();
      document.querySelector('body').append(this.dropdown);
      setTimeout(() => {
        this.dropdown.classList.remove('dropdown_hidden');
      }, showAfter);
    }
  };

  close = ({removeAfter}) => {
    if (this.dropdown.closest('body')) {
      this.dropdown.classList.add('dropdown_hidden');
      if (removeAfter === 0) {
        this.dropdown.removeAttribute('style');
        this.dropdown.remove();
      } else {
        setTimeout(() => {
          this.dropdown.removeAttribute('style');
          this.dropdown.remove();
        }, removeAfter);
      }
    }
  };

  getPosition = () => {
    const {
      anchorRef: {current: anchorRef},
      position,
      width,
    } = this.props;
    if (!truetype.isElement(anchorRef)) {
      return null;
    }
    const rect = anchorRef.getBoundingClientRect();
    return this.setState({
      style: `
        top: ${rect.y + rect.height}px;
        left: ${rect.x}px;
        ${width === 'auto' ? `width: ${rect.width}px;` : 0}
      `.replace(/\s/g, ''),
    });
  };

  render() {
    const {isOpen, onMouseEnter, onMouseLeave, children} = this.props;

    if (isOpen) {
      this.open({showAfter: 200});
    } else {
      this.close({removeAfter: 200});
    }

    return createPortal(
        <CS.Root onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{children}</CS.Root>,
        this.dropdown
    );
  }
}

export default Dropdown;
