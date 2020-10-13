module.exports = {
  exportTrailingSlash: true,
  env: {
    gaTrackingId: '',
    website: 'https://gex.exchange',
    targetWebsite: 'https://trade.gex.exchange/',
    getDataUrl: 'https://content.gex.exchange',
    getMenuUrl: 'https://content.gex.exchange/wp-json/slug/menu',
    exchangeApi: 'https://exchange.gex.exchange/exchange-connector-1.0/api/',
    exchangeBaseUrl: 'https://trade.gex.exchange',
    localeCookieUrl: '.gex.exchange',
    fbPageId: '107413211066997',
    fbAppId: '315470196311206'
  },
  devIndicators: {
    autoPrerender: false
  },
  typescript: {
    ignoreBuildErrors: true
  }
};
