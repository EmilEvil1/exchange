import PropTypes from 'prop-types';
import DropdownTypes, {hideActions} from '../Dropdown/types';

export default {
  propTypes: {
    renderValue: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(undefined)]),
    renderOptions: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(undefined)]),
    hideActions: PropTypes.shape({
      ...hideActions,
      selectOnChange: PropTypes.bool,
    }),
  },
  defaultProps: {
    hideActions: {
      ...DropdownTypes.defaultProps.closeAction,
      selectOnChange: true,
    },
  },
};
