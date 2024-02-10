import React, { createContext } from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({ children }: any) => {
  const henlo = 'henlo';

  return <AuthContext.Provider value={{ henlo }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
