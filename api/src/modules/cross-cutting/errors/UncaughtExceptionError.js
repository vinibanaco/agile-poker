'use strict';

const BaseError = require('./BaseError');

class UncaughtExceptionError extends BaseError {
  constructor(parent) {
    super(parent.message);
    this.name = 'UncaughtExceptionError';
    this.originalName = parent.name;
    this.message = 'Uncaught Exception';
    this.stack = parent.stack;
    this.isOperational = false;
  }
}

module.exports = UncaughtExceptionError;
