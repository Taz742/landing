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
  SimpleTradeTop
} from '@/styled';
import { H1, H2, H5, Subtext } from '@/styled/typography';
import { PageHeader } from '@/styled/pages';
import config from '@/utils/config';
import NumberFormat from 'react-number-format';
import useBreakpoint from '@/hooks/use-breakpoints';
import useTranslation from '@/hooks/useTranslation';
import { DataContext } from '@/context/app-context';
import Timer from '@/components/instant-trade-timer';
import ErrorPage from '@/pages/404';

const Arrow: React.FC<{ ltZero: boolean }> = ({ ltZero }): JSX.Element => {
  return (
    <svg
      style={{ transform: `rotate(${ltZero ? '180deg' : '0deg'})` }}
      xmlns="http://www.w3.org/2000/svg"
      width="5.835"
      height="11.51"
      viewBox="0 0 5.835 11.51"
    >
      <defs></defs>
      <path
        style={{ fill: `${ltZero ? 'red' : '#06b787'}` }}
        d="M3.342,5.388V3.8h7.282a.886.886,0,0,0,0-1.772H3.342V.444a.439.439,0,0,0-.753-.31L.126,2.606a.455.455,0,0,0,0,.629L2.589,5.707A.443.443,0,0,0,3.342,5.388Z"
        transform="translate(5.835) rotate(90)"
      />
    </svg>
  );
};

