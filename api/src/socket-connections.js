'use strict';

/* eslint-disable security/detect-object-injection */

const { Server } = require('socket.io');

const config = require('./config');
const game = require('./modules/game');

module.exports = async (server) => {
  const io = new Server(server, {
    cors: {
      origin: config.get('allowedOrigins'),
    },
  });

  io.on('connection', (socket) => {
    game.registerSocketHandlers(io, socket);
  });
};
