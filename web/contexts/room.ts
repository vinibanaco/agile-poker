import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export type Room = {
  id?: string;
  name?: string;
  admin?: string;
  players?: {
    individualizer: string;
    name: string;
    hasVoted: boolean;
  }[];
};

export type RoomContextValue = {
  room: Room;
  setRoom: Dispatch<SetStateAction<Room>>;
};

export const RoomContext = createContext<RoomContextValue>({
  room: {},
  setRoom: () => {},
});
