'use strict';

const { decodeUUID } = require('../utils');
const errorTypes = require('./errorTypes');

const findDuplicates = (arr) =>
  [...new Set(arr.filter((item, index) => arr.lastIndexOf(item) !== index))].join(', ');

module.exports = {
  validateHashedUUID: (value, helpers) => {
    let id;
    try {
      id = decodeUUID(value);
    } catch {
      return helpers.error(errorTypes.STRING_GUID);
    }
    return id;
  },
  validateDOUniqueStockItems: (value, helpers) => {
    const destinationOrderItems = helpers.original;
    let stockItems = [];
    destinationOrderItems.forEach((destinationOrderItem) => {
      stockItems = stockItems.concat(destinationOrderItem.stockItems);
    });
    if (new Set(stockItems).size !== stockItems.length) {
      return helpers.error(errorTypes.ARRAY_UNIQUE, { dupeValues: findDuplicates(stockItems) });
    }
    return destinationOrderItems;
  },
};
