import React from 'react';
import AuthProvider from './AuthProvider';

const AppProviders = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProviders;
