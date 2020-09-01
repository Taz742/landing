import React from 'react';

import { LocaleContext } from '@/context/locale-context';
import config from '@/utils/config';
import TempData from '@/utils/data';

interface ContextProps {
  data: Record<string, any>;
  getData: (lang?: 'ka' | 'en') => Promise<void>;
}

export const DataContext = React.createContext<ContextProps>({
  data: {},
  getData: () => Promise.resolve()
});

export const AppProvider = ({ children, data }: any) => {
  const [d, setData] = React.useState(data);
  const { locale } = React.useContext(LocaleContext);

  const getData = async (lang?: 'ka' | 'en') => {
    const lng = lang || locale;
    const endpoint = '/index.php?rest_route=/getGeneralData/get';
    const dataUrl = lng === 'en' ? `${config.getDataUrl}${endpoint}` : `${config.getDataUrl}/${lng}${endpoint}`;
    const res = await fetch(dataUrl);
    const json = await res.json();
    setData({ pages: json, menu: TempData[lng].headerMenu, static: TempData[lng] });
  };

  return <DataContext.Provider value={{ data: d, getData }}>{children}</DataContext.Provider>;
};
