// pages/_app.tsx
import '../styles/styles.css'; // Import global CSS here
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
