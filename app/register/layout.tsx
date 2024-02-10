import React from 'react';

const layout = ({ children }: any) => {
  return <main className="flex flex-col items-center p-3 h-100">{children}</main>;
};

export default layout;
