const jsonparse = payload => {
  try {
    return JSON.parse(payload);
  } catch (error) {
    return undefined;
  }
};

export default jsonparse;
