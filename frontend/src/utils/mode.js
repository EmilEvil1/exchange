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

export default mode;
