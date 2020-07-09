import styled, { css } from 'styled-components';

import { responsive } from './responsive';

export const StyledHeader = styled.header<{ fix?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 14.5%;
  height: 110px;
  z-index: 1;
  transition: all 0.15s ease-in-out;

  .logo {
    display: flex;
    align-items: center;
  }

  @media ${responsive.lg} {
    padding: 10px 6%;
    height: 100px;
  }

  @media ${responsive.md} {
    padding: 25px 6%;
  }

  @media ${responsive.sm} {
    padding: 14px 6%;
    height: 66px;

    p {
      display: none;
    }

    .logo {
      img {
        max-width: 135px;
      }
    }
  }

  ${({ fix }) =>
    fix &&
    css`
      background-color: #fff;
      box-shadow: 0 6px 6px #a3a1bc29;
    `}
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;

  @media ${responsive.sm} {
    display: none;
  }
`;

export const HeaderMenuItem = styled.a<{ active?: boolean }>`
  cursor: pointer;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0;
  color: ${(props) => (props.active ? '#328af7' : '#79798E')};
  transition: 0.15s ease-in-out;
  padding: 11px 0;
  margin: 0 24px;
  position: relative;

  :hover {
    color: #328af7;
  }

  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 0;
    width: 28px;
    border-radius: 3px;
    left: 0;
    position: absolute;
    background: #328af7;
    transition: 0.15s ease-in-out;
  }

  ${({ active }) =>
    active &&
    css`
      :after {
        height: 3px;
        width: 30px;
      }
    `}
`;

export const HeaderMenuItemDiv = styled.div<{ active?: boolean }>`
  cursor: pointer;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0;
  color: ${(props) => (props.active ? '#328af7' : '#79798E')};
  transition: 0.15s ease-in-out;
  padding: 11px 0;
  margin: 0 24px;
  position: relative;

  :hover {
    color: #328af7;

    & > .header-dropdown {
      visibility: visible;
      opacity: 1;
      top: 106%;
      left: 0;
      max-height: 400px;
    }
  }

  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 0;
    width: 28px;
    border-radius: 3px;
    left: 0;
    position: absolute;
    background: #328af7;
    transition: 0.15s ease-in-out;
  }
`;

export const HeaderMenuDropdown = styled.div`
  max-height: 0;
  opacity: 0;
  background-color: #fff;
  visibility: hidden;
  position: absolute;
  top: 95%;
  left: -2px;
  min-width: 10em;
  text-align: left;
  background-clip: padding-box;
  box-shadow: 1px -1px 17px #a3a1bc29;
  border-radius: 4px;
  transition: all 0.2s, opacity 0.15s;
`;

export const HeaderMenuDropdownItem = styled.a<{ active?: boolean }>`
  padding: 14px 34px;
  color: #79798e;
  font-size: 16px;
  display: block;

  :hover {
    background: #edf8ff;
    color: #328af7;
  }

  ${({ active }) =>
    active &&
    css`
      background: #edf8ff;
      color: #328af7;
    `}
`;

export const Container = styled.div<{ maxWidth?: string }>`
  padding: 0 14.5%;

  @media ${responsive.lg} {
    padding: 0 6%;
  }

  @media ${responsive.md} {
    padding: 0 6%;
  }

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: maxWidth;
    `}
`;

export const Hero = styled.div`
  position: relative;
`;

export const WalletHero = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 60px;

  h1 {
    font-size: 60px;
    line-height: 75px;
    font-weight: normal;
    margin-bottom: 24px;
  }

  h4 {
    font-size: 18px;
    line-height: 30px;
    color: #79798e;
    font-weight: normal;
  }

  @media ${responsive.sm} {
    text-align: center;

    h1 {
      font-size: 34px;
      margin-bottom: 10px;
    }

    h4 {
      font-size: 18px;
    }
  }
`;

export const InnerPage = styled.div`
  padding-top: 100px;

  @media ${responsive.sm} {
    padding-top: 1px;
  }
`;

export const HeroH1 = styled.h1`
  font-size: 60px;
  line-height: 75px;
  letter-spacing: 0;
  margin: 0 0 30px;
  font-weight: 400;

  @media ${responsive.lg} {
    font-size: 46px;
    line-height: 55px;
    margin: 0 0 20px;
  }

  @media ${responsive.md} {
    font-size: 37px;
  }

  @media ${responsive.sm} {
    text-align: center;
    line-height: 35px;
  }
`;

export const HeroH2 = styled.h2`
  font-size: 28px;
  line-height: 46px;
  letter-spacing: 0;
  margin: 0 0 65px;
  font-weight: 400;
  color: #79798e;

  @media ${responsive.lg} {
    font-size: 22px;
    line-height: 36px;
    margin: 0 0 50px;
  }

  @media ${responsive.md} {
    font-size: 20px;
  }

  @media ${responsive.sm} {
    line-height: 34px;
    text-align: center;
    max-width: 100%;
    padding: 0 40px;
    margin: 15px 0 25px;
  }
