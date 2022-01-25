'use strict';

module.exports = {
  CHANNELS: {
    LISTEN: {
      CREATE_GAME: 'game:create',
      JOIN: 'game:join',
      DISCONNECTING: 'disconnecting',
      DISCONNECT: 'disconnect',
    },
    EMIT: {
      HANDSHAKE: 'handshake',
      CREATE_GAME: 'game:create',
      USER_LEFT: 'game:player_left',
      PLAYER_JOINED: 'game:player_joined',
    },
  },
};
