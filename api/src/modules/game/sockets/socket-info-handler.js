'use strict';

/* eslint-disable security/detect-object-injection */

const { v4: uuidv4 } = require('uuid');

const sockets = {};
const rooms = {};

let leaveRoomLock = null;
// TODO: error handling
const handler = {
  newConnection: (socket) => {
    sockets[socket.id] = {
      individualizer: uuidv4(), // used to recognize this user on client side and for logs
      name: '',
      hasVoted: false,
      room: null,
      socket,
    };
    return sockets[socket.id];
  },
  getSocketById: (socketId) => {
    const { individualizer, name, room, hasVoted } = sockets[socketId];
    return { individualizer, name, room, hasVoted };
  },
  getSocketByIndividualizer: () => {
    // TODO
  },
  changeSocketName: (socketId, name) => {
    sockets[socketId].name = `${name}`;
  },
  addRoom: (name = '') => {
    const roomId = uuidv4();
    rooms[roomId] = {
      id: roomId,
      name,
      admin: null,
      sockets: [],
    };
    return roomId;
  },
  getRoomById: (roomId) => {
    if (rooms[roomId]) {
      return JSON.parse(JSON.stringify(rooms[roomId]));
    }
    return null;
  },
  getRoomByIdUserFriendly: (roomId) => {
    const roomInfo = handler.getRoomById(roomId);
    roomInfo.players = roomInfo.sockets.map((info) => {
      const playerInfo = { ...info };
      delete playerInfo.room;
      return playerInfo;
    });
    delete roomInfo.sockets;

    return roomInfo;
  },
  joinRoom: (roomId, socketId) => {
    sockets[socketId].room = roomId;
    sockets[socketId].socket.join(roomId);
    rooms[roomId].sockets.push(handler.getSocketById(socketId));
  },
  leaveRoom: async (socketId) => {
    if (leaveRoomLock) {
      await leaveRoomLock;
    }
    leaveRoomLock = new Promise((resolve) => {
      const { individualizer, room: roomId } = sockets[socketId];

      const newArray = rooms[roomId].sockets.filter(
        (socketInfo) => socketInfo.individualizer !== individualizer,
      );
      if (newArray.length === 0) {
        delete rooms[roomId];
      } else {
        rooms[roomId].sockets = newArray;
      }
      resolve();
    });
  },
  getRoomMembers: (roomId) => {
    return rooms[roomId].sockets;
  },
  changeRoomName: (roomId, name = '') => {
    rooms[roomId].name = `${name}`;
  },
  changeRoomAdmin: (roomId, socketId) => {
    rooms[roomId].admin = sockets[socketId].individualizer;
  },
};

module.exports = handler;
