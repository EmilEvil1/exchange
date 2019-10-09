const stopPropagation = e => {
  return e.stopPropagation();
};

stopPropagation.call = callback => e => {
  stopPropagation(e);
  return callback();
};

export default stopPropagation;
