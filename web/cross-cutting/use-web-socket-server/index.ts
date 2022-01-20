import { useCallback, useContext, useEffect } from 'react';
import { io } from 'socket.io-client';

import { UserContext } from '../../contexts/user';
import { EVENT_KEYS } from './enums';

type Player = {
  individualizer: string;
  name: string;
  hasVoted: boolean;
};

type RoomInfo = {
  id: string;
  admin: string;
  name: string;
  players: Player[];
};

type UserInfo = Player & {
  room: string;
};

type Params = {
  onRoomCreated?: (roomInfo: RoomInfo, userInfo: UserInfo) => void;
};

const socket = io(process.env.NEXT_PUBLIC_API_DOMAIN as string);

const useWebSocketServer = ({ onRoomCreated = () => {} }: Params = {}) => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    // TODO: pensar em como tratar erros
    socket.on(EVENT_KEYS.CONNECT, () => {
      console.log('SOCKET CONNECTED!');
    });

    socket.on(EVENT_KEYS.HANDSHAKE, (userId) => {
      setUser((prev) => ({
        ...prev,
        id: userId,
      }));
    });

    socket.on(EVENT_KEYS.CREATE_ROOM, onRoomCreated);
  }, []);

  const createRoom = useCallback((userName: string) => {
    return socket.emit(EVENT_KEYS.CREATE_ROOM, userName);
  }, []);

  return {
    connected: socket.connected,
    createRoom,
  } as const;
};

export default useWebSocketServer;
