const jsonparse = payload => {
  try {
    return JSON.parse(payload);
  } catch {
    return undefined;
  }
};

export default jsonparse;
