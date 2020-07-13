export default {
  url: process.env.website,
  site_name: 'GEX',
  targetWebsite: process.env.targetWebsite,
  getDataUrl: process.env.getDataUrl || '',
  getMenuUrl: process.env.getMenuUrl || '',
  contactPostUrl: process.env.contactPostUrl || '',
  exchangeApi: process.env.exchangeApi || '',
  exchangeBaseUrl: process.env.exchangeBaseUrl || ''
};
