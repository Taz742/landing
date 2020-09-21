import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { getDisplayName } from 'next/dist/next-server/lib/utils';

import { Locale, isLocale } from '@/translations/types';
import { LocaleProvider } from '@/context/locale-context';
import { defaultLocale } from '@/translations/config';

interface LangProps {
  locale?: Locale;
}

const Wrapper = (WrappedPage: NextPage<any>) => {
  const WithLocale: NextPage<any, LangProps> = ({ locale, notFoundPage, ...pageProps }) => {
    const router = useRouter();

    if (!isLocale(router.query.lang as string) && router.asPath !== '/') {
      return (
        <LocaleProvider lang={locale}>
          <WrappedPage {...pageProps} notFoundPage={!isLocale(router.query.lang as string)} />
        </LocaleProvider>
      );
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
    if (typeof ctx.router.query.lang !== 'string') {
      return { ...pageProps, locale: defaultLocale, notFoundPage: !isLocale(ctx.router.query.lang) };
    }
    const l = isLocale(ctx.router.query.lang) ? ctx.router.query.lang : defaultLocale;
    return { ...pageProps, locale: l, notFoundPage: !isLocale(ctx.router.query.lang) };
  };

  WithLocale.displayName = `withLang(${getDisplayName(WrappedPage)})`;

  return WithLocale;
};

export default Wrapper;
