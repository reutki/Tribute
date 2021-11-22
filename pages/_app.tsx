import React, { useEffect, FC } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import  {theme} from './theme';
import { EmotionCache } from '@emotion/cache';
import createEmotionCache from './createEmotionCache';

import { CacheProvider } from '@emotion/react';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  // eslint-disable-next-line react/require-default-props
  emotionCache?: EmotionCache;
}

const App: FC<MyAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {


  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
              <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;