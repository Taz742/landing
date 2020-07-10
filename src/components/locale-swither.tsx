import React from 'react';
import { useRouter } from 'next/router';

import { locales } from '@/translations/config';
import { LocaleContext } from '@/context/locale-context';
import { LanguageChangerWrapper } from '@/styled/pages';

const LocaleSwitcher: React.FC = () => {
  const router = useRouter();
  const { locale } = React.useContext(LocaleContext);

  const handleLocaleChange = React.useCallback(
    (lang: 'ka' | 'en') => {
      const regex = new RegExp(`^/(${locales.join('|')})`);
      router.push(router.pathname, router.asPath.replace(regex, `/${lang}`));
    },
    [router]
  );

  return (
    <LanguageChangerWrapper>
      {['en'].includes(locale) && <img src="/en.png" alt="en" onClick={() => handleLocaleChange('ka')} />}
      {['ka'].includes(locale) && <img src="/ge.png" alt="ge" onClick={() => handleLocaleChange('en')} />}
    </LanguageChangerWrapper>
  );
};

export default LocaleSwitcher;
