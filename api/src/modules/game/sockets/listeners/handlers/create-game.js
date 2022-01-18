'use strict';

const enums = require('../../enums');

module.exports = (io, socket, socketHandler) => {
  return (name) => {
    socketHandler.changeSocketName(socket.id, name);
    const socketInfo = socketHandler.getSocketById(socket.id);
    const roomId = socketHandler.addRoom();
    socketHandler.joinRoom(roomId, socket.id);
    socketHandler.changeRoomAdmin(roomId, socketInfo.individualizer);

    const roomInfo = socketHandler.getRoomById(roomId);
    roomInfo.players = roomInfo.sockets.map((info) => {
      const playerInfo = { ...info, id: info.individualizer };
      delete playerInfo.room;
      delete playerInfo.individualizer;
      return playerInfo;
    });
    delete roomInfo.sockets;
    socket.emit(enums.CHANNELS.EMIT.CREATE_GAME, roomInfo);
  };
};
