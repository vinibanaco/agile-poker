'use strict';

const promisesResults = async (promiseArray) => {
  const resultArray = await Promise.allSettled(promiseArray);

  return resultArray.map((result) => {
    if (result.status === 'rejected') {
      throw result.reason;
    } else {
      return result.value;
    }
  });
};

module.exports = promisesResults;
