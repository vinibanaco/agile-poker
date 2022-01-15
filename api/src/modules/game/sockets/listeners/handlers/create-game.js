'use strict';

const enums = require('../../enums');

module.exports = (io, socket, socketHandler) => {
  return (name) => {
    socketHandler.changeSocketName(socket.id, name);
    const socketInfo = socketHandler.getSocketById(socket.id);
    const roomId = socketHandler.addRoom();
    socketHandler.joinRoom(roomId, socket.id);
    socketHandler.changeRoomAdmin(roomId, socketInfo.individualizer);
    socket.emit(enums.CHANNELS.EMIT.CREATE_GAME, socketHandler.getRoomById(roomId));
  };
};
