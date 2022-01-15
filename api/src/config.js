'use strict';

const dotenv = require('dotenv');
const convict = require('convict');
const convictFormatWithValidator = require('convict-format-with-validator');
const fs = require('fs');
const { validate, version } = require('uuid');

convict.addFormats(convictFormatWithValidator);
convict.addFormat({
  name: 'uuidv4',
  validate: (val) => {
    if (!validate(val) || version(val) !== 4) {
      throw new Error(`Expected a uuidv4 but received ${val}`);
    }
  },
});

dotenv.config();

const configProperties = {
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: null,
    env: 'NODE_ENV',
  },
  port: {
    doc: 'The port to bind the app.',
    format: 'port',
    default: 3000,
    env: 'TC_API_PORT',
  },
  publicUrl: {
    doc: 'The public url',
    format: String,
    default: '/',
    env: 'TC_API_PUBLIC_URL',
  },
  allowedOrigins: {
    doc: 'List of Authorized URLs',
    format: Array,
    default: [],
    env: 'TC_API_ALLOWED_ORIGINS',
  },
};
const config = convict(configProperties);

// Enable config override using scoped config files
const env = config.get('env');
const file = `./config.${env}.json`;
// eslint-disable-next-line security/detect-non-literal-fs-filename
if (fs.existsSync(file)) {
  config.loadFile(file);
}

try {
  config.validate({ allowed: 'strict' });
} catch (err) {
  const propertyPath = err.message.split(':')[0];
  const accessors = propertyPath.split('.');
  let configProperty;
  accessors.forEach((accessor) => {
    if (!configProperty) {
      // eslint-disable-next-line security/detect-object-injection
      configProperty = configProperties[accessor];
      return;
    }
    // eslint-disable-next-line security/detect-object-injection
    configProperty = configProperty[accessor];
  });

  err.message = `There was a problem with the configuration during startup, this is usually caused by a missing environment variable, please check your .env file and the provided .env.sample file for a variable named '${configProperty.env}'
   ${err.message}`;
  throw err;
}

module.exports = config;
