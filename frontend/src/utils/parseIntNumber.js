// @flow
// interface ISettings {
//   max: number | void;
//   min: number | void;
//   maxLength: number | void;
// }

// const defaultSettings: ISettings = {
const defaultSettings = {
  min: 0,
};

// const parseFloatNumber = (payloadSettings: ISettings | void): Function => {
const parseFloatNumber = payloadSettings => {
  const settings = {...defaultSettings, ...payloadSettings};
  if (settings.maxLength !== undefined && settings.maxLength <= 0) {
    throw new Error('maxLength must be greater than 0');
  }
  // return (value: string): string => {
  return value => {
    let result = value.replace(/\s+/, '');
    result = result.replace(/^0\d/, result.charAt(1));

    if (Number.isNaN(Number(result)) && settings.prevValue !== undefined) {
      if (Number.isNaN(Number(settings.prevValue))) {
        result = String(settings.min);
      } else {
        result = settings.prevValue;
      }
    }

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

export default parseFloatNumber;