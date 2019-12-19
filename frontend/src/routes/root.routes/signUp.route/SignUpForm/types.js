import PropTypes from 'prop-types';

export default {
  propTypes: {
    // ITranslationProps
    t: PropTypes.func.isRequired,
    // IMappedProps
    isDisabledForm: PropTypes.bool.isRequired,
    isDisabledSubmit: PropTypes.bool.isRequired,
    // IReduxFormProps
    onSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  },
};
