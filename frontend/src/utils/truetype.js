const truetype = value => {
  const result = Object.prototype.toString.call(value);
  if (result.includes('String')) {
    return 'String';
  }
  if (result.includes('Number')) {
    return 'Number';
  }
  if (result.includes('Boolean')) {
    return 'Boolean';
  }
  if (result.includes('Array')) {
    return 'Array';
  }
  if (result.includes('Object')) {
    return 'Object';
  }
  if (result.includes('Date')) {
    return 'Date';
  }
  if (result.includes('Function')) {
    return 'Function';
  }
  if (result.includes('Class')) {
    return 'Class';
  }
  if (result.includes('Undefined')) {
    return 'Undefined';
  }
  if (result.includes('Null')) {
    return 'Null';
  }
  if (result.includes('FileList')) {
    return 'FileList';
  }
  if (result.includes('File')) {
    return 'File';
  }
  if (result.includes('Element')) {
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

truetype.oneOf = (value, types) => types.some(type => truetype(value) === type);

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
