'use strict';

/* eslint-disable security/detect-object-injection */

const { Server } = require('socket.io');

module.exports = async (server) => {
  const io = new Server(server);

  io.on('connection', () => {});
};
