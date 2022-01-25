'use strict';

const setupCreateGameHandler = require('./create-game');
const setupJoinGameHandler = require('./join-game');
const setupDisconnectionHandler = require('./disconnection');
const setupDisconnectingHandler = require('./disconnecting');

module.exports = {
  setupCreateGameHandler,
  setupJoinGameHandler,
  setupDisconnectionHandler,
  setupDisconnectingHandler,
};
