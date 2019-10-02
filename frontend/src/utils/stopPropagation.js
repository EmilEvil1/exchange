const stopPropagation = callback => e => {
  e.stopPropagation();
  if (callback === undefined) {
    return () => {};
  }
  return callback(e)
};

export default stopPropagation;
