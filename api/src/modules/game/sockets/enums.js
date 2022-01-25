'use strict';

module.exports = {
  CHANNELS: {
    LISTEN: {
      CREATE_GAME: 'game:create',
      DISCONNECTING: 'disconnecting',
      DISCONNECT: 'disconnect',
    },
    EMIT: {
      HANDSHAKE: 'handshake',
      CREATE_GAME: 'game:create',
      USER_LEFT: 'user:left',
    },
  },
};
