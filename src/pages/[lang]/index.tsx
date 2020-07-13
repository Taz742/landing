import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Grid from '@material-ui/core/Grid';

import CustomHead from '@/components/custom-head';
// import Button from '@/components/library/button';
import { Layout } from '@/components/index';
// import CoinModal from '@/components/coin-modal';
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
  SimpleTradeLine
} from '@/styled';
import { H1, H2, H5, Subtext } from '@/styled/typography';
import { stripHtml } from '@/utils/helpers';
import { PageHeader } from '@/styled/pages';
import config from '@/utils/config';
import NumberFormat from 'react-number-format';
import useBreakpoint from '@/hooks/use-breakpoints';

const loadTime = 90;

function useInterval(callback: any, delay: number) {
  const savedCallback = React.useRef<any>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
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


const IndexPage = (props: any) => {
  const { home } = props;
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
  const [sizeVal, setSize] = useState(0);
  const [priceVal, setPrice] = useState(0);
  const [time, setTime] = useState<number>(loadTime);
  const [update, setUpdate] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const breakpoint = useBreakpoint();

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
  }

  useInterval(() => {
    let timeVal = time;
    timeVal = timeVal - 0.1;
    setTime(timeVal);

    console.log("called", timeVal);

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

  const redirect = (size = 0, price = 0) => {
    if (!size && !price) {
      size = sizeVal;
      price = priceVal;
    }
    const url = `${""}/simple-trade?size=${size}&price=${price}&type=${sellType}&coint=${coin.coin}&currency=${currency}`
    window.open(url, '_blank');
  };

  return (
    <>
      <CustomHead title="CryptX Crypto Wallet" page="" description={stripHtml(String(home.why.why_content))} />
      <Layout>
        <PageHeader />
        <OtcComp>
          <Container>
            <Container maxWidth="75%" style={{ padding: 0 }}>
              <H1>{home?.hero?.hero_title || 'The Most Liquid Crypto Exchange In Region'}</H1>
              <RegisterButton>
                <span>Register now</span>
              </RegisterButton>
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
            <h3>
              Simple Trade
              <div className="trade-right">
                <div
                  onMouseEnter={() => setDropDown(true)}
                  onMouseLeave={() => setDropDown(false)}
                  className={activeDropDown ? 'active coin' : 'coin'}>
                  <div className="active-coin">
                    {coin.coin} - {currency}
                    <img src="/images/dropdown.svg" />
                  </div>
                  <div className="coin-list-dropdown">
                    {coinsList.map((item: any) =>
                      <p key={item.index}
                        onClick={() => { setCoin(item); setDropDown(false) }}>
                        {item.coin}
                      </p>
                    )}
                  </div>
                </div>
                <div className="currency">
                  <span className="left" onClick={() => changeCurrency()}></span>
                  <span className="value">{currency}</span>
                  <span className="right" onClick={() => changeCurrency()}></span>
                </div>
              </div>
            </h3>

            <div className="tabs">
              <button onClick={() => setSellType('BID')} className={sellType === 'BID' ? 'active' : ''}>Buy {coin.coin}</button>
              <button onClick={() => setSellType('ASK')} className={sellType !== 'BID' ? 'active' : ''}>Sell {coin.coin}</button>
            </div>

            <div className="tabs-list flex-container">
              {trades && currency && trades[currency].length > 0 && (
                trades[currency][coin.index]['offerEntriesMap'][sellType].map((item: any, index: number) =>
                  <div key={index} className="tab-coin">
                    <p>
                      I f you {sellType === 'BID' ? 'buy' : 'sell'} now, you will
                      <span>receive
                        {sellType === 'BID' ? item.size : item.price}
                        {sellType === 'BID' ? coin.coin : currency}
                      </span>
                    </p>
                    <h4>
                      {sellType === 'BID' ? item.price : item.size}
                      {sellType === 'BID' ? currency : coin.coin}
                    </h4>
                    <button onClick={() => redirect(item.size, item.price)}>
                      {sellType === 'BID' ? 'Buy' : 'Sell'} now
                    </button>
                  </div>
                )
              )}
              <div className="tab-coin">
                <p>
                  Enter amount you
                  <span>want to {sellType === 'BID' ? 'buy' : 'sell'}</span>
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
                      setSize(newSize)
                    }}
                    placeholder="Enter price" />
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
                      setPrice(newSize)
                    }}
                    placeholder="Enter amount" />
                </div>
                <button onClick={() => redirect()}>
                  {sellType === 'BID' ? 'Buy' : 'Sell'} now
                </button>
              </div>
            </div>
          </SimpleTrade>
          <SimpleTradeLine>
            <div className="line">
              <div style={{ width: `${(100 * (loadTime - time)) / loadTime}%` }} className={`active-line ${sellType === 'ASK' ? 'active-line-ask' : ''}`} />
            </div>
            <div className="line-data">
              <img src="/images/access_alarm.svg" />
              {'Price change in '}
              {parseInt(time.toFixed(0)) > 60 ? (
                <span>
                  {' '}
                  {`0${(time / 60).toFixed(0)}:${
                    (parseInt((time - 60).toFixed(0))) <= 9 ? `0${(time - 60).toFixed(0)}` : (time - 60).toFixed(0)
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
            <H2>Why Choose us?</H2>
            <SolutionsBox className="items flex-container">
              {(home?.solutions?.solutions || []).map((item: any, index: number) => (
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
            <H2>Multi Currency Platform</H2>
            <CoinsBox className="items">
              {(home?.advantages?.advantages || []).map((item: any, index: number) => (
                <CoinItem className="item" key={index}>
                  <img src={item.sol_file} />
                  <H5>
                    {item.sol_title}
                    <br />
                    <a href={item.sol_link}>View Rates</a>
                  </H5>
                </CoinItem>
              ))}
            </CoinsBox>
          </Container>
        </CoinsComp>
        {/* <Hero>
          <HeroBg src="/bg_home.svg" />
          <InnerPage>
            <Container>
              <HeroSection>
                <Grid container>
                  <Grid item xs={12} sm={4}>
                    <HeroH1>{home.hero.hero_title}</HeroH1>
                    <HeroH2>{home.hero.hero_sub_title}</HeroH2>
                    <a href={`${config.targetWebsite}/register`} target="_blank" rel="noopener">
                      <RegisterButton>
                        <span>
                          Register now
                          <img src="/arrow_right.svg"></img>
                        </span>
                      </RegisterButton>
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
                      <HeroImg src="/hero_main_image_hd.png"></HeroImg>
                    </div>
                  </Grid>
                </Grid>
              </HeroSection>
            </Container>
          </InnerPage>
        </Hero>

        <Section>
          <Container>
            <div style={{ maxWidth: '88%', margin: '0 auto' }}>
              <H2 align="center" margin="0 0 40px">
                {home.why.why_title}
              </H2>
              <Text>
                {String(home.why.why_content)
                  .replace(/\u00a0/g, ' ')
                  .replace(/<[^>]+>/g, '')}
              </Text>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <H3 align="center" margin="0 0 70px">
              {home.solutions.title}
            </H3>
            <Grid container spacing={4}>
              {home.solutions.solutions.map((solution: any) => (
                <Grid item xs={6} sm={6} md={3} key={solution.sol_title}>
                  <Link href={{ pathname: '/solutions', query: { el: solution.sol_title } }} passHref>
                    <Solution>
                      <SolutionImg src={solution.sol_file} />
                      <H5>{solution.sol_title}</H5>
                      <Subtext align="left">{solution.sol_text}</Subtext>
                    </Solution>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Section>

        <AdvantageSection>
          <Container>
            <div style={{ maxWidth: '56%', margin: '0 auto' }}>
              <H2 align="center" margin="0 0 20px">
                {data.homePage.advantages.adv_title}
              </H2>
              <Text>{home.advantages.adv_title}</Text>
            </div>
            <Grid container>
              {home.advantages.advantages.map((advantage: any) => (
                <Grid item xs={12} sm={4} key={advantage.sol_title}>
                  <AdvantageItem>
                    <SolutionImg src={advantage.sol_file || ''} />
                    <H5>{advantage.sol_title}</H5>
                    <Subtext>{advantage.sol_text}</Subtext>
                  </AdvantageItem>
                </Grid>
              ))}
            </Grid>
          </Container>
        </AdvantageSection>

        <CoinsSection>
          <Container>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <ClientsSection>
                  <H2 margin="0 0 40px">{home.clients.clients_title}</H2>
                  <Subtext size="16px" lineHeight="33px" align="left">
                    {home.clients.clients_sub_title}
                  </Subtext>
                  <Link href="/clients">
                    <a>
                      <Button buttonType="normal" margin="40px 0 0" inline>
                        Read more
                      </Button>
                    </a>
                  </Link>
                </ClientsSection>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ClientsImg src={home.clients.clients_img} />
              </Grid>
            </Grid>

            <CoinsSupported>
              <H3 align="center" margin="0 0 15px">
                {data.homePage.coins.title}
              </H3>
              <Subtext size="16px">{home.coins.coins_title}</Subtext>
              <CoinImages>
                {getCoins(home.coins.coins, 5).map((coin: any, i: number) => (
                  <CoinItem key={i}>
                    <CoinImg src={coin} />
                  </CoinItem>
                ))}
              </CoinImages>
              <CoinModal {...props} />
            </CoinsSupported>
          </Container>
        </CoinsSection> */}
      </Layout>
    </>
  );
};

export default IndexPage;
