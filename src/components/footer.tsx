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
import { Subtext, H3 } from '@/styled/typography';
import { DefaultFooter, DefaultFooterContainer } from '@/styled/pages';
import { DataContext } from '@/context/app-context';

export const Footer = () => {
  const path = useRouter().asPath;
  const { data } = React.useContext(DataContext);
  const pages = data.menu;

  if (!['/about'].includes(path)) {
    return (
      <StyledFooter>
        <Container>
          <FooterContainer>
            <FooterMenu width="48%">
              {pages.map((page: any) => (
                <Link href={`/${page.slug}`} key={page.slug} passHref>
                  <FooterMenuItem>{page.title}</FooterMenuItem>
                </Link>
              ))}
            </FooterMenu>
            <FooterAboutUs>
              <H3>Write us</H3>
              <FooterMenuItem>
                <img src="/images/call.svg" />
                <p>+995 599 123 123</p>
              </FooterMenuItem>
              <FooterMenuItem>
                <img src="/images/email.svg" style={{ margin: '0 9px 0 -2px' }} />
                <p>info@gex.ge</p>
              </FooterMenuItem>
              <FooterMenuItem>
                <img src="/images/map.svg" />
                <p>12 Sulkhan Tsintsadze str.</p>
              </FooterMenuItem>
            </FooterAboutUs>
            <FooterSocial>
              <FooterSocialButtons>
                <a href="#" target="_blank" rel="noopener">
                  <img src="/linkedin.svg" />
                </a>
                <a href="#" target="_blank" rel="noopener">
                  <img src="/fb.svg" />
                </a>
              </FooterSocialButtons>
              <Copyright>
                <img src="/copyright.svg" />
                &nbsp; Copyright 2020
              </Copyright>
            </FooterSocial>
          </FooterContainer>
        </Container>
      </StyledFooter>
    );
  }

  return (
    <DefaultFooter>
      <Container>
        <DefaultFooterContainer>
          <FooterMenu maxHeight="175px" width="50%">
            {pages.map((page: any) => (
              <Link href={`/${page.slug}`} key={page.slug} passHref>
                <FooterMenuItem flex="0 0 33%">{page.title}</FooterMenuItem>
              </Link>
            ))}
          </FooterMenu>
          <FooterSocial>
            <FooterSocialButtons justify="flex-end" margin="0 4px 30px">
              <a href="#" target="_blank" rel="noopener">
                <img src="/linkedin.svg" />
              </a>
              <a href="#" target="_blank" rel="noopener">
                <img src="/fb.svg" />
              </a>
            </FooterSocialButtons>
            <Subtext align="center" size="16px" opacity="0.7">
              <img src="/copyright.svg" style={{ position: 'relative', marginRight: '10px', top: '3px' }} />
              <span> Copyright 2020</span>
            </Subtext>
          </FooterSocial>
        </DefaultFooterContainer>
      </Container>
    </DefaultFooter>
  );
};

export default Footer;
