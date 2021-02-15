import React from 'react';

import { getInitialLocale } from '@/translations/get-initial-locale';
import config from '@/utils/config';
import { DataContext } from '@/context/app-context';
import { CustomHead } from '@/components/custom-head';

const Index: React.FC = () => {
  const { data } = React.useContext(DataContext);
  const page: any = data.pages['home'] || {};

  const url = `${config.url}/en`;

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace(`/${getInitialLocale()}`);
    }
  }, []);

  return (
    <>
      <CustomHead title={page.title.title} page="" description={page.title.description} seo={page.seo} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </>
  );
};

export default Index;
