'use strict';

const validationError = require('./ValidationError');
const UnprocessableEntityError = require('./UnprocessableEntityError');
const UniqueConstraintError = require('./UniqueConstraintError');

const format = (err) => {
  if (
    err instanceof validationError ||
    err instanceof UnprocessableEntityError ||
    err instanceof UniqueConstraintError
  ) {
    return {
      errors: err.details,
    };
  }

  return null;
};

module.exports = format;
