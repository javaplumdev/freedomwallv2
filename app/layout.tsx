import './globals.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cyberpunk">
      <body>{children}</body>
    </html>
  );
}
