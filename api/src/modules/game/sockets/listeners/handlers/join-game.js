'use strict';

module.exports = (io, socket, socketHandler) => {
  return (roomId, name) => {
    socketHandler.changeSocketName(socket.id, name);
    socketHandler.joinRoom(roomId, socket.id);
    socket.broadcast.emit('joined', socketHandler.getSocketById(socket.id));
  };
};
