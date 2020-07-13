import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Hidden, useScrollTrigger } from '@material-ui/core';

import LocaleSwitcher from '@/components/locale-swither';
import Button from '@/components/library/button';
import MobileMenu from '@/components/pc-drawer';
import {
  StyledHeader,
  HeaderLeft,
  HeaderRight,
  HeaderMenu,
  HeaderMenuItem,
  HamburgerMenuButton,
  HeaderSeperator
  // HeaderMenuDropdown,
  // HeaderMenuDropdownItem,
  // HeaderMenuItemDiv,
} from '@/styled';
import config from '@/utils/config';
import { H2 } from '@/styled/typography';
import useTranslation from '@/hooks/useTranslation';
import { DataContext } from '@/context/app-context';

export const Header = () => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const { locale } = useTranslation();
  const { data } = React.useContext(DataContext);
  const pages = data.menu;

  return (
    <StyledHeader fix={trigger}>
      <HeaderLeft>
        <Link href="/[lang]" as={`/${locale}`}>
          <div className="logo">
            <H2>GEX</H2>
          </div>
        </Link>
        <HeaderMenu>
          {pages.map(({ title = '', slug = '' }) => (
            <Link href={`/[lang]/${slug}`} as={`/${locale}/${slug}`} key={title} passHref>
              <HeaderMenuItem active={router.pathname === `/${slug}`}>{title}</HeaderMenuItem>
            </Link>
          ))}
        </HeaderMenu>
      </HeaderLeft>
      <HeaderRight>
        <LocaleSwitcher />
        <HeaderSeperator />
        <a href={`${config.targetWebsite}/login`} target="_blank" rel="noopener">
          <Button text="Sign in" />
        </a>
      </HeaderRight>
      <Hidden smUp>
        <div>
          <HamburgerMenuButton onClick={() => setSidebarOpen(true)}>
            <img src="/hamburger.svg" />
          </HamburgerMenuButton>
          <MobileMenu pages={pages} router={router} open={sidebarOpen} onClose={() => setSidebarOpen(false)} extra={{}} />
        </div>
      </Hidden>
    </StyledHeader>
  );
};
