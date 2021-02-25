import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { locales } from '@/translations/config';
import { LocaleContext } from '@/context/locale-context';
import { DataContext } from '@/context/app-context';
import { LanguageChangerWrapper } from '@/styled/pages';

const LocaleSwitcher: React.FC = () => {
  const router = useRouter();
  const { locale } = React.useContext(LocaleContext);
  const { getData } = React.useContext(DataContext);
  const [loading, setLoading] = React.useState(false);

  const handleLocaleChange = React.useCallback(
    async (lang: 'ka' | 'en') => {
      try {
        setLoading(true);
        await getData(lang);
        const regex = new RegExp(`^/(${locales.join('|')})`);
        router.push(router.pathname, router.asPath.replace(regex, `/${lang}`));
      } finally {
        setLoading(false);
      }
    },
    [router]
  );

  return (
    <LanguageChangerWrapper loading={loading ? 'true' : 'false'}>
      {['en'].includes(locale) && <img src="/ge.png" alt="en" onClick={() => handleLocaleChange('ka')} />}
      {['ka'].includes(locale) && <img src="/en.png" alt="ge" onClick={() => handleLocaleChange('en')} />}
    </LanguageChangerWrapper>
  );
};

export default LocaleSwitcher;
