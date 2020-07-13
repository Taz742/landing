import React from 'react';

import { LocaleContext } from '@/context/locale-context';
import config from '@/utils/config';

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
      const res = await fetch(`${config.getDataUrl}?lang=${locale}`);
      const json = await res.json();
      setData(json);
    };

    getData();
  }, [locale]);

  return <DataContext.Provider value={{ data: d }}>{children}</DataContext.Provider>;
};
