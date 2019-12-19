const preventDefault = e => {
  return e.preventDefault();
};

preventDefault.call = callback => e => {
  preventDefault(e);
  return callback();
};

export default preventDefault;
