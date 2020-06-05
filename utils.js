export const splitText = (text = '') => text.split(/&nbsp;/);

export const replaceEnterSymbol = (text = '') => text.replace(/(\r\n|\n|\r)/gm, '<br />').replace(/&nbsp;/, '');

export const stripHtml = (text = '') =>
  text
    .replace(/&nbsp;/, '')
    .replace(/<[^>]+>/g, '')
    .replace(/(\r\n|\n|\r)/gm, ' ');
