import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext();

export default UserContext;

export function UserProvider({ children }) {
  const [user, setUser] = useLocalStorage('@tajmahal-user', {});

  return (
    <UserContext.Provider
      value={{ user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
}
