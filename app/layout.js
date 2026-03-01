import '../styles/globals.css';
import Navbar from '../components/Navbar';
import LenisProvider from '../components/LenisProvider';
import SEO from '../components/SEO';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <SEO />
      </head>
      <body>
        <LenisProvider>
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
