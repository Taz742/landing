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
  FooterBg1,
  FooterBg2
} from '@/styled';
import { Subtext } from '@/styled/typography';
import { DefaultFooter, DefaultFooterContainer } from '@/styled/pages';

export const Footer = (props: any) => {
  const { extra } = props;
  const pages = Object.values(props.footerMenu);
  const path = useRouter().asPath;

  if (['/', 'home'].includes(path)) {
    return (
      <StyledFooter>
        <FooterBg1 src="/footer_bg_2.svg" />
        <FooterBg2 src="/footer_bg_1.svg" />
        <Container>
          <FooterContainer>
            <FooterMenu>
              {pages.map((page: any) => (
                <Link href={`/${page.slug}`} key={page.slug} passHref>
                  <FooterMenuItem>{page.title}</FooterMenuItem>
                </Link>
              ))}
              <FooterMenuItem flex="0 0 33%" href="https://api.cryptx.com" target="_blank" rel="noopener">
                API
              </FooterMenuItem>
            </FooterMenu>
            <FooterSocial>
              <Subtext align="right" size="18px" opacity="0.6">
                Follow us on
              </Subtext>
              <FooterSocialButtons>
                <a href={extra.linkedin} target="_blank" rel="noopener">
                  <img src="/linkedin.svg" />
                </a>
                <a href={extra.facebook} target="_blank" rel="noopener">
                  <img src="/fb.svg" />
                </a>
              </FooterSocialButtons>
            </FooterSocial>
          </FooterContainer>
          <Subtext align="center" size="16px" opacity="0.8">
            <img src="/copyright.svg" style={{ position: 'relative', marginRight: '10px', top: '3px' }} />
            <span>{extra.copy} All Rights Reserved</span>
          </Subtext>
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
            <FooterMenuItem flex="0 0 33%" href="https://api.cryptx.com" target="_blank" rel="noopener">
              API
            </FooterMenuItem>
          </FooterMenu>
          <FooterSocial>
            <FooterSocialButtons justify="flex-end" margin="0 4px 30px">
              <a href={extra.linkedin} target="_blank" rel="noopener">
                <img src="/linkedin.svg" />
              </a>
              <a href={extra.facebook} target="_blank" rel="noopener">
                <img src="/fb.svg" />
              </a>
            </FooterSocialButtons>
            <Subtext align="center" size="16px" opacity="0.7">
              <img src="/copyright.svg" style={{ position: 'relative', marginRight: '10px', top: '3px' }} />
              <span>{extra.copy} All Rights Reserved</span>
            </Subtext>
          </FooterSocial>
        </DefaultFooterContainer>
      </Container>
    </DefaultFooter>
  );
};

export default Footer;
