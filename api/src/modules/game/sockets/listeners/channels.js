'use strict';

const socketInfoHandler = require('../socket-info-handler');
const {
  setupCreateGameHandler,
  setupDisconnectionHandler,
  setupDisconnectingHandler,
} = require('./handlers');
const onConnection = require('./on-connection');
const enums = require('../enums');

module.exports = (io, socket) => {
  onConnection(io, socket, socketInfoHandler);
  socket.on(
    enums.CHANNELS.LISTEN.CREATE_GAME,
    setupCreateGameHandler(io, socket, socketInfoHandler),
  );

  socket.on(
    enums.CHANNELS.LISTEN.DISCONNECTING,
    setupDisconnectingHandler(io, socket, socketInfoHandler),
  );
  socket.on(enums.CHANNELS.LISTEN.DISCONNECT, setupDisconnectionHandler());
};
