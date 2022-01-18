'use strict';

const enums = require('../enums');

module.exports = (io, socket, socketHandler) => {
  const { individualizer } = socketHandler.newConnection(socket);
  socket.emit(enums.CHANNELS.EMIT.HANDSHAKE, individualizer);
};
