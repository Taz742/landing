import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useScrollTrigger } from '@material-ui/core';

import LocaleSwitcher from '@/components/locale-swither';
import Button from '@/components/library/button';
import MobileMenu from '@/components/pc-drawer';
import { StyledHeader, HeaderLeft, HeaderRight, HeaderMenu, HeaderMenuItem, HamburgerMenuButton, HeaderSeperator } from '@/styled';
import useTranslation from '@/hooks/useTranslation';
import { DataContext } from '@/context/app-context';
import { isInternational } from '@/utils/helpers';

export const Header = ({ notFoundPage }: any) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const { locale } = useTranslation();
  const { data } = React.useContext(DataContext);
  const headerMenu = data.pages.menu.header;
  const footerMenu = data.pages.menu.footer;
  const baseUrl = isInternational() ? data.pages.settings.url.exchangeBaseUrls['INT'] : data.pages.settings.url.exchangeBaseUrls['GEO'];
  const hamburgerMenu = [...headerMenu, ...footerMenu].filter((v, i, a) => a.findIndex((t) => t.slug === v.slug) === i);
  const extra = data.pages?.extra || {};
  const links: any = data?.pages?.settings || {};

  const fixed = React.useMemo((): boolean => {
    const path = router.asPath.toLocaleLowerCase();
    return path.includes('/about');
  }, [router.asPath]);

  const fixHeader = notFoundPage || trigger || fixed;

  return (
    <StyledHeader fix={fixHeader}>
      <HeaderLeft>
        <Link href="/[lang]" as={`/${locale}`}>
          <div className="logo">
            <img src="/logo.svg" />
          </div>
        </Link>
        <HeaderMenu>
          {headerMenu.map(({ title = '', slug = '', url = '', blank = false, externalUrl = false, isInt = false }) =>
            externalUrl ? (
              <HeaderMenuItem locale={locale} href={!isInt ? url : `${baseUrl}${url}`} key={title} target={blank ? "_blank" : ''} rel="noopener">
                {title}
              </HeaderMenuItem>
            ) : (
              <Link href={`/[lang]/${slug}`} as={`/${locale}/${slug}`} target={blank ? "_blank" : ''} key={`${title}-${router.query.lang}`} passHref>
                <HeaderMenuItem
                  locale={locale}
                  active={router.pathname !== '/[lang]' ? `/[lang]/${slug}`.includes(router.pathname) : false}
                >
                  {title}
                </HeaderMenuItem>
              </Link>
            )
          )}
        </HeaderMenu>
      </HeaderLeft>
      <HeaderRight locale={locale}>
        {isInternational() && (
          <>
            <LocaleSwitcher />
            <HeaderSeperator />
          </>
        )}
        
        <div className="links">
          <a href={`${baseUrl}${links?.logIn?.url}`} target={links?.logIn?.newTab ? '_blank' : undefined} rel="noopener">
            <Button text={links?.logIn?.text} buttonType="text" padding="0 30px" />
          </a>
          <a href={`${baseUrl}${links?.signUp?.url}`} target={links?.signUp?.newTab ? '_blank' : undefined} rel="noopener">
            <Button text={links?.signUp?.text} />
          </a>
        </div>
        <div className="material-hamburger-menu">
          <HamburgerMenuButton onClick={() => setSidebarOpen(true)}>
            <img src="/hamburger.svg" />
          </HamburgerMenuButton>
          <MobileMenu
            links={links}
            pages={hamburgerMenu}
            router={router}
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            extra={extra}
          />
        </div>
      </HeaderRight>
    </StyledHeader>
  );
};
