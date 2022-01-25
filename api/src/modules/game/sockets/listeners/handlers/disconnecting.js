'use strict';

const enums = require('../../enums');

module.exports = (io, socket, socketHandler) => {
  return () => {
    // TODO: pass admin if needed (emit event of admin change)
    const { individualizer, room } = socketHandler.getSocketById(socket.id);
    if (room) {
      socket.to(room).emit(enums.CHANNELS.EMIT.USER_LEFT, individualizer);
      socketHandler.leaveRoom(socket.id);
    }
  };
};
