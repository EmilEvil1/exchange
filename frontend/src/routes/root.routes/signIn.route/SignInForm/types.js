import PropTypes from 'prop-types';

export default {
  propTypes: {
    // ITranslationProps
    t: PropTypes.func.isRequired,
    // IMappedProps
    formValues: PropTypes.object.isRequired,
    isDisabledForm: PropTypes.bool.isRequired,
    isDisabledSubmit: PropTypes.bool.isRequired,
    // IReduxFormProps
    onSubmit: PropTypes.func.isRequired,
    submitFailed: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  },
};
