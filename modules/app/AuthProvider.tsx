import React from 'react';
import { createContext } from 'react';

export const Auth = createContext({});

const AuthProvider = ({ children }: any) => {
  const henlo = 'henlo';

  return <Auth.Provider value={{ henlo }}>{children}</Auth.Provider>;
};

export default AuthProvider;
