const truetype = value => {
  const {toString} = {};
  const result = toString.call(value);
  if (/String/.test(result)) {
    return 'String';
  }
  if (/Number/.test(result)) {
    return 'Number';
  }
  if (/Boolean/.test(result)) {
    return 'Boolean';
  }
  if (/Array/.test(result)) {
    return 'Array';
  }
  if (/Object/.test(result)) {
    return 'Object';
  }
  if (/Date/.test(result)) {
    return 'Date';
  }
  if (/Function/.test(result)) {
    return 'Function';
  }
  if (/Class/.test(result)) {
    return 'Class';
  }
  if (/Undefined/.test(result)) {
    return 'Undefined';
  }
  if (/Null/.test(result)) {
    return 'Null';
  }
  if (/FileList/.test(result)) {
    return 'FileList';
  }
  if (/File/.test(result)) {
    return 'File';
  }
  if (/Element/.test(result)) {
    return 'Element';
  }
  throw result;
};

truetype.isString = value => {
  if (truetype(value) === 'String') {
    return true;
  }
  return false;
};

truetype.isNumber = value => {
  if (truetype(value) === 'Number') {
    return true;
  }
  return false;
};

truetype.isBoolean = value => {
  if (truetype(value) === 'Boolean') {
    return true;
  }
  return false;
};

truetype.isArray = value => {
  if (truetype(value) === 'Array') {
    return true;
  }
  return false;
};

truetype.isObject = value => {
  if (truetype(value) === 'Object') {
    return true;
  }
  return false;
};

truetype.isDate = value => {
  if (truetype(value) === 'Date') {
    return true;
  }
  return false;
};

truetype.isFunction = value => {
  if (truetype(value) === 'Function') {
    return true;
  }
  return false;
};

truetype.isClass = value => {
  if (truetype(value) === 'Class') {
    return true;
  }
  return false;
};

truetype.isUndefined = value => {
  if (truetype(value) === 'Undefined') {
    return true;
  }
  return false;
};

truetype.isNull = value => {
  if (truetype(value) === 'Null') {
    return true;
  }
  return false;
};

truetype.isFileList = value => {
  if (truetype(value) === 'FileList') {
    return true;
  }
  return false;
};

truetype.isFile = value => {
  if (truetype(value) === 'File') {
    return true;
  }
  return false;
};

truetype.isElement = value => {
  if (truetype(value) === 'Element') {
    return true;
  }
  return false;
};

truetype.isFalse = value => {
  if (truetype.isBoolean(value) && value === false) {
    return true;
  }
  if (truetype.isUndefined(value) || truetype.isNull(value)) {
    return true;
  }
  if (truetype.isString(value) && value.length === 0) {
    return true;
  }
  if (truetype.isNumber(value) && value === 0) {
    return true;
  }
  return false;
};

export default truetype;
