const mode = (payload) => {
  const {production, development} = payload;
  switch (process.env.NODE_ENV) {
    case 'production':
      return production;
    case 'development':
      return development;
    default:
      throw payload;
  }
}

mode.isProduction = () => process.env.NODE_ENV === 'production';
mode.isDevelopment = () => process.env.NODE_ENV === 'development';

export default mode;
