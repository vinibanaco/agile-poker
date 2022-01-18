import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export type User = {
  id?: string;
  name?: string;
};

export type UserContextValue = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

export const UserContext = createContext<UserContextValue>({
  user: {},
  setUser: () => {},
});
