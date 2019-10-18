import PropTypes from 'prop-types';

export default {
  propTypes: {
    formValues: PropTypes.shape().isRequired,
    stepId: PropTypes.number.isRequired,
    initialValues: PropTypes.shape().isRequired,
    currenciesIsLoading: PropTypes.bool.isRequired,
    currenciesIsFail: PropTypes.bool.isRequired,
    currenciesIsReceived: PropTypes.bool.isRequired,
    currencies: PropTypes.shape({
      banks: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.instanceOf(undefined)]),
      coins: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.instanceOf(undefined)]),
    }).isRequired,
    allCurrencies: PropTypes.arrayOf(PropTypes.object).isRequired,
    historyPush: PropTypes.func.isRequired,
    restRequest: PropTypes.func.isRequired,
    restReset: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
    untouch: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  },
  defaultProps: {},
};
