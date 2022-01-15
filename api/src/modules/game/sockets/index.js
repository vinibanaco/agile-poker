'use strict';

const { registerSocketHandlers } = require('./listeners');
const socketInfoHandler = require('./socket-info-handler');

module.exports = {
  registerSocketHandlers,
  socketInfoHandler,
};
