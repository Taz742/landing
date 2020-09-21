import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Hidden, useScrollTrigger } from '@material-ui/core';

import LocaleSwitcher from '@/components/locale-swither';
import Button from '@/components/library/button';
import MobileMenu from '@/components/pc-drawer';
import { StyledHeader, HeaderLeft, HeaderRight, HeaderMenu, HeaderMenuItem, HamburgerMenuButton, HeaderSeperator } from '@/styled';
import config from '@/utils/config';
import useTranslation from '@/hooks/useTranslation';
import { DataContext } from '@/context/app-context';

export const Header = ({ notFoundPage }: any) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const { t, locale } = useTranslation();
  const { data } = React.useContext(DataContext);
  const headerMenu = data.pages.headerMenu;
  const footerMenu = data.pages.footerMenu;
  const hamburgerMenu = [...headerMenu, ...footerMenu].filter((v, i, a) => a.findIndex((t) => t.slug === v.slug) === i);
  const extra = data.pages?.extra || {};

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
          {headerMenu.map(({ title = '', slug = '', url = '', blank = '' }) =>
            blank ? (
              <HeaderMenuItem locale={locale} href={`${url}?lang=${locale}`} key={title} target="_blank" rel="noopener">
                {title}
              </HeaderMenuItem>
            ) : (
              <Link href={`/[lang]/${slug}`} as={`/${locale}/${slug}`} key={`${title}-${router.query.lang}`} passHref>
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
        <LocaleSwitcher />
        <HeaderSeperator />
        <div className="links">
          <a href={`${config.targetWebsite}?login=true&lang=${locale}`} target="_blank" rel="noopener">
            <Button text={t('Sign In')} buttonType="text" padding="0 30px" />
          </a>
          <a href={`${config.targetWebsite}?register=true&lang=${locale}`} target="_blank" rel="noopener">
            <Button text={t('Sign Up')} />
          </a>
        </div>
        <Hidden mdUp>
          <div>
            <HamburgerMenuButton onClick={() => setSidebarOpen(true)}>
              <img src="/hamburger.svg" />
            </HamburgerMenuButton>
            <MobileMenu pages={hamburgerMenu} router={router} open={sidebarOpen} onClose={() => setSidebarOpen(false)} extra={extra} />
          </div>
        </Hidden>
      </HeaderRight>
    </StyledHeader>
  );
};
