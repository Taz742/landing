module.exports = {
  env: {
    gaTrackingId: '',
    website: 'https://gex.ge',
    targetWebsite: 'https://gex.ge/exchange',
    getDataUrl: 'https://content.gex.ge/wp-json/wp/v2/pages',
    getMenuUrl: 'https://content.gex.ge/wp-json/slug/menu',
    contactPostUrl: 'https://content.cryptx.com/index.php/wp-json/sendMail/send',
    exchangeApi: 'http://10.10.5.4:8080/exchange-connector-1.0/api/',
    exchangeBaseUrl: 'http://10.10.5.4'
  },
  devIndicators: {
    autoPrerender: false
  },
  typescript: {
    ignoreBuildErrors: true
  }
};
