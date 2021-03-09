module.exports = {
  exportTrailingSlash: true,
  env: {
    gaTrackingId: '',
    website: 'https://cryptal.com',
    // targetWebsite: 'https://trade.gex.exchange/',
    getDataUrl: 'https://content.cryptal.com',
    // getMenuUrl: 'https://content.gex.exchange/wp-json/slug/menu',
    // exchangeApi: 'https://exchange.cryptal.com/exchange-connector-1.0/api/', // <--
    // exchangeBaseUrl: 'https://trade.gex.exchange', // <--
    localeCookieUrl: '.cryptal.com',
    fbPageId: '107413211066997',
    fbAppId: '315470196311206',
    internationDomainStartsWith: 'FF'
  },
  devIndicators: {
    autoPrerender: false
  },
  typescript: {
    ignoreBuildErrors: true
  }
};
