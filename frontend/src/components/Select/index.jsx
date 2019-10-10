import React from 'react';
import {withTranslation} from 'react-i18next'
import formField from 'src/hocs/formField';
import truetype from 'src/utils/truetype';
import Dropdown from '../Dropdown';
import types from './types';
import * as CS from './style';

@withTranslation()
class Select extends React.PureComponent {
  static propTypes = types.propTypes;

  static defaultProps = types.defaultProps;

  static getDerivedStateFromProps(nextProps) {
    const nextState = {};
    if (nextProps.value !== undefined) {
      nextState.value = nextProps.value;
    }
    return nextState;
  }

  dropdownRef = React.createRef();

  rootRef = React.createRef();

  state = {
    value: null,
    isOpen: false,
  };

  getOptions() {
    const {options, t} = this.props;
    return [{label: t('Select:notSelected'), value: null}, ...options];
  };

  setValue = value => {
    if (value === this.state.value) {
      return null;
    }
    if (this.props.onChange !== undefined && this.props.value !== undefined) {
      return this.props.onChange(value);
    }
    return this.setState({value}, () => {
      if (this.props.onChange === undefined) {
        return null;
      }
      return this.props.onChange(value);
    });
  };

  handleOptionClick = option => () => {
    const {hideActions} = this.props;
    if (hideActions.selectOnChange) {
      this.handleHideOptions();
    }
    console.log('test-111', option);
    return this.setValue(option.value);
  };

  handleControlClick = () => this.setState(prevState => ({isOpen: !prevState.isOpen}));

  handleHideOptions = () => this.setState({isOpen: false});

  renderValue() {
    if (this.props.renderValue !== undefined) {
      return (
        <CS.Value>
          {this.props.renderValue({
            props: this.props,
            state: this.state
          })}
        </CS.Value>
      );
    }
    const {value} = this.state;
    return (
      <CS.Value>{JSON.stringify(value)}</CS.Value>
    );
  }

  renderOptions() {
    const {hideActions} = this.props;
    const {isOpen} = this.state;
    if (this.props.renderOptions !== undefined) {
      return (
        <CS.Options
          isOpen={isOpen}
          anchorRef={this.rootRef}
          ref={this.dropdownRef}
          onHide={this.handleHideOptions}
          hideActions={hideActions}>
          {this.props.renderOptions({
            props: {...this.props, options: this.getOptions()},
            state: this.state,
            handleOptionClick: this.handleOptionClick
          })}
        </CS.Options>
      );
    }
    return (
      <CS.Options
        isOpen={isOpen}
        anchorRef={this.rootRef}
        ref={this.dropdownRef}>
        {this.getOptions().map((option, index) => (
          <CS.Option
            onClick={this.handleOptionClick(option)}
            disabled={option.disabled}
            key={index}>
            {option.label}
          </CS.Option>
        ))}
      </CS.Options>
    );
  }

  render() {
    const {isOpen} = this.state;
    return (
      <>
        <CS.Root ref={this.rootRef} $isOpen={isOpen}>
          <CS.Control tabIndex="0" onClick={this.handleControlClick}>
            {this.renderValue()}
            <CS.Icon name="icon-chevron-down" />
          </CS.Control>
        </CS.Root>
        {this.renderOptions()}
      </>
    );
  }
}

export default Select;

export const SelectField = formField(Select, {isEnabledLabel: false});
