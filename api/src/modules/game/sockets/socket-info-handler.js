'use strict';

/* eslint-disable security/detect-object-injection */

const { v4: uuidv4 } = require('uuid');

const sockets = {};
const rooms = {};

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
    return rooms[roomId];
  },
  joinRoom: (roomId, socketId) => {
    sockets[socketId].room = roomId;
    sockets[socketId].socket.join(roomId);
    rooms[roomId].sockets.push(handler.getSocketById(socketId));
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
