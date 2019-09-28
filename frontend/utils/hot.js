const hot = module => (Component) => {
  if (process.env.NODE_ENV === 'development') {
    return require('react-hot-loader').hot(module)(Component);
  }
  return Component;
};


export default hot;
