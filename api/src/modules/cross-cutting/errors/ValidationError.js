'use strict';

const BaseError = require('./BaseError');
const enums = require('../../../enums');

class ValidationError extends BaseError {
  constructor(errorInfo) {
    if (typeof errorInfo === 'string') {
      super(errorInfo);
      return;
    }
    super(errorInfo.message);

    this.name = 'ValidationError';
    this.statusCode = enums.HTTP_STATUS.BAD_REQUEST;
    this.isOperational = true;
    if (errorInfo.isJoi) {
      this.details = errorInfo.details.map((detail) => {
        const responseDetail = {
          message: detail.message,
          keys: [],
          type: detail.type,
        };
        switch (detail.type) {
          case 'object.and':
            responseDetail.keys =
              detail.context.missingWithLabels || detail.context.peersWithLabels;
            break;
          case 'object.with':
            responseDetail.keys.push(detail.context.mainWithLabel);
            responseDetail.keys.push(detail.context.peerWithLabel);
            break;
          default:
            responseDetail.keys.push(detail.context.key);
        }
        return responseDetail;
      });
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.details = [
        {
          message: errorInfo.message,
          keys: [...errorInfo.keys],
          type: errorInfo.type,
        },
      ];
    }
  }
}

module.exports = ValidationError;
