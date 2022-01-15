'use strict';

const errorTypes = require('./errorTypes');

const defaultErrorMessages = {
  [errorTypes.ALTERNATIVES_TYPES]: 'The value is not of an allowed type',
  [errorTypes.ANY_ONLY]: "The field doesn't match the allowed values",
  [errorTypes.ANY_REQUIRED]: 'The field is required',
  [errorTypes.ANY_UNKNOWN]: 'The parameter is not allowed',
  [errorTypes.ARRAY_BASE]: 'The field must be an array',
  [errorTypes.ARRAY_INCLUDES_REQUIRED_UNKNOWNS]: 'The array is missing required values',
  [errorTypes.ARRAY_LENGTH]: 'The array must contain exactly {#limit} item(s)',
  [errorTypes.ARRAY_MAX]: 'The array has more elements than the maximum allowed',
  [errorTypes.ARRAY_MIN]: 'The array does not contain the minimum number of items',
  [errorTypes.ARRAY_UNIQUE]: 'The array must not include repeated values',
  [errorTypes.BOOLEAN_BASE]: 'The field must be boolean',
  [errorTypes.DATE_BASE]: 'The field must be a date',
  [errorTypes.DATE_FORMAT]: 'The field does not match the required date format',
  [errorTypes.DATE_GREATER]: 'The field must be greater than {#limit}',
  [errorTypes.DATE_MIN]: 'The field value must be greater than or equal to {#limit}',
  [errorTypes.DATE_MAX]: 'The field value is greater than the maximum allowed date',
  [errorTypes.NUMBER_BASE]: 'The field must be a number',
  [errorTypes.NUMBER_INTEGER]: 'The field must be an integer value',
  [errorTypes.NUMBER_MAX]: 'The field value is greater than maximum allowed values',
  [errorTypes.NUMBER_MIN]: 'The field value is less than minimum allowed values',
  [errorTypes.NUMBER_POSITIVE]: 'The field must be an positive value',
  [errorTypes.NUMBER_PRECISION]: 'The number did not have the required amount of decimal places',
  [errorTypes.OBJECT_AND]: 'Missing one or more fields that are required with another field',
  [errorTypes.OBJECT_BASE]: 'The value must be an object',
  [errorTypes.OBJECT_MISSING]: 'At least one of the following fields must be provided',
  [errorTypes.OBJECT_NAND]: 'Some fields must not exist simultaneously',
  [errorTypes.OBJECT_OXOR]:
    'The fields {#peers} cannot be passed at the same time. Either one or the other',
  [errorTypes.OBJECT_UNKNOWN]: 'The property is not allowed',
  [errorTypes.OBJECT_WITH]: 'The field cannot be provided without its peer',
  [errorTypes.STRING_BASE]: 'The field must be a string',
  [errorTypes.STRING_EMAIL]: 'The field must be an email',
  [errorTypes.STRING_EMPTY]: 'The field is not allowed to be empty',
  [errorTypes.STRING_GUID]: 'The field is not a valid UUID',
  [errorTypes.STRING_MAX]: 'The field length is greater than maximum allowed length',
  [errorTypes.STRING_MIN]: 'The field length is less than minimum allowed',
};

module.exports = Object.seal({
  MESSAGES: {
    DEFAULT: defaultErrorMessages,
  },
});