`;

export const HeroSection = styled.section`
  margin: 80px 0 0;

  @media (min-width: 1200px) {
    overflow: hidden;
  }

  @media ${responsive.lg} {
    margin: 60px 0 0;
  }

  @media ${responsive.sm} {
    margin: 78px 0 0;
  }
`;

export const RegisterButton = styled.button`
  height: 65px;
  padding: 20px 70px;
  background-color: #328af7;
  color: #fff;
  position: relative;
  width: auto;
  border: 0px;
  border-radius: 50px;
  box-shadow: none;
  outline: none;
  transition: all 0.2s ease-in-out;
  font-size: 20px;
  letter-spacing: 0.2px;
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 400;

  img {
    margin-left: 20px;
  }

  svg {
    margin-right: 12px;

    path.icon-background {
      fill: transparent !important;
    }
  }

  path:not(.icon-background) {
    fill: #328af7;
  }

  :hover {
    background-color: #0680ea;
  }

  @media ${responsive.md} {
    height: 55px;
    padding: 12px 55px;
    font-size: 17px;
  }

  @media ${responsive.sm} {
    width: 69%;
    margin: 0 auto;
    display: block;
    height: 48px;
    padding: 10px 29px;
    font-size: 15px;
  }
`;

export const HeroBg = styled.img`
  z-index: -1;
  position: absolute;
  right: 0;
  top: 0;
  max-width: 60%;

  @media ${responsive.lg} {
    max-width: 66%;
  }

  @media ${responsive.sm} {
    max-width: 197%;
  }
`;

export const WalletHeroBg = styled.img`
  z-index: -1;
  position: absolute;
  right: -80px;
  top: 0;
  max-width: 60%;

  @media ${responsive.lg} {
    max-width: 66%;
  }

  @media ${responsive.sm} {
    max-width: 297%;
  }
`;

export const HeroImg = styled.img`
  position: relative;
  right: -20px;
  max-width: 102%;

  @media ${responsive.sm} {
    max-width: 103%;
    top: 45px;
    right: unset;
  }
`;

export const WalletHeroImg = styled.img`
  position: relative;
  right: -25px;
  max-width: 92%;

  @media ${responsive.sm} {
    max-width: 103%;
    top: 45px;
    right: unset;
  }
`;

export const HeroImg2 = styled.img`
  position: absolute;
  top: 31%;
  left: -31%;
  max-height: 55%;

  @media ${responsive.sm} {
    top: 52%;
    left: -6%;
    max-height: 48%;
  }
`;

export const Section = styled.section`
  margin: 125px 0;

  @media ${responsive.lg} {
    margin: 80px 0;
  }
`;

export const CoinsSection = styled.section`
  margin: 125px 0 0;

  @media ${responsive.lg} {
    margin: 80px 0 40px;
  }
`;

export const SolutionImg = styled.img`
  max-width: 100%;
  margin-bottom: 20px;
  border-radius: 15px 15px 0 0;
  max-height: 174px;
`;

export const Solution = styled.a`
  width: 100%;
  max-width: 254px;
  color: #2d2d52;
  display: block;
  margin: 0 auto;
`;

export const AdvantageSection = styled.section`
  padding: 115px 0;
  background: #edf3fa;

  @media ${responsive.lg} {
    padding: 80px 0;
  }
`;

export const AdvantageItem = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  text-align: center;
  padding: 80px 0 0;

  img {
    width: 90px;
    height: 90px;
    margin-bottom: 35px;
  }
`;

export const ClientsImg = styled.img`
  max-width: 525px;
  position: relative;
  width: 100%;
  display: block;
  margin-left: auto;
  right: 20px;

  @media ${responsive.sm} {
    right: 0;
    margin: 40px auto 0;
  }
`;

export const ClientsSection = styled.div`
  @media ${responsive.sm} {
    text-align: center;

    p {
      text-align: center;
    }

    button {
      height: 55px;
      padding: 10px 80px;
      font-size: 17px;
    }
  }
`;

export const CoinsSupported = styled.section`
  margin: 140px 0 20px;

  button {
    display: block;
    margin: 0 auto;
  }

  @media ${responsive.sm} {
    margin: 80px 0 20px;

    button {
      height: 55px;
      padding: 10px 80px;
      font-size: 17px;
    }
  }
`;

export const CoinImages = styled.div<{ height?: string }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: ${(props) => props.height || '130px'};
  margin: 50px 0;
  overflow: hidden;
  position: relative;
  flex-wrap: wrap;

  @media ${responsive.sm} {
    margin: 30px 0;
    height: auto;
  }
