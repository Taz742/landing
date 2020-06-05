import Layout from '../components/layout'
import {OtcComp} from '../styled/ots'
import {HomeComp, TopCoins, WhyComp, CoinsComp, SimpleTrade, SimpleTradeLine} from '../styled/home'
import {useEffect, useState, useRef} from 'react'
import NumberFormat from 'react-number-format';

function useInterval(callback, delay) {
	const savedCallback = useRef();

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

export default function Home(props) {
  const page = props.home;
  const API = 'http://10.10.5.4';
  const Offers = API + ':8080/exchange-connector-1.0/api/private/simpleTrade/offers';
  const PAIRS = API + ':8080/exchange-connector-1.0/api/public/ticker';
  const loadTime = 30;

  const [time, setTime] = useState(loadTime);
  const [trades, setTrades] = useState({
    GEL: [],
    USD: [],
  })
  const [currency, setCurrency] = useState('GEL');
  const [coin, setCoin] = useState({});
  const [pairs, setPairs] = useState({
    GEL: [],
    USD: [],
  });
  const [coinsList, setCoinsList] = useState([]);
  const [sellType, setSellType] = useState('BID');
  const [sizeVal, setSize] = useState('');
  const [priceVal, setPrice] = useState('');
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    fetch(PAIRS)
    .then(response => response.json())
    .then(data => {
      const gelArr = data.filter((item) => {
        if (item.pair.endsWith('-GEL')) {
          return item;
        }
      })
      const usdArr = data.filter((item) => {
        if (item.pair.endsWith('-USD')) {
          return item;
        }
      })
      setPairs({
        GEL: gelArr,
        USD: usdArr
      })
    })
  }, []);

  useEffect(() => {
    fetch(Offers)
    .then(response => response.json())
    .then(data => {
      setCoin({
        index: 0,
        baseScale: data[currency][0].pair.baseScale,
        coin: data[currency][0].pair.baseCurrency
      });
      setTrades(data);
      let lists = [];
      data[currency].forEach((item, index) => {
        lists.push({
          index: index,
          baseScale: item.pair.baseScale,
          coin: item.pair.baseCurrency
        })
      })
      setCoinsList(lists)
    });
  }, [update])

  useInterval(() => {
		let timeVal = time;
		timeVal = timeVal - 0.1;
		setTime(timeVal);

		if (timeVal < 0) {
      setTime(loadTime);
      setUpdate(update + 1);
		}
	}, 100);

  const changeCurrency = () => {
    if (currency === 'GEL') {
      setCurrency('USD');
    } else {
      setCurrency('GEL');
    }
  }

  const getImage = (baseCurrency) => {
    baseCurrency = baseCurrency.substr(0, baseCurrency.indexOf('-'));
    return `${API}/icons/SVG/${baseCurrency.toLowerCase()}.svg`;
  }

  const redirect = (size = null, price = null) => {
    if (!size && !price) {
      size = sizeVal;
      price = priceVal;
    }
    const url = `${API}/simple-trade?size=${size}&price=${price}&type=${sellType}&coint=${coin.coin}&currency=${currency}`
    window.open(url, '_blank');
  }

  return (
    <Layout props={props} title="Gex">
      <OtcComp className="container home-container">
        <h1>
          The Most Liquid Crypto Exchange In Region
        </h1>
        <HomeComp>
          <button className="registration">
            Registration
          </button>

          <TopCoins className="flex-container">
            {pairs && pairs[currency].length > 0 && (
              pairs[currency] && pairs[currency].map((item, index) => 
                <div key={index} className="item">
                  <img src={getImage(item.pair)} />
                  <p className="price"> {currency === 'GEL' ? <>&#8382;</> : '$'} {item.lastTradePrice}</p>
                  <p className="priceh"> {currency === 'GEL' ? <>&#8382;</> : '$'} {item.baseVolume} <span>24 H</span></p>
                  <p className="price-percent">
                    <img src="/images/Arrow.svg"/>
                    {item.priceChange}%
                  </p>
                </div>
              )
            )}
          </TopCoins>

          <SimpleTrade>
            <h3>
              Simple Trade
              <div className="trade-right">
                <div className="coin">
                  <div className="active-coin">
                    {coin.coin} - {currency}
                    <img src="/images/dropdown.svg" />
                  </div>
                  <div className="coin-list-dropdown">
                    {coinsList.map(item => 
                      <p key={item.index} 
                        onClick={() => setCoin(item)}>
                        {item.coin}
                      </p>
                    )}
                  </div>
                </div>
                <div className="currency">
                  <span className="left" onClick={(e) => changeCurrency()}></span>
                  <span className="value">{currency}</span>
                  <span className="right" onClick={(e) => changeCurrency()}></span>
                </div>
              </div>
            </h3>

            <div className="tabs">
              <button onClick={() => setSellType('BID')} className={sellType === 'BID' ? 'active' : ''}>Buy {coin.coin}</button>
              <button onClick={() => setSellType('ASK')} className={sellType !== 'BID' ? 'active' : ''}>Sell {coin.coin}</button>
            </div>

            <div className="tabs-list flex-container">
              {trades && currency && trades[currency].length > 0 && (
                trades[currency][coin.index]['offerEntriesMap'][sellType].map((item,index) => 
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
                    <button onClick={(e) => redirect(item.size, item.price)}>
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
                  <NumberFormat decimalScale="2" value={priceVal} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price" />
                  <NumberFormat decimalScale={coin.baseScale} value={sizeVal} onChange={(e) => setSize(e.target.value)} placeholder="Enter amount" />
                </div>
                <button onClick={(e) => redirect()}>
                  {sellType === 'BID' ? 'Buy' : 'Sell'} now
                </button>
              </div>
            </div>
          </SimpleTrade>

          <SimpleTradeLine>
            <div className="line">
              {time && (loadTime - time) < 30 && (loadTime - time) > 0.1 && (
                <div type={sellType} style={{ width: `${((loadTime - time) * 3.331)}%` }} className="active-line"></div>
              )}
            </div>
            <div className="line-data">
              <img src="/images/access_alarm.svg" />
              Price change in 00:<span>{(time.toFixed(0) <= 9) ? `0${time.toFixed(0)}` : time.toFixed(0)}</span>
            </div>
          </SimpleTradeLine>

        </HomeComp>
      </OtcComp>
      <WhyComp>
        <div className="container">
          <h3>
            Why Choose us?
          </h3>
          <div className="items flex-container">
            {page.solutions.solutions && page.solutions.solutions.map((item, index) => 
              <div className="item" key={index}>
                <img src={item.sol_file} />
                <h5>
                  {item.sol_title}
                </h5>
                <p>
                  {item.sol_text}
                </p>
              </div>
            )}
          </div>
        </div>
      </WhyComp>

      <CoinsComp>
        <div className="container">
          <h3>
            Multi Currency Platform
          </h3>
          <div className="items flex-container">
            {page.advantages.advantages && page.advantages.advantages.map((item, index) => 
              <div className="item" key={index}>
                <img src={item.sol_file} />
                <h5>
                  {item.sol_title}
                  <br />
                  <a href={item.sol_link}>
                    View Rates
                  </a>
                </h5>
              </div>
            )}
          </div>
        </div>
      </CoinsComp>
    </Layout>
  )
}
