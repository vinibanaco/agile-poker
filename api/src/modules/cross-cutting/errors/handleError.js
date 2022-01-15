'use strict';

const log = require('../log');
const format = require('./format');
const ValidationError = require('./ValidationError');
const UnprocessableEntityError = require('./UnprocessableEntityError');
const NotFoundError = require('./NotFoundError');
const UniqueConstraintError = require('./UniqueConstraintError');

/**
 * Process the error object and generate a log entry if isn't a instance of ValidationError.
 * the return is an object containing an array of the error details
 * Use this handler to add other actions if necessary, like notifying an admin etc.
 */
const handleError = (err) => {
  const errorsToSkipLogging = [
    NotFoundError,
    UniqueConstraintError,
    UnprocessableEntityError,
    ValidationError,
  ];
  if (!errorsToSkipLogging.some((errorClass) => err instanceof errorClass)) {
    log.error(err);
  }

  return format(err);
};

module.exports = handleError;
