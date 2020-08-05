import parse from 'html-react-parser';

export const splitText = (text = '') => text.split(/&nbsp;/);

export const replaceEnterSymbol = (text = '') => text.replace(/(\r\n|\n|\r)/gm, '<div class="line-break"></div>').replace(/&nbsp;/, '');

export const replaceHTML = (text = '') => text.replace(/ /g, '\u00a0');

export const getCoins = (coinObject: any, size?: number) => {
  if (size) return Object.values(coinObject).slice(0, size);
  else return Object.values(coinObject);
};

export const stripHtml = (text = '') =>
  text
    .replace(/&nbsp;/, '')
    .replace(/<[^>]+>/g, '')
    .replace(/(\r\n|\n|\r)/gm, ' ');

export const parseHTML = (html: string) => parse(html);

export const generateContentBlocks = ({ meta = [] }) => {
  let content = '';
  meta.forEach((e: any, i) => {
    content += `<div id="${e.carrer_title}" class="content-section"><h3>${e.carrer_title}</h3>${e.carrer_text || ''}</div>`;
  });
  return content;
};
