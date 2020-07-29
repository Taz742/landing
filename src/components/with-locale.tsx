import React from 'react';
import { NextPage } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { getDisplayName } from 'next/dist/next-server/lib/utils';

import { Locale, isLocale } from '@/translations/types';
import { LocaleProvider } from '@/context/locale-context';

interface LangProps {
  locale?: Locale;
}

const Wrapper = (WrappedPage: NextPage<any>) => {
  const WithLocale: NextPage<any, LangProps> = ({ locale, ...pageProps }) => {
    const router = useRouter();

    if (!locale && router.asPath !== '/') {
      return <Error statusCode={404} />;
    }

    return (
      <LocaleProvider lang={locale}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    );
  };

  WithLocale.getInitialProps = async (ctx: any) => {
    let pageProps = {};
    if (WrappedPage.getInitialProps) {
      pageProps = await WrappedPage.getInitialProps(ctx);
    }
    if (typeof ctx.router.query.lang !== 'string' || !isLocale(ctx.router.query.lang)) {
      return { ...pageProps, locale: undefined };
    }
    return { ...pageProps, locale: ctx.router.query.lang };
  };

  WithLocale.displayName = `withLang(${getDisplayName(WrappedPage)})`;

  return WithLocale;
};

export default Wrapper;
