var promiseAll = async function (functions) {
  try {
    const results = await Promise.all(functions.map((fn) => fn()));
    return results;
  } catch (error) {
    throw error;
  }
};
