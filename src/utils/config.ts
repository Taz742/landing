export default {
  isDev: process.env.NODE_ENV === 'development',
  url: process.env.website,
  site_name: 'GEX',
  targetWebsite: process.env.targetWebsite,
  getDataUrl: process.env.getDataUrl || '',
  getMenuUrl: process.env.getMenuUrl || '',
  exchangeApi: process.env.exchangeApi || '',
  exchangeBaseUrl: process.env.exchangeBaseUrl || '',
  localeCookieUrl: process.env.localeCookieUrl || '',
  fbPageId: process.env.fbPageId || '',
  fbAppId: process.env.fbAppId || '',
  googleAddress:
    "https://www.google.com/maps/place/12+Sulkhan+Tsintsadze+St,+T'bilisi/@41.7218805,44.7676314,17z/data=!3m1!4b1!4m5!3m4!1s0x4044732777acbab3:0x46c3f06cb063d83f!8m2!3d41.7218805!4d44.7698201"
};
