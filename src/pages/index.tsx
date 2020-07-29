import React from 'react';
import Head from 'next/head';

import { getInitialLocale } from '@/translations/get-initial-locale';
import config from '@/utils/config';

const Index: React.FC = () => {
  const url = `${config.url}/en`;

  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`);
  }, []);

  return (
    <Head>
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default Index;
