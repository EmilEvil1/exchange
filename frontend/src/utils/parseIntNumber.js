const defaultSettings = {
  min: 0,
};

const parseIntNumber = payloadSettings => {
  const settings = {...defaultSettings, ...payloadSettings};
  if (settings.maxLength !== undefined && settings.maxLength <= 0) {
    throw new Error('maxLength must be greater than 0');
  }
  return value => {
    let result = String(value).replace(/\D/, '');
    result = result.replace(/^0\d/, result.charAt(1));

    if (settings.max !== undefined && Number(result) > settings.max) {
      result = String(settings.max);
    }

    if (settings.min !== undefined && Number(result) < settings.min) {
      result = String(settings.min);
    }

    if (settings.maxLength !== undefined) {
      result = result.substring(0, settings.maxLength);
    }

    if (result.length === 0) {
      result = String(settings.min);
    }

    return result;
  };
};

export default parseIntNumber;
