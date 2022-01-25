'use strict';

const setupCreateGameHandler = require('./create-game');
const setupDisconnectionHandler = require('./disconnection');
const setupDisconnectingHandler = require('./disconnecting');

module.exports = {
  setupCreateGameHandler,
  setupDisconnectionHandler,
  setupDisconnectingHandler,
};
