import React, { useEffect, useState } from 'react';
import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import {
  Container,
  OtcComp,
  RegisterButton,
  TopCoins,
  TopCoinItem,
  TopCointLastTradePrice,
  TopCoinBaseVolume,
  TopCoinPricePercent,
  WhyComp,
  SolutionsBox,
  SolutionItem,
  CoinsComp,
  CoinsBox,
  CoinItem,
  SimpleTrade,
  SimpleTradeLine,
  SimpleTradeTop
} from '@/styled';
import { H1, H2, H5, Subtext, H3 } from '@/styled/typography';
import { PageHeader } from '@/styled/pages';
import config from '@/utils/config';
import NumberFormat from 'react-number-format';
import useBreakpoint from '@/hooks/use-breakpoints';
import useTranslation from '@/hooks/useTranslation';
import { DataContext } from '@/context/app-context';

const loadTime = 90;

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

const IndexPage = (_props: any) => {
  const { data } = React.useContext(DataContext);
  const page = data.pages['home'];
  const [pairs, setPairs] = useState<any>({
    GEL: [],
    USD: []
  });
  const [allCurencies, setAllCurencies] = useState<string[]>([]);
  const [currency, setCurrency] = useState('');
  const [coin, setCoin] = useState<any>({});
  const [trades, setTrades] = useState<any>({
    GEL: [],
    USD: []
  });
  const [coinsList, setCoinsList] = useState<any>([]);
  const [activeDropDown, setDropDown] = useState(false);
  const [sellType, setSellType] = useState<'BID' | 'ASK'>('BID');
  const [sizeVal, setSize] = useState<number | undefined>();
  const [priceVal, setPrice] = useState<number | undefined>();
  const [time, setTime] = useState<number>(loadTime);
  const [update, setUpdate] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const breakpoint = useBreakpoint();
  const { t } = useTranslation();

  const getData = async () => {
    const pairsResponse: any[] = await (await fetch(`${config.exchangeApi}public/ticker`)).json();
    const gelPairs = pairsResponse.filter((item) => item.pair.endsWith('-GEL'));
    const usdPairs = pairsResponse.filter((item) => item.pair.endsWith('-USD'));
    setPairs({
      GEL: gelPairs,
      USD: usdPairs
    });

    if (!initialized) {
      setInitialized(true);

      const offers = await (await fetch(`${config.exchangeApi}private/simpleTrade/offers`)).json();
      const currencies = Object.keys(offers);
      setAllCurencies(currencies);
      setCurrency(currencies[0]);
      const currentCurrency = currency || currencies[0];

      setCoin({
        index: 0,
        buyPrice: offers[currentCurrency][0].buyPrice,
        sellPrice: offers[currentCurrency][0].sellPrice,
        baseScale: offers[currentCurrency][0].pair.baseScale,
        coin: offers[currentCurrency][0].pair.baseCurrency
      });
      setTrades(offers);
      let lists: any[] = [];
      offers[currentCurrency].forEach((item: any, index: number) => {
        lists.push({
          index: index,
          buyPrice: item.buyPrice,
          sellPrice: item.sellPrice,
          baseScale: item.pair.baseScale,
          coin: item.pair.baseCurrency
        });
      });
      setCoinsList(lists);
    }
  };

  useInterval(() => {
    let timeVal = time;
    timeVal = timeVal - 0.1;
    setTime(timeVal);

    if (timeVal < 0) {
      setTime(loadTime);
      setUpdate(update + 1);
    }
  }, 100);

  useEffect(() => {
    getData();
  }, [update]);

  const getImage = (baseCurrency: string) => {
    baseCurrency = baseCurrency.substr(0, baseCurrency.indexOf('-'));
    return `${config.exchangeBaseUrl}/icons/SVG/${baseCurrency.toLowerCase()}.svg`;
  };

  const changeCurrency = () => {
    const index = allCurencies.indexOf(currency);
    if (allCurencies[index + 1]) {
      setCurrency(allCurencies[index + 1]);
    } else {
      setCurrency(allCurencies[0]);
    }
  };

  const redirect = (size: any, price: any) => {
    if (!size && !price) {
      size = sizeVal;
      price = priceVal;
    }
    const url = `${config.targetWebsite}instant-trade?size=${size}&price=${price}&type=${sellType}&coint=${coin.coin}&currency=${currency}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <CustomHead title="GEX" page="" description={page?.why?.why_content} />
      <Layout>
        <PageHeader />
        <OtcComp>
          <Container>
            <Container maxWidth={['xs', 'sm'].includes(breakpoint) ? '100%' : '75%'} style={{ padding: 0 }}>
              <H1 style={{ color: '#FFFFFF' }}>{page?.hero?.hero_sub_title || 'Highest Liquidity Crypto Exchange in the Region'}</H1>
              <a href={`${config.targetWebsite}?register=true`} target="_blank" rel="noopener">
                <RegisterButton>
                  <span>{t('register')}</span>
                </RegisterButton>
              </a>
            </Container>

            {currency && (
              <TopCoins className="flex-container">
                {pairs[currency].map((item: any, index: number) => (
                  <TopCoinItem key={index}>
                    <img src={getImage(item.pair)} />
                    <TopCointLastTradePrice>
                      {currency === 'GEL' ? <>&#8382;</> : '$'} {item.lastTradePrice}
                    </TopCointLastTradePrice>
                    <TopCoinBaseVolume>
                      {currency === 'GEL' ? <>&#8382;</> : '$'} {item.baseVolume} <span>24 H</span>
                    </TopCoinBaseVolume>
                    <TopCoinPricePercent>
                      <img src="/images/Arrow.svg" />
                      {item.priceChange}%
                    </TopCoinPricePercent>
                  </TopCoinItem>
                ))}
              </TopCoins>
            )}
          </Container>
        </OtcComp>

        <Container>
          <SimpleTrade>
            <SimpleTradeTop style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 25 }}>
              <H3>{t('simple_trade')}</H3>
              <div className="trade-right">
                <div
                  onMouseEnter={() => setDropDown(true)}
                  onMouseLeave={() => setDropDown(false)}
                  className={activeDropDown ? 'active coin' : 'coin'}
                >
                  <div className="active-coin">
                    {coin.coin} - {currency}
                    <img src="/images/dropdown.svg" />
                  </div>
                  <div className="coin-list-dropdown">
                    {coinsList.map((item: any, index: number) => (
                      <p
                        key={index}
                        onClick={() => {
                          setCoin(item);
                          setDropDown(false);
                        }}
                      >
                        {item.coin}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="currency">
                  <span className="left" onClick={() => changeCurrency()}></span>
                  <span className="value">{currency}</span>
                  <span className="right" onClick={() => changeCurrency()}></span>
                </div>
              </div>
            </SimpleTradeTop>

            <div className="tabs">
              <button onClick={() => setSellType('BID')} className={sellType === 'BID' ? 'active' : ''}>
                {t('buy')} {coin.coin}
              </button>
              <button onClick={() => setSellType('ASK')} className={sellType !== 'BID' ? 'active' : ''}>
                {t('sell')} {coin.coin}
              </button>
            </div>

            <div className="tabs-list">
              {trades &&
                currency &&
                trades[currency].length > 0 &&
                trades[currency][coin.index]['offerEntriesMap'][sellType].map((item: any, index: number) => (
                  <div key={index} className="tab-coin">
                    {sellType === 'BID' ? (
                      <>
                        <p>
                          {t('if_you_buy_now')}
                          <span>{`${t('receive')} ${item.size} ${coin.coin}`}</span>
                        </p>
                        <h4>
                          {item.price} <span>{currency}</span>
                        </h4>
                      </>
                    ) : (
                        <>
                          <p>
                            {t('if_you_sell_now')}
                            <span>{`${t('spend')} ${item.size} ${coin.coin}`}</span>
                          </p>
                          <h4>
                            {item.price} <span>{currency}</span>
                          </h4>
                        </>
                      )}
                    <button onClick={() => redirect(item.size, item.price)}>{sellType === 'BID' ? t('buy_now') : t('sell_now')}</button>
                  </div>
                ))}
              <div className="tab-coin">
                <p>
                  {t('enter_amount_you')}
                  <span>{sellType === 'BID' ? t('want_to_buy') : t('want_to_sell')}</span>
                </p>
                <div className="inputs">
                  <NumberFormat
                    decimalScale={2}
                    value={priceVal}
                    onChange={(e: any) => {
                      setPrice(e.target.value);
                      let newSize = 0;
                      if (sellType === 'BID') {
                        newSize = Number(e.target.value / coin.buyPrice);
                      } else {
                        newSize = Number(e.target.value / coin.sellPrice);
                      }
                      setSize(newSize);
                    }}
                    placeholder={t('enter_price')}
                  />
                  <NumberFormat
                    decimalScale={coin.baseScale}
                    value={sizeVal}
                    onChange={(e: any) => {
                      setSize(e.target.value);
                      let newSize = 0;
                      if (sellType === 'BID') {
                        newSize = Number(e.target.value * coin.buyPrice);
                      } else {
                        newSize = Number(e.target.value * coin.sellPrice);
                      }
                      setPrice(newSize);
                    }}
                    placeholder={t('enter_amount')}
                  />
                </div>
                <button onClick={() => redirect(null, null)} style={{ marginTop: 10 }}>
                  {sellType === 'BID' ? t('buy_now') : t('sell_now')}
                </button>
              </div>
            </div>
          </SimpleTrade>
          <SimpleTradeLine>
            <div className="line">
              <div
                style={{ width: `${(100 * (loadTime - time)) / loadTime}%` }}
                className={`active-line ${sellType === 'ASK' ? 'active-line-ask' : ''}`}
              />
            </div>
            <div className="line-data">
              <img src="/images/access_alarm.svg" />
              {t('price_change_in')}
              {parseInt(time.toFixed(0)) > 60 ? (
                <span>
                  {' '}
                  {`0${(time / 60).toFixed(0)}:${
                    parseInt((time - 60).toFixed(0)) <= 9 ? `0${(time - 60).toFixed(0)}` : (time - 60).toFixed(0)
                    }`}
                </span>
              ) : (
                  <span> 00:{parseInt(time.toFixed(0)) <= 9 ? `0${time.toFixed(0)}` : time.toFixed(0)}</span>
                )}
            </div>
          </SimpleTradeLine>
        </Container>

        <WhyComp>
          <Container>
            <H2 style={{ color: '#FFFFFF' }}>{t('why_choose_us')}</H2>
            <SolutionsBox className="items flex-container">
              {(page?.solutions?.solutions || []).map((item: any, index: number) => (
                <SolutionItem className="item" key={index}>
                  <img src={item.sol_file} />
                  <H5>{item.sol_title}</H5>
                  <Subtext align={breakpoint === 'md' || breakpoint === 'lg' ? 'left' : 'center'}>{item.sol_text}</Subtext>
                </SolutionItem>
              ))}
            </SolutionsBox>
          </Container>
        </WhyComp>

        <CoinsComp>
          <Container>
            <H2>{page?.advantages?.adv_title}</H2>
            <CoinsBox className="items">
              {(page?.advantages?.advantages || []).map((item: any, index: number) => (
                <CoinItem className="item" key={index}>
                  <img src={item.sol_file || ''} />
                  <H5 style={{ marginTop: 15 }}>
                    {item.sol_title}
                    <br />
                  </H5>
                </CoinItem>
              ))}
            </CoinsBox>
          </Container>
        </CoinsComp>
      </Layout>
    </>
  );
};

export default IndexPage;
