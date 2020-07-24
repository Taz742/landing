import { useEffect, useContext } from 'react';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';

import { DataContext } from '@/context/app-context';

const gaTrackingId = process.env.gaTrackingId as string;
if (gaTrackingId && process.env.NODE_ENV === 'production') ReactGA.initialize(gaTrackingId);

export const useGaTrackPage = (path: string) => {
  const { data } = useContext(DataContext);
  const extra = data.pages.extra;

  useEffect(() => {
    if (gaTrackingId && process.env.NODE_ENV === 'production') ReactGA.pageview(path);
    if (extra.gtm && process.env.NODE_ENV === 'production') TagManager.initialize({ gtmId: `GTM-${extra.gtm}` });
  }, [path]);
};
