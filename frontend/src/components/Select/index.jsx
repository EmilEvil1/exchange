import React from 'react';
import {withTranslation} from 'react-i18next'
import formField from 'frontend/src/hocs/formField';
import Dropdown from 'frontend/src/components/Dropdown';
import * as CS from './style';

@withTranslation()
class Select extends React.PureComponent {
  static defaultProps = {
    closeAction: {
      change: true,
      externalClick: true,
      blur: true,
    },
  };

  dropdownRef = React.createRef();

  rootRef = React.createRef();

  state = {
    isOpen: false,
    isLockClose: false,
    disabledCloseActionBlur: false,
  };

  componentDidMount() {
    const {closeAction} = this.props;
    if (closeAction.externalClick) {
      window.addEventListener('click', this.handleDocumentClick);
    }
  }

  componentWillUnmount() {
    const {closeAction} = this.props;
    if (closeAction.externalClick) {
      window.removeEventListener('click', this.handleDocumentClick);
    }
  }

  handleDocumentClick = (e) => {
    const {isOpen} = this.state;
    if (!isOpen) {
      return null;
    }
    const result = [];
    const {current: dropdownRef} = this.dropdownRef;
    const {current: rootRef} = this.rootRef;

    result.push(e.target === rootRef);
    result.push(e.target.closest('.dropdown') === dropdownRef.dropdown)

    if (result.every(res => res === false)) {
      return this.setState({isOpen: false});
    }
  }

  handleOptionClick = value => {
    const {onChange, closeAction} = this.props;
    return () => {
      if (closeAction.change) {
        this.setState({isOpen: false});
      }
      return onChange(value);
    };
  };

  getRootHandlers() {
    const {onFocus, onBlur, closeAction} = this.props;
    const {disabledCloseActionBlur} = this.state;
    return {
      onChange: () => {},
      onFocus: (e) => {
        if (onFocus !== undefined) {
          onFocus(e);
        }
        return this.setState({isOpen: true});
      },
      onBlur: (e) => {
        if (!closeAction.blur || disabledCloseActionBlur) {
          return null;
        }
        if (onBlur !== undefined) {
          onBlur(e);
        }
        return this.setState({isOpen: false});
      },
    };
  }

  getSelected() {
    const {options, value, t} = this.props;
    const selected = options.find(item => item.value === value);
    if (selected !== undefined) {
      return selected.label;
    }
    return t('Select:notSelected');
  }

  handleDropdownMouseEnter = () => {
    const {closeAction} = this.props;
    if (!closeAction.blur) {
      return null;
    }
    return this.setState({disabledCloseActionBlur: true});
  }

  handleDropdownMouseLeave = () => {
    const {closeAction} = this.props;
    if (!closeAction.blur) {
      return null;
    }
    return this.setState({disabledCloseActionBlur: false});
  }

  renderOptions() {
    const {value, options: optionsProp} = this.props;
    const {isOpen} = this.state;
    const options = optionsProp.filter(item => item.value !== value);
    if (Array.isArray(options) && options.length > 0) {
      return (
        <Dropdown
          isOpen={isOpen}
          anchorRef={this.rootRef}
          ref={this.dropdownRef}
          onMouseEnter={this.handleDropdownMouseEnter}
          onMouseLeave={this.handleDropdownMouseLeave}
        >
          <CS.Options>
            {options.map(({label, value, ...option}, i) => (
              <CS.Option
                {...option}
                onClick={this.handleOptionClick(value)}
                key={i}
              >
                {label}
              </CS.Option>
            ))}
          </CS.Options>
        </Dropdown>
      );
    }
    return null;
  }

  render() {
    return (
      <>
        <CS.Root
          {...this.props}
          {...this.getRootHandlers()}
          ref={this.rootRef}
          value={this.getSelected()}
        />
        {this.renderOptions()}
      </>
    )
  }
}

export default Select;

export const SelectField = formField(Select);
