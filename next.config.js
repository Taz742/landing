module.exports = {
  env: {
    gaTrackingId: '',
    website: 'https://gex.ge',
    targetWebsite: 'https://trade.gex.ge/',
    getDataUrl: 'https://content.gex.ge',
    getMenuUrl: 'https://content.gex.ge/wp-json/slug/menu',
    contactPostUrl: 'https://content.cryptx.com/index.php/wp-json/sendMail/send',
    exchangeApi: 'https://exchange.gex.ge/exchange-connector-1.0/api/',
    exchangeBaseUrl: 'https://exchange.gex.ge'
  },
  devIndicators: {
    autoPrerender: false
  },
  typescript: {
    ignoreBuildErrors: true
  }
};
