import React from 'react';
import NextHead from 'next/head';

import config from '@/utils/config';
import useTranslation from '@/hooks/useTranslation';

interface Props {
  title: string;
  page: string;
  description?: string;
  image?: string;
}

export const CustomHead = ({ title, description, page, image }: Props) => {
  const desc = description || 'The Most Liquid Crypto Exchange In Region';
  const img = image || `${config.url}/logo.svg`;
  const { locale } = useTranslation();
  const url = `${config.url}/${locale}${page}`;

  return (
    <NextHead>
      <title key="title">{title}</title>
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
