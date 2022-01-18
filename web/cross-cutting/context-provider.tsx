import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import { UserContext } from '../contexts/user';
import type { User } from '../contexts/user';

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({});

  const userContextValue = useMemo(() => {
    return { user, setUser };
  }, [user]);

  return <UserContext.Provider value={userContextValue}>{children}</UserContext.Provider>;
}
