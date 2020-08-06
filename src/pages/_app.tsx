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
      <CookiePopup />
      <MessengerChat />
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
    if (isLocale(lang)) {
      const endpoint = '/index.php?rest_route=/getGeneralData/get';
      const dataUrl = lang === 'en' ? `${config.getDataUrl}${endpoint}` : `${config.getDataUrl}/${lang}${endpoint}`;
      const res = await fetch(dataUrl);
      const json = await res.json();
      // const menuUrl = lang === 'en' ? config.getMenuUrl : `${config.getMenuUrl}?lang=${lang}`;
      // const resMenu = await fetch(menuUrl);
      // const jsonMenu = await resMenu.json();
      return { pageProps: { pages: json, menu: data[lang].headerMenu, static: data[lang] } };
    }
    return { pageProps: {} };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppProvider data={pageProps}>
        <NextNprogress color="#0ECBFD" />
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
