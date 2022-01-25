'use strict';

const enums = require('../../enums');

module.exports = (io, socket, socketHandler) => {
  return (roomId, name, callback = () => {}) => {
    try {
      const socketInfo = socketHandler.getSocketById(socket.id);
      if (socketInfo.room) {
        return;
      }

      const roomInfo = socketHandler.getRoomByIdUserFriendly(roomId);
      if (!roomInfo) {
        callback({ status: 'error', errorType: 'game.notFound' });
      }
      socketHandler.changeSocketName(socket.id, name);
      socketHandler.joinRoom(roomId, socket.id);
      socket
        .to(roomId)
        .emit(enums.CHANNELS.EMIT.PLAYER_JOINED, socketHandler.getSocketById(socket.id));

      callback({ status: 'success', data: { ...roomInfo } });
    } catch (error) {
      console.log(error);
      callback({ status: 'error', errorType: 'internal' });
    }
  };
};
