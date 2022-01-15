'use strict';

module.exports = (io, socket, socketHandler) => {
  socketHandler.newConnection(socket);
};
