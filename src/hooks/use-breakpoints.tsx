import { useState, useEffect } from 'react';

const getDeviceConfig = (width: number) => {
  if (width < 320) {
    return 'xs';
  } else if (width >= 320 && width < 720) {
    return 'sm';
  } else if (width >= 720 && width < 1024) {
    return 'md';
  } else {
    return 'lg';
  }
};

const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState<'xs' | 'sm' | 'md' | 'lg'>('lg');

  useEffect(() => {
    const calcInnerWidth = () => setBrkPnt(getDeviceConfig(window.innerWidth));
    window.addEventListener('resize', calcInnerWidth);

    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return brkPnt;
}
export default useBreakpoint;
