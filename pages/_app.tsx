import '../styles/globals.css';
//import '../styles/custom.css'; // Add this line
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;