`;

export const CoinItem = styled.div`
  flex: 0 0 19%;
  max-width: 19%;
  max-height: 100%;
  display: inline-flex;
  position: relative;
  overflow: hidden;
  padding: 10px 24px;

  :nth-child(1) {
    justify-content: flex-start;
  }

  :nth-child(2),
  :nth-child(3),
  :nth-child(4) {
    justify-content: center;
  }

  :nth-child(4),
  :nth-child(5) {
    justify-content: flex-end;
  }

  @media ${responsive.sm} {
    flex: 0 0 100%;
    max-width: 100%;
    height: 80px;
    justify-content: center !important;
    padding: 10px 75px;

    :nth-child(5) img {
      object-fit: contain;
    }
  }
`;

export const CoinImg = styled.img`
  max-width: 100%;

  @media ${responsive.sm} {
    object-fit: contain;
  }
`;

export const StyledFooter = styled.footer`
  padding: 156px 0 80px;
  position: relative;

  @media ${responsive.sm} {
    padding: 100px 0 50px;
    overflow: hidden;
  }

  @media ${responsive.lg} {
    padding: 120px 0 50px;
  }
`;

export const FooterContainer = styled.div`
  padding: 0 0 70px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media ${responsive.sm} {
    align-items: center;
    justify-content: center;
    padding: 0 0 50px;
  }

  @media ${responsive.lg} {
    padding: 0 0 50px;
  }
`;

export const FooterMenu = styled.div<{ maxHeight?: string; width?: string }>`
  display: flex;
  flex-wrap: wrap;
  max-height: ${(props) => props.maxHeight || '240px'};
  width: ${(props) => props.width || '35%'};

  @media ${responsive.sm} {
    display: none;
  }
`;

export const FooterMenuItem = styled.a<{ flex?: string }>`
  display: inline-flex;
  color: #79798e;
  font-size: 20px;
  margin: 15px 0;
  cursor: pointer;
  flex: ${(props) => props.flex || '0 0 50%'};

  :hover {
    color: #545454;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;

  p {
    padding: 0 10px;
  }

  @media ${responsive.sm} {
    p {
      text-align: center;
    }
  }
`;

export const FooterSocialButtons = styled.div<{ justify?: string; margin?: string }>`
  display: flex;
  justify-content: ${(props) => props.justify || 'flex-start'};
  margin: ${(props) => props.margin || '30px 0 0'};

  a {
    transition: 0.2s;
    margin-left: 25px;

    :hover {
      filter: brightness(1.02);
    }
  }

  @media ${responsive.lg} {
    a,
    img {
      width: 52px;
      height: 52px;
    }
  }

  @media ${responsive.sm} {
    justify-content: center;

    a {
      margin: 0 13px;
    }
  }
`;

export const FooterBg1 = styled.img`
  z-index: -1;
  position: absolute;
  left: 0;
  bottom: 0;
  max-width: 50%;

  @media ${responsive.lg} {
    max-width: 60%;
    left: -110px;
  }

  @media ${responsive.sm} {
    max-width: 138%;
    left: -36px;
  }
`;

export const FooterBg2 = styled.img`
  z-index: -1;
  position: absolute;
  right: 0;
  bottom: 0;

  @media ${responsive.lg} {
    max-width: 29%;
  }

  @media ${responsive.sm} {
    display: none;
  }
`;

export const HamburgerMenuButton = styled.div`
  cursor: pointer;

  img {
    opacity: 0.5;
  }

  :hover {
    filter: brightness(1.02);
  }
`;

export const MobileMenuContainer = styled.div`
  height: auto;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 40px;

  .social-buttons {
    a,
    img {
      width: 48px;
      height: 48px;
    }
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  a.logo {
    display: flex;
    justify-content: center;
    margin: 10px 0 40px;

    img {
      max-width: 170px;
    }
  }
`;

export const MobileMenuItem = styled.a<{ active: boolean }>`
  cursor: pointer;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0;
  color: ${(props) => (props.active ? '#328af7' : '#79798E')};
  transition: 0.15s ease-in-out;
  padding: 14px 34px;
  position: relative;

  ${({ active }) =>
    active &&
    css`
      :after {
        height: 3px;
        width: 30px;
      }
    `}
`;

export const CoinModalContainer = styled.div`
  height: 72%;
  position: relative;
  overflow: auto;
  padding: 0 50px;
  margin: 0 10px;

  .coin-item {
    padding: 10px 24px;
    height: 100px;
    flex: 0 0 20%;
    max-width: 20%;

    img {
      object-fit: contain;
    }
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f9f9f97a;
  }

  ::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
    background-color: #d9d9eb;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 18px;
    background-color: #c4c4cc;
  }

  @media ${responsive.lg} {
    height: 54%;

    .coin-images {
      margin: 20px 0 0;
    }
  }

  @media (max-width: 80rem) {
    height: 52%;
    padding: 0 20px;

    .coin-images {
      margin: 20px 0 0;
    }
  }

  @media ${responsive.sm} {
    height: auto;

    .coin-item {
      padding: 6px 10px;
      height: 100px;
      flex: 0 0 45%;
      max-width: 45%;

      img {
        object-fit: contain;
      }
    }
  }
`;
