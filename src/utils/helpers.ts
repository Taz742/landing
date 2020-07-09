export const splitText = (text = '') => text.split(/&nbsp;/);

export const replaceEnterSymbol = (text = '') => text.replace(/(\r\n|\n|\r)/gm, '<br />').replace(/&nbsp;/, '');

export const getCoins = (coinObject: any, size?: number) => {
  if (size) return Object.values(coinObject).slice(0, size);
  else return Object.values(coinObject);
};

export const stripHtml = (text = '') =>
  text
    .replace(/&nbsp;/, '')
    .replace(/<[^>]+>/g, '')
    .replace(/(\r\n|\n|\r)/gm, ' ');
