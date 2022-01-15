'use strict';

const BaseError = require('./BaseError');
const enums = require('../../../enums');

class UniqueConstraintError extends BaseError {
  constructor(data = {}) {
    if (typeof data === 'string') {
      super(data);
    } else {
      super(data.message);
      if (typeof data === 'object') {
        this.details = [
          {
            message: data.message,
            keys: [...data.keys],
            type: data.type,
          },
        ];
      }
    }

    this.name = 'UniqueConstraintError';
    this.statusCode = enums.HTTP_STATUS.CONFLICT;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = UniqueConstraintError;
