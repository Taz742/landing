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

export const Header = (props: any) => {
  const pages: any[] = Object.values(props.headerMenu);
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const { locale } = useTranslation();

  return (
    <StyledHeader fix={trigger}>
      <HeaderLeft>
        <Link href="/[lang]" as={`/${locale}`}>
          <div className="logo">
            <H2>GEX</H2>
          </div>
        </Link>
        <HeaderMenu>
          {pages.map(({ title = '', slug = '' }) => {
            // if (children.length > 0) {
            //   return (
            //     <HeaderMenuItemDiv key={title}>
            //       <span>{title}</span>
            //       <HeaderMenuDropdown className="header-dropdown">
            //         {children.map((i: any) => (
            //           <Link href={`/${i.slug}`} key={i.title} passHref>
            //             <HeaderMenuDropdownItem key={i.title} active={router.pathname === `/${i.slug}`}>
            //               {i.title}
            //             </HeaderMenuDropdownItem>
            //           </Link>
            //         ))}
            //       </HeaderMenuDropdown>
            //     </HeaderMenuItemDiv>
            //   );
            // }

            return (
              <Link href={`/${slug}`} key={title} passHref>
                <HeaderMenuItem active={router.pathname === `/${slug}`}>{title}</HeaderMenuItem>
              </Link>
            );
          })}
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
          <MobileMenu pages={props.pages} router={router} open={sidebarOpen} onClose={() => setSidebarOpen(false)} extra={props.extra} />
        </div>
      </Hidden>
    </StyledHeader>
  );
};
