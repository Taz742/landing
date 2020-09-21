import React from 'react';
import App from 'next/app';
import fetch from 'node-fetch';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@material-ui/styles';
// @ts-ignore
import NextNprogress from 'nextjs-progressbar';

import WithLocale from '@/components/with-locale';
import CookiePopup from '@/components/cookie-popup';
import MessengerChat from '@/components/messenger-chat';
import { Header, Footer } from '@/components';
import theme from '@/material/theme';
import { useGaTrackPage } from '@/hooks/ga-hook';
import { GlobalStyle } from '@/styled/global';
import config from '@/utils/config';
import { AppProvider } from '@/context/app-context';
import { isLocale } from '@/translations/types';
import data from '@/utils/data';
import { defaultLocale } from '@/translations/config';

const RouterComponent: React.FC<{ children: React.ReactNode; notFoundPage: boolean }> = ({ children, notFoundPage, ...props }) => {
  const isDev = process.env.NODE_ENV !== 'production';
  const { asPath } = useRouter();
  if (typeof window !== 'undefined') {
    useGaTrackPage(asPath);
  }

  return (
    <div className="app-wrapper">
      {asPath !== '/' && <Header {...props} notFoundPage={notFoundPage} />}
      <div className="contents-wrapper">{children}</div>
      {asPath !== '/' && <Footer {...props} />}
      <CookiePopup />
      {!isDev && <MessengerChat />}
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
    const lang = ctx.router.query.lang;
    const language = isLocale(lang) ? lang : defaultLocale;

    if (ctx.ctx?.req) {
      const endpoint = '/index.php?rest_route=/getGeneralData/get';
      const dataUrl = language === 'en' ? `${config.getDataUrl}${endpoint}` : `${config.getDataUrl}/${language}${endpoint}`;
      const res = await fetch(dataUrl);
      const json = await res.json();
      return { pageProps: { pages: json, menu: data[language].headerMenu, static: data[language] } };
    }
    return { pageProps: {} };
  }

  render() {
    const { Component, pageProps, notFoundPage }: any = this.props;

    return (
      <AppProvider data={pageProps}>
        <NextNprogress color="#0ECBFD" />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <RouterComponent {...pageProps} notFoundPage={notFoundPage}>
            <Component {...pageProps} notFoundPage={notFoundPage} />
          </RouterComponent>
        </ThemeProvider>
      </AppProvider>
    );
  }
}

export default WithLocale(MyApp);
