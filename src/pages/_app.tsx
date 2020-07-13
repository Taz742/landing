import React from 'react';
import App from 'next/app';
import fetch from 'node-fetch';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@material-ui/styles';
// @ts-ignore
import NextNprogress from 'nextjs-progressbar';

import WithLocale from '@/components/with-locale';
import { Header, Footer } from '@/components';
import theme from '@/material/theme';
import { useGaTrackPage } from '@/hooks/ga-hook';
import { GlobalStyle } from '@/styled/global';
import config from '@/utils/config';
import { AppProvider } from '@/context/app-context';
import { isLocale } from '@/translations/types';

const RouterComponent: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => {
  const { asPath } = useRouter();
  if (typeof window !== 'undefined') {
    useGaTrackPage(asPath);
  }

  return (
    <div className="app-wrapper">
      {asPath !== '/' && <Header {...props} />}
      <div className="contents-wrapper">{children}</div>
      {asPath !== '/' && <Footer {...props} />}
    </div>
  );
};

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles!.parentNode!.removeChild(jssStyles);
    }
  }

  static async getInitialProps(ctx: any) {
    if (isLocale(ctx.router.query.lang)) {
      const res = await fetch(config.getDataUrl);
      const json = await res.json();
      return { pageProps: json };
    }
    return { pageProps: {} };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppProvider data={pageProps}>
        <NextNprogress color="#328af7" />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <RouterComponent {...pageProps}>
            <Component {...pageProps} />
          </RouterComponent>
        </ThemeProvider>
      </AppProvider>
    );
  }
}

export default WithLocale(MyApp);
