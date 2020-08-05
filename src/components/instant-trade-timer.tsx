import React, { useEffect, useState, memo } from 'react';

import { SimpleTradeLine } from '@/styled';

const Timer = ({ setUpdate, sellType, text }: any) => {
  const loadTime = 90;
  const [time, setTime] = useState<number>(loadTime);

  function useInterval(callback: any, delay: number) {
    const savedCallback = React.useRef<any>();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }

      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    let timeVal = time;
    timeVal = timeVal - 0.1;
    setTime(timeVal);

    if (timeVal < 0) {
      setTime(loadTime);
      setUpdate((prev: any) => prev + 1);
    }
  }, 100);

  return (
    <SimpleTradeLine>
      <div className="line">
        <div
          style={{ width: `${(100 * (loadTime - time)) / loadTime}%` }}
          className={`active-line ${sellType === 'ASK' ? 'active-line-ask' : ''}`}
        />
      </div>
      <div className="line-data">
        <img src="/images/access_alarm.svg" />
        {text}
        {parseInt(time.toFixed(0)) > 60 ? (
          <span>
            {' '}
            {`0${(time / 60).toFixed(0)}:${parseInt((time - 60).toFixed(0)) <= 9 ? `0${(time - 60).toFixed(0)}` : (time - 60).toFixed(0)}`}
          </span>
        ) : (
          <span> 00:{parseInt(time.toFixed(0)) <= 9 ? `0${time.toFixed(0)}` : time.toFixed(0)}</span>
        )}
      </div>
    </SimpleTradeLine>
  );
};

export default memo(Timer);
