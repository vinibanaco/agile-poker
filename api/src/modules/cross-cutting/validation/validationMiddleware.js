'use strict';

const enums = require('./enums');
const { ValidationError } = require('../errors');
const { MESSAGES } = require('./errorMessages');

const validationMiddleware = (schema, property) => {
  return (req, res, next) => {
    let value;
    switch (property) {
      case enums.REQUEST_PROPERTY.HEADERS:
        value = req.headers;
        break;
      case enums.REQUEST_PROPERTY.QUERY:
        value = req.query;
        break;
      case enums.REQUEST_PROPERTY.BODY:
        value = req.body;
        break;
      case enums.REQUEST_PROPERTY.PARAMS:
        value = req.params;
        break;
      case enums.REQUEST_PROPERTY.COOKIES:
        value = req.cookies;
        break;
      default:
        throw new Error('invalid valdiation field');
    }

    const result = schema.validate(value, {
      messages: MESSAGES.DEFAULT,
    });
    const { error } = result;

    if (error) {
      if (error.isJoi) {
        const validationError = new ValidationError(error);
        return next(validationError);
      }
      return next(error);
    }
    return next();
  };
};
module.exports = validationMiddleware;
