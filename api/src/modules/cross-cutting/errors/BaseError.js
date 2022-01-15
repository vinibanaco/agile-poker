'use strict';

class BaseError extends Error {
  constructor(message, { isOperational = true } = {}) {
    super(message);
    this.name = 'BaseError';
    this.isOperational = isOperational;
  }
}

module.exports = BaseError;
