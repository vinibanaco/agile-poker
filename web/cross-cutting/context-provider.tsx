import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import { UserContext } from '../contexts/user';
import type { User } from '../contexts/user';
import { RoomContext } from '../contexts/room';
import type { Room } from '../contexts/room';

export default function ContextProvider({ children }: { children: ReactNode }) {
  // user context
  const [user, setUser] = useState<User>({});

  const userContextValue = useMemo(() => {
    return { user, setUser };
  }, [user]);

  // room context
  const [room, setRoom] = useState<Room>({});

  const roomContextValue = useMemo(() => {
    return { room, setRoom };
  }, [room]);

  return (
    <UserContext.Provider value={userContextValue}>
      <RoomContext.Provider value={roomContextValue}>{children}</RoomContext.Provider>
    </UserContext.Provider>
  );
}
