import model from './model';

export const restIsLoading = (fieldId, state) => {
  const field = state[model.namespace][fieldId];
  if (field === undefined) {
    return false;
  }
  return field.status === 'loading';
};

export const restIsFail = (fieldId, state) => {
  const field = state[model.namespace][fieldId];
  if (field === undefined) {
    return false;
  }
  return field.status === 'fail';
};

export const restIsReceived = (fieldId, state) => {
  const field = state[model.namespace][fieldId];
  if (field === undefined) {
    return false;
  }
  return field.status === 'received';
};

export const restContent = (fieldId, state, defaultValue) => {
  const field = state[model.namespace][fieldId];
  if (field === undefined || field.content === undefined) {
    return defaultValue;
  }
  return field.content;
};