const IndexPage = ({ notFoundPage }: any) => {
  const { data } = React.useContext(DataContext);
  const page: any = data.pages['home'] || {};
  const InstantTrade: any = page.InstantTrade || {};
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
  const [update, setUpdate] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const breakpoint = useBreakpoint();
  const { locale } = useTranslation();

  const getData = async () => {
    const pairsResponse: any[] = await (await fetch(`${config.exchangeApi}public/ticker`)).json();
    const gelPairs = pairsResponse.filter((item) => item.pair.endsWith('-GEL'));
    const usdPairs = pairsResponse.filter((item) => item.pair.endsWith('-USD'));
    setPairs({ GEL: gelPairs, USD: usdPairs });

    const offers = await (await fetch(`${config.exchangeApi}private/simpleTrade/offers`)).json();
    setTrades(offers);

    if (!initialized) {
      setInitialized(true);

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

  useEffect(() => {
    getData();
  }, [update]);

  const getImage = (baseCurrency: string) => {
    baseCurrency = baseCurrency.substr(0, baseCurrency.indexOf('-'));
    return `${config.exchangeBaseUrl}/icons/SVG/${baseCurrency.toLowerCase()}.svg`;
  };

  const changeCurrency = () => {
    const index = allCurencies.indexOf(currency);
    const selected = allCurencies[index + 1];
    const curr = selected || allCurencies[0];

    setCurrency(curr);
    let lists: any[] = [];
    trades[curr].forEach((item: any, index: number) => {
      lists.push({
        index: index,
        buyPrice: item.buyPrice,
        sellPrice: item.sellPrice,
        baseScale: item.pair.baseScale,
        coin: item.pair.baseCurrency
      });
    });
    setCoinsList(lists);
    const c = lists.find((c) => c.coin === coin.coin);
    if (c) setCoin(c);
  };

  const redirect = (size: any, price: any) => {
    if (!size && !price) {
      size = sizeVal;
      price = priceVal;
    }
    const url = `${config.targetWebsite}instant-trade?size=${size}&price=${price}&type=${sellType}&coint=${coin.coin}&currency=${currency}&lang=${locale}`;
    window.open(url, '_blank');
  };

  if (notFoundPage) return <ErrorPage />;

  return (
    <>
      <CustomHead title={page.title.title} page="" description={page.title.description} />
      <Layout>
        <PageHeader />
        <OtcComp>
          <Container>
            <Container maxWidth={['xs', 'sm'].includes(breakpoint) ? '100%' : '75%'} style={{ padding: 0 }}>
              <H1 locale={locale} style={{ color: '#FFFFFF', fontSize: 44 }}>
                {page.title.description || 'Highest Liquidity Crypto Exchange in the Region'}
              </H1>
              <a href={`${config.targetWebsite}?register=true&lang=${locale}`} target="_blank" rel="noopener">
                <RegisterButton>
                  <span>{page.title.Button}</span>
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
                      {item.baseVolume} <span>24 H</span>
                    </TopCoinBaseVolume>
                    <TopCoinPricePercent ltZero={parseFloat(item.priceChange) < 0}>
                      <Arrow ltZero={parseFloat(item.priceChange) < 0} />
                      <span>{item.priceChange}%</span>
                    </TopCoinPricePercent>
                  </TopCoinItem>
                ))}
              </TopCoins>
            )}
          </Container>
        </OtcComp>

        <Container>
          <SimpleTrade locale={locale}>
            <SimpleTradeTop style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 25 }}>
              <H2 style={{ fontSize: 44 }}>{page.InstantTrade?.title}</H2>
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
              <button onClick={() => setSellType('BID')} className={sellType === 'BID' ? 'tab-bid active' : 'tab-bid'}>
                {InstantTrade?.ButtonTop[0]} {coin.coin}
              </button>
              <button onClick={() => setSellType('ASK')} className={sellType !== 'BID' ? 'tab-sell active' : 'tab-sell'}>
                {InstantTrade?.ButtonTop[1]} {coin.coin}
              </button>
            </div>

            <div className="tabs-list">
              {trades &&
                currency &&
                trades[currency].length > 0 &&
                trades[currency][coin.index] &&
                trades[currency][coin.index]['offerEntriesMap'][sellType].map((item: any, index: number) => (
                  <div key={index} className="tab-coin">
                    {sellType === 'BID' ? (
                      <>
                        <p>
                          {InstantTrade?.BuyCardText[0]}
                          <span>{`${InstantTrade?.BuyCardText[1]} ${item.size} ${coin.coin}`}</span>
                        </p>
                        <h4>
                          {Number.parseInt(item.price)}
                          <span>{currency}</span>
                        </h4>
                      </>
                    ) : (
                      <>
                        <p>
                          {InstantTrade?.SellCardText[0]}
                          <span>{`${InstantTrade?.SellCardText[1]} ${item.size} ${coin.coin}`}</span>
                        </p>
                        <h4>
                          {Number.parseInt(item.price)}
                          <span>{currency}</span>
                        </h4>
                      </>
                    )}
                    <button onClick={() => redirect(item.size, item.price)}>
                      {sellType === 'BID' ? InstantTrade?.ButtonBottom[0] : InstantTrade?.ButtonBottom[1]}
                    </button>
                  </div>
                ))}
              <div className="tab-coin">
                <p>
                  {sellType === 'BID' ? InstantTrade?.Custom?.CustomBuy?.CustomTop : InstantTrade?.Custom?.CustomSell?.CustomTop}
                  <span>
                    {sellType === 'BID' ? InstantTrade?.Custom?.CustomBuy?.CustomBottom : InstantTrade?.Custom?.CustomSell?.CustomBottom}
                  </span>
                </p>
                <div className="inputs">
                  <div className="instant-input">
                    <NumberFormat
                      decimalScale={2}
                      value={priceVal}
                      onInput={(e: any) => {
                        setPrice(e.target.value);
                        let newSize = 0;
                        if (sellType === 'BID') {
                          newSize = Number(e.target.value / coin.buyPrice);
                        } else {
                          newSize = Number(e.target.value / coin.sellPrice);
                        }
                        setSize(newSize);
                      }}
                      placeholder={
                        sellType === 'BID'
                          ? InstantTrade?.Custom?.CustomBuy?.CustomInputTop
                          : InstantTrade?.Custom?.CustomSell?.CustomInputTop
                      }
                    />
                    <span>{currency}</span>
                  </div>
                  <div className="instant-input">
                    <NumberFormat
                      decimalScale={coin.baseScale}
                      value={sizeVal}
                      onInput={(e: any) => {
                        setSize(e.target.value);
                        let newSize = 0;
                        if (sellType === 'BID') {
                          newSize = Number(e.target.value * coin.buyPrice);
                        } else {
                          newSize = Number(e.target.value * coin.sellPrice);
                        }
                        setPrice(newSize);
                      }}
                      placeholder={
                        sellType === 'BID'
                          ? InstantTrade?.Custom?.CustomBuy?.CustomInputBottom
                          : InstantTrade?.Custom?.CustomSell?.CustomInputBottom
                      }
                    />
                    <span>{coin.coin}</span>
                  </div>
                </div>
                <button onClick={() => redirect(null, null)} style={{ marginTop: 10 }}>
                  {sellType === 'BID' ? InstantTrade?.ButtonBottom[0] : InstantTrade?.ButtonBottom[1]}
                </button>
              </div>
            </div>
          </SimpleTrade>
          <Timer setUpdate={setUpdate} sellType={sellType} text={InstantTrade?.PriceProgress} />
        </Container>

        <WhyComp>
          <Container>
            <H2 style={{ color: '#FFFFFF' }}>{page.Why.header_title}</H2>
            <SolutionsBox className="items flex-container">
              {(page.Why.Why || []).map((item: any, index: number) => (
                <SolutionItem className="item" key={index}>
                  <img src={item.Why_file} />
                  <H5>{item.Why_title}</H5>
                  <Subtext align={breakpoint === 'md' || breakpoint === 'lg' ? 'left' : 'center'}>{item.Why_text}</Subtext>
                </SolutionItem>
              ))}
            </SolutionsBox>
          </Container>
        </WhyComp>

        <CoinsComp>
          <Container>
            <H2>{page.coins.coin_title}</H2>
            <CoinsBox className="items">
              {(page.coins.coins || []).map((item: any, index: number) => (
                <CoinItem className="item" key={index}>
                  <img src={item.coin_file || ''} />
                  <H5 style={{ marginTop: 15 }}>
                    {item.coin_title}
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
