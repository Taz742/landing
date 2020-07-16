import React from 'react';
import Link from 'next/link';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { MobileMenuContainer, MobileMenu, MobileMenuItem, FooterSocial, FooterSocialButtons } from '@/styled';
import { Subtext } from '@/styled/typography';
import useTranslation from '@/hooks/useTranslation';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: '80%',
        flexShrink: 0
      }
    },
    drawerPaper: {
      width: '80%'
    },
    content: {
      flexGrow: 1
    }
  })
);

export const PcDrawer: React.FC<ResponsiveDrawerProps> = (props: ResponsiveDrawerProps) => {
  const { open, onClose, pages, router, extra } = props;
  const classes = useStyles();
  const { locale } = useTranslation();

  return (
    <nav className={classes.drawer}>
      <Drawer
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="right"
        open={open}
        onClose={onClose}
      >
        <MobileMenuContainer>
          <MobileMenu>
            {/* <Link href="/[lang]" as={`/${locale}`}>
              <a className="logo">
                <img src="/main_logo.svg" />
              </a>
            </Link> */}
            {pages.map((page: any, i: number) => (
              <Link href={`/[lang]/${page.slug}`} as={`/${locale}/${page.slug}`} key={i} passHref>
                <MobileMenuItem active={router.pathname === `/${page.slug}`} onClick={onClose}>
                  {page.title}
                </MobileMenuItem>
              </Link>
            ))}
          </MobileMenu>
          <FooterSocial>
            <FooterSocialButtons justify="flex-end" margin="0 4px 30px" className="social-buttons">
              <a href={extra.linkedin} target="_blank" rel="noopener">
                <img src="/linkedin.svg" />
              </a>
              <a href={extra.facebook} target="_blank" rel="noopener">
                <img src="/fb.svg" />
              </a>
            </FooterSocialButtons>
            <Subtext align="center" size="16px" opacity="0.7">
              <img src="/copyright.svg" style={{ position: 'relative', marginRight: '10px', top: '3px' }} />
              <span>{extra.copy}</span>
            </Subtext>
          </FooterSocial>
        </MobileMenuContainer>
      </Drawer>
    </nav>
  );
};

interface ResponsiveDrawerProps {
  open: boolean;
  onClose: () => any;
  pages: any[];
  router: any;
  extra: any;
}

export default PcDrawer;
