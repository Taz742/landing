import React from 'react';

import { LocaleContext } from '@/context/locale-context';
import config from '@/utils/config';
import TempData from '@/utils/data';

interface ContextProps {
  readonly data: Record<string, any>;
}

export const DataContext = React.createContext<ContextProps>({
  data: {}
});

export const AppProvider = ({ children, data }: any) => {
  const [init, setInitialized] = React.useState(false);
  const [d, setData] = React.useState(data);
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    if (!init) {
      setInitialized(true);
      return;
    }

    const getData = async () => {
      const endpoint = '/index.php?rest_route=/getGeneralData/get';
      const dataUrl = locale === 'en' ? `${config.getDataUrl}${endpoint}` : `${config.getDataUrl}/${locale}${endpoint}`;
      const res = await fetch(dataUrl);
      const json = await res.json();
      setData({ pages: json, menu: TempData[locale].headerMenu, static: TempData[locale] });
    };

    getData();
  }, [locale]);

  return <DataContext.Provider value={{ data: d }}>{children}</DataContext.Provider>;
};
