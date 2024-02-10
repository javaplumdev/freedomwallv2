import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Metadata } from 'next';
import AppProviders from '@/modules/app/AppProviders';
import Toast from '@/components/toast/Toast';

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
      <body>
        <AppProviders>
          {children}
          <Toast />
        </AppProviders>
      </body>
    </html>
  );
}
