import React from 'react';
import NextHead from 'next/head';

import config from '@/utils/config';
import useTranslation from '@/hooks/useTranslation';

interface Props {
  title: string;
  page: string;
  description?: string;
  image?: string;
  seo?: {
    name: { name: string; content?: string | null }[];
    property: { name: string; content?: string | null }[];
  };
}

export const CustomHead = ({ title, description, page, image, seo }: Props) => {
  const desc = description || 'Highest Liquidity Crypto Exchange in the Region';
  const img = image || `${config.url}/main_logo.png`;
  const { locale } = useTranslation();
  const url = `${config.url}/${locale}${page}`;

  const seoFromBackend = Boolean(seo);
  const nameTags = (seo && Array.isArray(seo.name) && seo.name.filter((i) => Boolean(i.content))) || [];
  const propertyTags = (seo && Array.isArray(seo.property) && seo.property.filter((i) => Boolean(i.content))) || [];
  const titleTag = nameTags.find((i) => i.name === 'title');

  if (seoFromBackend) {
    return (
      <NextHead>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes,minimum-scale=0.5,maximum-scale=2" />
        {titleTag && <title>{titleTag.content}</title>}
        {nameTags.map((i) => (
          <meta key={i.name} name={i.name} content={i.content || ''} />
        ))}
        {propertyTags.map((i) => (
          <meta key={i.name} property={i.name} content={i.content || ''} />
        ))}
        <meta property="og:url" content={url} />
        <link rel="canonical" href={url} />
      </NextHead>
    );
  }

  return (
    <NextHead>
      <title>{title}</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes,minimum-scale=0.5,maximum-scale=2" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={description}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:site_name" content={config.site_name} />
      <link rel="canonical" href={url} />
    </NextHead>
  );
};

export default CustomHead;
