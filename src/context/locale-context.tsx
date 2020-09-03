import React from 'react';
import { useRouter } from 'next/router';

import { Locale, isLocale } from '@/translations/types';
import Cookie from '@/utils/cookie';
import config from '@/utils/config';

interface ContextProps {
  readonly locale: Locale;
  readonly setLocale: (locale: Locale) => void;
}

export const LocaleContext = React.createContext<ContextProps>({
  locale: 'en',
  setLocale: () => null
});

export const LocaleProvider: React.FC<{ lang: Locale }> = ({ lang, children }) => {
  const [locale, setLocale] = React.useState(lang);
  const { query } = useRouter();
  const opts = { path: '/', domain: config.localeCookieUrl };

  React.useEffect(() => {
    if (locale !== localStorage.getItem('locale')) {
      localStorage.setItem('locale', locale);
    }
    Cookie.set('KEYCLOAK_LOCALE', locale === 'ka' ? 'ka-GE' : 'en-US', opts);
  }, [locale]);

  React.useEffect(() => {
    if (typeof query.lang === 'string' && isLocale(query.lang) && locale !== query.lang) {
      setLocale(query.lang);
      Cookie.set('KEYCLOAK_LOCALE', locale === 'ka' ? 'ka-GE' : 'en-US', opts);
    }
  }, [query.lang, locale]);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
};
