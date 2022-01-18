import '../styles/globals.css';
import type { AppProps } from 'next/app';

import ContextProvider from '../cross-cutting/context-provider';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ContextProvider>
  );
}
