import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {createPortal} from 'react-dom';
import domNodeIsChild from 'src/utils/domNodeIsChild';
import types from './types';
import * as CS from './style';

class Dropdown extends PureComponent {
  static propTypes = types.propTypes;

  static defaultProps = types.defaultProps;

  className = {
    root: 'dropdown',
    root$hidden: `${this.className}_hidden`,
  };

  constructor(props) {
    super(props);
    this.dropdown = document.createElement('div');
    this.dropdown.className = `${this.className.root} ${this.className.root$hidden}`;
  }

  componentDidMount() {
    window.addEventListener('resize', this.getPosition);
    window.addEventListener('scroll', this.getPosition);

    if (this.props.closeAction.externalClick) {
      window.addEventListener('click', this.handleDocumentClick);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getPosition);
    window.removeEventListener('scroll', this.getPosition);

    this.handleClose({removeAfter: 0});

    if (this.props.closeAction.externalClick) {
      window.removeEventListener('click', this.handleDocumentClick);
    }
  }

  handleOpen = ({showAfter}) => {
    if (!this.dropdown.closest('body')) {
      this.getPosition();
      document.querySelector('body').append(this.dropdown);
      setTimeout(() => {
        this.dropdown.className = this.className.root;
      }, showAfter);
    }
  };

  handleClose = ({removeAfter}) => {
    if (this.dropdown.closest('body')) {
      this.dropdown.className = '';

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

  handleDocumentClick = e => {
    const {anchorRef, isOpen} = this.props;

    if (!isOpen) {
      return null;
    }

    if (
        e.target === this.dropdown ||
        domNodeIsChild(this.dropdown, e.target) ||
        e.target === anchorRef.current ||
        domNodeIsChild(anchorRef.current, e.target)
    ) {
      return null;
    }

    if (this.props.onHide !== undefined) {
      return this.props.onHide();
    }

    return null;
  };

  getPosition = () => {
    const {
      anchorRef: {current: anchorRef},
      width,
      maxHeight,
    } = this.props;

    if (!anchorRef) {
      return;
    }

    const rect = anchorRef.getBoundingClientRect();

    this.dropdown.style = `
      top: ${rect.y + rect.height}px;
      left: ${rect.x}px;
      ${width === 'auto' ? `width: ${rect.width}px;` : 0}
      ${maxHeight !== undefined ? `max-height: ${maxHeight};` : ''}
    `.replace(/\s/g, '');
  };

  render() {
    const {className, isOpen, onMouseEnter, onMouseLeave, children} = this.props;

    if (isOpen) {
      this.handleOpen({showAfter: 200});
    } else {
      this.handleClose({removeAfter: 200});
    }

    return createPortal(
      <CS.Root className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
      </CS.Root>,
      this.dropdown
    );
  }
}

export default Dropdown;
