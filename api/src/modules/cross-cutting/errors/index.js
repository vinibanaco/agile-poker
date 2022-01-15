'use strict';

const BaseError = require('./BaseError');
const NotFoundError = require('./NotFoundError');
const UncaughtExceptionError = require('./UncaughtExceptionError');
const UnhandledRejectionError = require('./UnhandledRejectionError');
const UniqueConstraintError = require('./UniqueConstraintError');
const UnprocessableEntityError = require('./UnprocessableEntityError');
const ValidationError = require('./ValidationError');

const handleError = require('./handleError');
const isOperationalError = require('./isOperationalError');
const errorTypes = require('./errorTypes');

module.exports = {
  BaseError,
  NotFoundError,
  UncaughtExceptionError,
  UnhandledRejectionError,
  UniqueConstraintError,
  UnprocessableEntityError,
  ValidationError,
  handleError,
  isOperationalError,
  errorTypes,
};
