'use client';
import React from 'react';

import { ThemeProvider } from 'next-themes';

import AuthProvider from './AuthProvider';

const AppProviders = ({ children }: any) => {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
