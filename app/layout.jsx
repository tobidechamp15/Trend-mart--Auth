import PropTypes from 'prop-types';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Trend Mart',
  description: 'Online Shopping for Electronics, Fashion, Home, Beauty & Sport',
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
