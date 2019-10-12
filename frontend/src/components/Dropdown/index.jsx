import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {createPortal} from 'react-dom';
import domNodeIsChild from 'src/utils/domNodeIsChild';
import types from './types';
import * as CS from './style';

class Dropdown extends PureComponent {
  static propTypes = types.propTypes;

  static defaultProps = types.defaultProps;

  static getDerivedStateFromProps(nextProps) {
    const nextState = {};
    if (nextProps.isOpen !== undefined) {
      nextState.isOpen = nextProps.isOpen;
    }
    return nextState;
  }

  className = {
    root: 'dropdown',
    root_hidden: 'dropdown_hidden',
  };

  state = {
    isOpen: false,
  };

  constructor(props) {
    super(props);
    this.dropdown = document.createElement('div');
    this.dropdown.className = `${this.className.root} ${this.className.root_hidden}`;
    this.getPosition = this.getPosition.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.getPosition);
    window.addEventListener('scroll', this.getPosition);

    if (this.props.closeAction.documentClick) {
      window.addEventListener('click', this.handleDocumentClick);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getPosition);
    window.removeEventListener('scroll', this.getPosition);

    this.handleClose({removeAfter: 0});

    if (this.props.closeAction.documentClick) {
      window.removeEventListener('click', this.handleDocumentClick);
    }
  }

  getPosition() {
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
      this.dropdown.className = `${this.className.root} ${this.className.root_hidden}`;

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

    if (this.props.onHide !== undefined && this.props.isOpen !== undefined) {
      return this.props.onHide();
    }

    return this.setState({isOpen: false}, () => {
      if (this.props.onHide === undefined) {
        return null;
      }
      return this.props.onHide();
    });
  };

  render() {
    const {className, onMouseEnter, onMouseLeave, children} = this.props;
    const {isOpen} = this.state;

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
