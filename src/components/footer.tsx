import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  StyledFooter,
  Container,
  FooterContainer,
  FooterMenu,
  FooterMenuItem,
  FooterSocial,
  FooterSocialButtons,
  FooterAboutUs,
  Copyright
} from '@/styled';
import { H3 } from '@/styled/typography';
import { DataContext } from '@/context/app-context';
import useTranslation from '@/hooks/useTranslation';
import config from '@/utils/config';

export const Footer = () => {
  const { t, locale } = useTranslation();
  const path = useRouter().asPath;
  const { data } = React.useContext(DataContext);
  const footerMenu = [...data.static.manualFooterMenu, ...data.pages.footerMenu];
  const extra = data.pages.extra;

  if (!path.includes('/about')) {
    return (
      <StyledFooter>
        <Container>
          <FooterContainer>
            <FooterMenu width="48%">
              {footerMenu.map((page: any) =>
                page.link ? (
                  <FooterMenuItem href={page.link} key={page.title} target="_blank" rel="noopener">
                    {page.title}
                  </FooterMenuItem>
                ) : (
                  <Link href={`/[lang]/${page.slug}`} as={`/${locale}/${page.slug}`} key={page.title} passHref>
                    <FooterMenuItem>{page.title}</FooterMenuItem>
                  </Link>
                )
              )}
            </FooterMenu>
            <FooterAboutUs>
              <H3>{t('Write us')}</H3>
              <FooterMenuItem href="tel:+995599123123">
                <img src="/images/call.svg" />
                <p>+995 599 123 123</p>
              </FooterMenuItem>
              <FooterMenuItem href="mailto:info@gex.ge?subject=Write us">
                <img src="/images/email.svg" style={{ margin: '0 9px 0 -2px' }} />
                <p>info@gex.ge</p>
              </FooterMenuItem>
              <FooterMenuItem href={config.googleAddress} target="_blank" rel="noopener">
                <img src="/images/map.svg" />
                <p>{t('footer_address')}</p>
              </FooterMenuItem>
            </FooterAboutUs>
            <FooterSocial>
              <FooterSocialButtons>
                <a href={extra.linkedin} target="_blank" rel="noopener">
                  <img src="/linkedin.svg" />
                </a>
                <a href={extra.facebook} target="_blank" rel="noopener">
                  <img src="/fb.svg" />
                </a>
              </FooterSocialButtons>
              <Copyright>
                <img src="/copyright.svg" />
                {extra.copy}
              </Copyright>
            </FooterSocial>
          </FooterContainer>
        </Container>
      </StyledFooter>
    );
  }

  return (
    <StyledFooter>
      <Container>
        <FooterContainer>
          <FooterMenu width="48%">
            {footerMenu.map((page: any) =>
              page.link ? (
                <FooterMenuItem href={page.link} key={page.title} target="_blank" rel="noopener">
                  {page.title}
                </FooterMenuItem>
              ) : (
                <Link href={`/[lang]/${page.slug}`} as={`/${locale}/${page.slug}`} key={page.title} passHref>
                  <FooterMenuItem>{page.title}</FooterMenuItem>
                </Link>
              )
            )}
          </FooterMenu>
        </FooterContainer>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
