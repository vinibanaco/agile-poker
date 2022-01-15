'use strict';

const pino = require('pino');
const config = require('../../../config');
const enums = require('../../../enums');

const logConfig = {};

if (config.get(enums.CONFIG_KEYS.ENV) === enums.ENVS.DEVELOPMENT) {
  logConfig.transport = {
    target: 'pino-pretty',
    options: {
      translateTime: 'SYS:standard',
    },
  };
}

const logger = pino(logConfig);

module.exports = logger;
