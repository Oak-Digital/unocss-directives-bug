import React from 'react';
import '@unocss/reset/tailwind.css';
import 'uno.css';

import { AppProps } from 'next/app';

// eslint-disable-next-line react/display-name
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

MyApp.displayName = 'Test';

export default MyApp;
