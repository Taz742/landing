module.exports = {
  exportTrailingSlash: true,
  env: {
    gaTrackingId: '',
    website: 'https://gex.ge',
    targetWebsite: 'https://trade.gex.ge/',
    getDataUrl: 'https://content.gex.ge',
    getMenuUrl: 'https://content.gex.ge/wp-json/slug/menu',
    exchangeApi: 'https://exchange.gex.ge/exchange-connector-1.0/api/',
    exchangeBaseUrl: 'https://trade.gex.ge',
    localeCookieUrl: '.gex.ge',
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
