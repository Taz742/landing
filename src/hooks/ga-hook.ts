import { useEffect } from 'react';
import ReactGA from 'react-ga';

const gaTrackingId = process.env.gaTrackingId as string;
if (gaTrackingId && process.env.NODE_ENV === 'production') ReactGA.initialize(gaTrackingId);

export const useGaTrackPage = (path: string) => {
  useEffect(() => {
    if (gaTrackingId && process.env.NODE_ENV === 'production') ReactGA.pageview(path);
  }, [path]);
};
