import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Hidden, useScrollTrigger } from '@material-ui/core';

import Button from '@/components/library/button';
import MobileMenu from '@/components/pc-drawer';
import {
  StyledHeader,
  HeaderMenu,
  HeaderMenuItem,
  HamburgerMenuButton,
  HeaderMenuDropdown,
  HeaderMenuDropdownItem,
  HeaderMenuItemDiv
} from '@/styled';
import config from '@/utils/config';

export const Header = (props: any) => {
  const pages: any[] = Object.values(props.headerMenu);
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  return (
    <StyledHeader fix={trigger}>
      <Link href="/">
        <a className="logo">
          <img src="/main_logo.svg" />
        </a>
      </Link>
      <HeaderMenu>
        {pages.map(({ children = [], title = '', slug = '' }) => {
          if (children.length > 0) {
            return (
              <HeaderMenuItemDiv key={title}>
                <span>{title}</span>
                <HeaderMenuDropdown className="header-dropdown">
                  {children.map((i: any) => (
                    <Link href={`/${i.slug}`} key={i.title} passHref>
                      <HeaderMenuDropdownItem key={i.title} active={router.pathname === `/${i.slug}`}>
                        {i.title}
                      </HeaderMenuDropdownItem>
                    </Link>
                  ))}
                </HeaderMenuDropdown>
              </HeaderMenuItemDiv>
            );
          }

          return (
            <Link href={`/${slug}`} key={title} passHref>
              <HeaderMenuItem active={router.pathname === `/${slug}`}>{title}</HeaderMenuItem>
            </Link>
          );
        })}
        <a href={`${config.targetWebsite}/login`} target="_blank" rel="noopener" style={{ marginLeft: '24px' }}>
          <Button text="Login" />
        </a>
      </HeaderMenu>
      <Hidden smUp>
        <div>
          <HamburgerMenuButton onClick={() => setSidebarOpen(true)}>
            <img src="/hamburger.svg" />
          </HamburgerMenuButton>
          <MobileMenu pages={props.pages} router={router} open={sidebarOpen} onClose={() => setSidebarOpen(false)} extra={props.extra} />
        </div>
      </Hidden>
    </StyledHeader>
  );
};
