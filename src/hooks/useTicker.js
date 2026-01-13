import { useEffect, useState } from 'react';

const useTicker = (tickers) => {
  const [ticker, setTicker] = useState(0);

  // Set up the interval.
  useEffect(() => {
    const interval = setInterval(() => {
      setTicker(ticker === tickers.length - 1 ? 0 : ticker + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [ticker, tickers.length]); /// <--- this right here

  return {
    tickers,
    ticker
  };
};

export default useTicker;
