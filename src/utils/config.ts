export default {
  url: process.env.website,
  site_name: 'GEX',
  targetWebsite: process.env.targetWebsite,
  getDataUrl: process.env.getDataUrl || '',
  contactPostUrl: process.env.contactPostUrl || '',
  exchangeApi: process.env.exchangeApi || ''
};
