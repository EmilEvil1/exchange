import React from 'react';
import formField from 'src/hocs/formField';
import types from './types';
import * as CS from './style';

class Checkbox extends React.PureComponent {
  static propTypes = types.propTypes;

  handleChange = (e) => {
    const {value} = e.target;
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

  render() {
    const {controlLabel} = this.props;
    return (
      <CS.Root>
        <CS.Control tabIndex="0" onClick={this.handleChange}>{controlLabel}</CS.Control>
      </CS.Root>
    );
  }
}

export default Checkbox;

export const CheckboxField = formField(Checkbox);
