module.exports = {
  env: {
    gaTrackingId: '',
    website: 'https://gex.ge',
    targetWebsite: 'https://gex.ge/exchange',
    getDataUrl: 'https://content.gex.ge/index.php?rest_route=/getGeneralData/get',
    contactPostUrl: 'https://content.cryptx.com/index.php/wp-json/sendMail/send',
    exchangeApi: 'http://10.10.5.4:8080/exchange-connector-1.0/api/',
    exchangeBaseUrl: 'http://10.10.5.4'
  },
  devIndicators: {
    autoPrerender: false
  }
};
