import '../styles/globals.css';
import { CartProvider } from '../context/CartContext';
import { useEffect } from 'react';

/**
 * Main App component that wraps all pages
 * Provides global context providers and handles app-wide functionality
 * 
 * @param {Object} props - Component props
 * @param {React.ComponentType} props.Component - The active page component
 * @param {Object} props.pageProps - Props passed to the page component
 * @returns {JSX.Element} The wrapped application
 */
export default function App({ Component, pageProps }) {
  // Handle client-side errors
  useEffect(() => {
    const handleError = (error) => {
      console.error('Application error:', error);
      // In production, you might want to send this to an error reporting service
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleError);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleError);
    };
  }, []);

  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
