'use strict';

const isOperationalError = (err) => {
  if (err instanceof SyntaxError && err.type === 'entity.parse.failed') {
    return true;
  }

  if (err.isOperational) {
    return true;
  }

  return false;
};

module.exports = isOperationalError;
