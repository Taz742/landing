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
  height: 100px;
  z-index: 1;
  transition: all 0.15s ease-in-out;

  .logo {
    color: #f4f5fa;
    cursor: pointer;

    img {
      width: 140px;
    }
  }

  @media ${responsive.lg} {
    padding: 10px 10%;
  }

  @media ${responsive.md2} {
    padding: 25px 7%;
  }

  @media ${responsive.sm} {
    padding: 14px 7%;
    height: 66px;

    p {
      display: none;
    }

    .logo {
      img {
        max-width: 120px;
        position: relative;
        top: 4px;
      }
    }
  }

  ${({ fix }) =>
    fix &&
    css`
      background-color: #1c2730;
      box-shadow: 0 2px 7px #000;
    `}
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const HeaderMenuItem = styled.a<{ active?: boolean; locale: 'ka' | 'en' }>`
  cursor: pointer;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0;
  color: ${(props) => (props.active ? '#4A6DFF' : '#DBE2ED')};
  transition: all 0.15s ease-in-out, font-size 0s;
  padding: 11px 0;
  margin: ${({ locale }) => (locale === 'ka' ? '0 10px' : '0 24px')};
  position: relative;

  :hover {
    color: #4A6DFF;
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
    background: #4A6DFF;
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

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderRight = styled.div<{ locale?: 'ka' | 'en' }>`
  display: flex;
  align-items: center;

  .links {
    display: flex;
    align-items: center;
    @media (max-width: 1400px) {
      display: none;
    }
  }

  .material-hamburger-menu {
    display: none;

    @media (max-width: 1400px) {
      display: block;
    }
  }

  button {
    font-size: ${({ locale }) => (locale === 'ka' ? '12px' : '16px')};
  }
`;

export const LanguageChangerWrapper = styled.div`
  font-size: 12px;
  line-height: 1.75;
  letter-spacing: 0.02px;
  color: #b3c6d8;
  padding-top: 1px;
  cursor: pointer;
  svg {
    margin: 0px 0 3px 6px;
  }

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const HeaderSeperator = styled.div`
  background: #829cb4;
  opacity: 0.1;
  width: 2px;
  height: 21px;
  margin: 0 18px 0 18px;
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
    padding: 0 10%;
  }

  @media ${responsive.md2} {
    padding: 0 7%;
  }

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
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
  background-color: #4A6DFF;
  color: #fff;
  position: relative;
  width: auto;
  border: 0px;
  border-radius: 8px;
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
  }

  @media ${responsive.md} {
    height: 55px;
    padding: 12px 55px;
    font-size: 17px;
  }

  @media ${responsive.sm} {
    width: auto;
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

// export const CoinItem = styled.div`
//   flex: 0 0 19%;
//   max-width: 19%;
//   max-height: 100%;
//   display: inline-flex;
//   position: relative;
//   overflow: hidden;
//   padding: 10px 24px;

//   :nth-child(1) {
//     justify-content: flex-start;
//   }

//   :nth-child(2),
//   :nth-child(3),
//   :nth-child(4) {
//     justify-content: center;
//   }

//   :nth-child(4),
//   :nth-child(5) {
//     justify-content: flex-end;
//   }

//   @media ${responsive.sm} {
//     flex: 0 0 100%;
//     max-width: 100%;
//     height: 80px;
//     justify-content: center !important;
//     padding: 10px 75px;

//     :nth-child(5) img {
//       object-fit: contain;
//     }
//   }
// `;

export const CoinImg = styled.img`
  max-width: 100%;

  @media ${responsive.sm} {
    object-fit: contain;
  }
`;

export const StyledFooter = styled.footer`
  padding: 156px 0 80px;
  position: relative;
  background-color: #1c2730;

  @media ${responsive.lg} {
    padding: 120px 0 50px;
  }

  @media ${responsive.sm} {
    padding: 60px 0 40px;
    overflow: hidden;
  }
`;

export const FooterContainer = styled.div`
  padding: 0 0 70px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media ${responsive.lg} {
    padding: 0 0 50px;
  }

  @media ${responsive.sm} {
    align-items: center;
    justify-content: center;
    padding: 0 0 50px;
    flex-direction: column;
  }
`;

export const FooterAboutUs = styled.div<{ locale?: 'ka' | 'en' }>`
  color: #c4c9d1;
  display: flex;
  flex-direction: column;
  color: #c4c9d1;

  @media ${responsive.sm} {
    text-align: center;
  }

  a {
    img {
      margin-right: 12px;
    }
  }

  p {
    text-indent: 10px;
  }

  h3 {
    margin-bottom: 10px;
    font-size: ${({ locale }) => (locale === 'ka' ? '20px' : '26px')};
  }

  @media ${responsive.sm} {
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
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

export const FooterMenuItem = styled.a<{
  flex?: string;
  type?: string;
  locale?: 'ka' | 'en';
}>`
  display: inline-flex;
  color: #c4c9d1;
  font-size: ${({ locale }) => (locale === 'ka' ? '16px' : '20px')};
  margin: 15px 0;
  cursor: pointer;
  flex: ${(props) => props.flex || '0 0 50%'};

  :hover {
    color: #ffffff;
  }

  @media ${responsive.lg} {
    font-size: ${({ locale }) => (locale === 'ka' ? '14px' : '18px')};
  }

  ${({ type }) =>
    type === 'info' &&
    css`
      cursor: default;

      :hover {
        color: #c4c9d1;
      }

      .logo {
        width: 20px;
        margin-right: 12px;
      }
    `}
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  align-self: flex-end;

  p {
    padding: 0 10px;
  }

  @media ${responsive.md2} {
    align-self: center;

    p {
      text-align: center;
    }
  }
`;

export const FooterSocialButtons = styled.div<{ justify?: string; margin?: string }>`
  display: flex;
  justify-content: ${(props) => props.justify || 'flex-end'};
  margin-bottom: 30px;
  align-items: flex-end;

  a {
    transition: 0.2s;

    &:not(:first-child) {
      margin-left: 14px;
    }

    :hover {
      filter: brightness(0.8);
    }
  }

  @media ${responsive.lg} {
    a,
    img {
      width: 40px;
      height: 40px;
    }
  }

  @media ${responsive.md2} {
    justify-content: center;

    a {
      margin: 0 13px;
    }
  }
`;

export const Copyright = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  color: #79798e;

  img {
    margin-right: 6px;
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
    opacity: 0.8;
  }

  :hover {
    filter: brightness(1.02);
  }
`;

export const MobileMenuContainer = styled.div`
  /* height: 100%;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 40px;
  overflow-y: auto; */

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
      max-height: 100px;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    padding: 0 0 16px;
    border-bottom: 1px solid #c1c1c1;
    margin: 0 34px 14px;

    a {
      padding: 14px 0;
    }
  }
`;

export const MobileMenuItem = styled.a<{ active?: boolean }>`
  cursor: pointer;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0;
  color: ${(props) => (props.active ? '#328af7' : '#79798E')};
  transition: 0.15s ease-in-out;
  padding: 14px 34px;
  position: relative;
  color: #484848;
  font-weight: 500;

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

export const OtcComp = styled.div`
  margin-top: -440px;

  @media ${responsive.md} {
    margin-top: -380px;
  }

  @media ${responsive.sm} {
    margin-top: -530px;
  }

  .otc-item {
    display: flex;
    margin-top: 60px;

    @media screen and (max-width: 992px) {
      margin-top: 25px;
    }

    & > div {
      border-radius: 15px;
      /* height: 260px; */
      margin-right: 2%;
      background: #fff;
      flex: 1;
      align-content: center;
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 60px 0 50px 0;
      -webkit-box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.1);

      @media screen and (max-width: 992px) {
        margin-bottom: 30px;
      }

      div {
        width: 100px;
        height: 70px;
        margin: 0 auto;
        padding-top: 25px;
        background: url('/images/otc.svg');
      }

      span {
        margin-top: 30px;
        color: #6c7686;
      }

      img {
        height: 55px;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const TopCoins = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 40px 0;
  margin-top: 70px;
  display: flex;
  margin-bottom: 100px;
  box-shadow: 0px 3px 15px #6666661f;

  @media ${responsive.md} {
    padding: 20px 0;
    margin-top: 25px;
    margin-bottom: 50px;
  }

  @media ${responsive.sm} {
    padding: 26px 0 0;
    margin-top: 80px;
    margin-bottom: 50px;
    flex-wrap: wrap;
  }
`;

export const TopCoinItem = styled.div`
  text-align: center;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    width: 60px;
  }

  &:not(:last-child) {
    &:before {
      content: '';
      position: absolute;
      right: 0;
      height: 150px;
      width: 0;
      border: 1px solid #e6e8f2;
      top: 18px;
    }
  }

  @media ${responsive.md} {
    margin-bottom: 30px;
  }

  @media ${responsive.sm} {
    flex: 0 0 50%;

    :nth-child(n + 5) {
      display: none;
    }

    :nth-child(even) {
      :before {
        border-color: transparent !important;
      }
    }

    :nth-child(odd) {
      :before {
        content: '';
        position: absolute;
        right: 0;
        height: 150px;
        width: 0;
        border: 1px solid #e6e8f2;
        top: 18px;
      }
    }
  }
`;

export const TopCointLastTradePrice = styled.p`
  color: #242a33;
  font-size: 32px;
  margin: 18px 0 8px 0;
  height: 38px;
  font-weight: 500;

  @media ${responsive.md} {
    font-size: 22px;
  }
`;

export const TopCoinBaseVolume = styled.p`
  color: #6c7686;
  margin: 0 0 18px 0;
  height: 19px;

  span {
    color: black;
  }
`;

export const TopCoinPricePercent = styled.p<{ ltZero: boolean }>`
  color: ${({ ltZero }) => (ltZero ? 'red' : '#06b787')};
  margin: 0;

  span {
    padding-left: 5px;
  }
`;

export const WhyComp = styled.div`
  background-color: #1c2730;
  padding: 140px 0 40px 0px;

  @media ${responsive.sm} {
    padding: 100px 0 40px 0px;
  }

  h2 {
    margin-bottom: 100px;

    @media ${responsive.sm} {
      text-align: center;
    }
  }
`;

export const SolutionsBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${responsive.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

export const SolutionItem = styled.div`
  float: left;
  width: 22%;
  margin-right: 3%;
  margin-bottom: 100px;

  @media ${responsive.md} {
    margin-bottom: 50px;
  }

  @media ${responsive.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  &:nth-child(4n) {
    margin-right: 0px;
  }

  img {
    height: 55px;
  }

  h5 {
    color: #ffffff;
    font-weight: normal;
    padding: 0;
    margin: 35px 0 15px 0;

    @media screen and (max-width: 992px) {
      font-size: 20px;
      margin: 20px 0 12px 0;
    }
  }

  p {
    padding: 0;
    margin: 0;
    color: #6c7686;
  }
`;

export const CoinsComp = styled.div`
  background-color: #fff;
  padding: 120px 0 0px 0;

  @media screen and (max-width: 992px) {
    padding-top: 60px;
  }

  h2 {
    color: #242a33;
    padding: 0;
    margin: 0 0 90px 0;
    font-weight: normal;

    @media screen and (max-width: 992px) {
      margin: 0 0 45px 0;
      font-size: 34px;
      text-align: center;
    }
  }
`;

export const CoinsBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${responsive.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

export const CoinItem = styled.div`
  flex: 0 0 18%;
  margin-right: 1.25%;
  margin-bottom: 80px;
  display: inline-flex;
  align-items: center;

  @media ${responsive.md} {
    margin-right: 0;
    margin-bottom: 40px;
  }

  @media ${responsive.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &:nth-child(5n) {
    margin-right: 0px;
  }

  img {
    width: 55px;
    height: 55px;
    object-fit: contain;
    margin-right: 20px;

    @media ${responsive.sm} {
      margin-right: 0;
    }
  }

  h5 {
    color: #6c7686;
    font-weight: normal;

    @media ${responsive.sm} {
      text-align: center;
      margin-top: 20px;
    }

    a {
      font-size: 16px;
      color: #a5b1c3;
    }
  }
`;

export const SimpleTrade = styled.div<{ locale?: 'ka' | 'en' }>`
  display: flex;
  flex-direction: column;

  .trade-right {
    width: auto;
    display: flex;

    .coin {
      width: 193px;
      height: 47px;
      float: left;
      margin-right: 16px;
      border: 1px solid #cdd6e3;
      position: relative;
      border-radius: 8px;

      @media ${responsive.sm} {
        width: 60%;
      }

      &:hover {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      }

      .active-coin {
        font-size: 16px;
        color: #6c7686;
        position: relative;
        height: 50px;
        cursor: pointer;
        padding: 13px 26px;
        font-weight: 500;

        img {
          position: absolute;
          top: 21px;
          right: 15px;
          width: 9px;
        }
      }

      .coin-list-dropdown {
        position: absolute;
        top: 100%;
        width: calc(100% + 2px);
        margin-left: -1px;
        z-index: 2;
        background: #fafafa;
        max-height: 0px;
        overflow: hidden;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;

        p {
          margin: 0;
          padding: 15px 10px;
          font-size: 15px;
          color: #6c7686;
          border: 1px solid #cdd6e32e;
          /* border-radius: 8px; */
          /* border-bottom: 1px solid #cdd6e3; */
          cursor: pointer;
          font-weight: 500;

          &:hover {
            background: #e2e2e2;
          }
        }
      }

      &.active {
        .coin-list-dropdown {
          max-height: 500px;
        }
      }
    }

    .currency {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 104px;
      height: 50px;
      background: rgba(101, 130, 253, 0.3) 0% 0% no-repeat padding-box;
      border-radius: 8px;
      text-align: center;
      padding-left: 10px;
      padding-right: 10px;

      @media ${responsive.sm} {
        width: 35%;
        margin-left: 5%;
      }

      .value {
        font-size: 16px;
        color: #4A6DFF;
        text-transform: uppercase;
        font-weight: 500;
      }

      .left {
        cursor: pointer;
        width: 0px;
        height: 0px;
        border-top: 4.5px solid transparent;
        border-bottom: 4.5px solid transparent;
        border-right: 6.5px solid #4A6DFF;
      }

      .right {
        cursor: pointer;
        width: 0px;
        height: 0px;
        border-top: 4.5px solid transparent;
        border-bottom: 4.5px solid transparent;
        border-left: 6.5px solid #4A6DFF;
      }
    }
  }

  h3 {
    color: #242a33;
    font-size: ${({ locale }) => (locale === 'ka' ? '40px' : '58px')};
    font-weight: normal;
    margin: 0 0 50px 0;

    @media screen and (max-width: 992px) {
      font-size: 33px;
      margin: 0 0 25px 0;
    }
  }

  .tabs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 45px;

    @media screen and (max-width: 992px) {
      margin-bottom: 22px;
      margin-top: 20px;
    }

    button {
      flex: 1;
      height: 60px;
      font-size: 18px;
      border: 0;
      outline: none;
      cursor: pointer;
      font-weight: 500;
      text-transform: capitalize;

      @media screen and (max-width: 992px) {
        height: 50px;
      }

      &.tab-bid {
        background: rgb(8, 170, 125, 0.15);
        color: rgb(8, 170, 125);

        &.active,
        &:hover {
          background: rgb(8, 170, 125, 1);
          color: #ffffff;
        }
      }

      &.tab-sell {
        background-color: rgb(216, 89, 71, 0.15);
        color: rgb(216, 89, 71);

        &.active,
        &:hover {
          background-color: rgb(216, 89, 71, 1);
          color: #ffffff;
        }
      }
    }
  }

  .tabs-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;

    @media ${responsive.sm} {
      margin: 0;
    }

    .tab-coin {
      margin: 0 15px;
      flex: 1;
      background-color: #ffffff;
      box-shadow: 0px 6px 12px #edeef2c6;
      border-radius: 11px;
      padding: 30px 0;
      font-weight: 500;
      width: 18.3%;

      @media ${responsive.sm} {
        margin: 0;
        padding: 30px 15px;
        margin-bottom: 25px;
        min-width: 100%;
      }

      button {
        background-color: rgba(101, 130, 253, 0.1);
        width: 100%;
        border-radius: 6px;
        border: 0;
        outline: none;
        color: #4A6DFF;
        font-size: 14px;
        height: 42px;
        width: 80%;
        margin-left: 10%;
        cursor: pointer;
      }

      p {
        color: #6c7686;
        font-size: 13px;
        text-align: center;

        span {
          display: block;
          color: #333;
          font-weight: 500;
          font-size: 14px;
          margin-top: 5px;
        }
      }

      h4 {
        color: #43484e;
        font-size: 36px;
        margin: 35px 0 45px 0;
        text-align: center;
        font-weight: 600;

        span {
          font-size: 76%;
          margin-left: 6px;
        }

        @media screen and (max-width: 992px) {
          font-size: 30px;
          margin: 25px 0 20px 0;
        }
      }

      .inputs {
        height: 110px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        ::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: #6c7686;
          opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: #6c7686;
        }

        ::-ms-input-placeholder {
          /* Microsoft Edge */
          color: #6c7686;
        }

        input {
          border: 1px solid #cdd6e3;
          border-radius: 6px;
          height: 40px;
          width: 100%;
          outline: none;
          text-indent: 15px;
          font-size: 11px;
          color: #6c7686;
          font-weight: 500;

          &:hover {
            border: 1px solid #4A6DFF;
          }
        }

        .instant-input {
          position: relative;
          margin: 0 10% 8px;
          width: 80%;

          span {
            position: absolute;
            right: 16px;
            top: 14px;
            font-size: 11px;
            color: #6c768680;
            font-weight: 500;
          }
        }
      }
    }
  }
`;

export const SimpleTradeTop = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${responsive.sm} {
    flex-direction: column;
  }
`;

export const SimpleTradeLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 100px;

  @media screen and (max-width: 992px) {
    margin-bottom: 60px;
    margin-top: 30px;
  }

  @media ${responsive.sm} {
    flex-direction: column-reverse;
  }

  .line {
    flex: 1;
    height: 9px;
    background-color: #f2f3f6;

    @media ${responsive.sm} {
      width: 100%;
    }

    .active-line {
      width: 30%;
      height: 9px;
      transition: all 0.1s ease;
      border-radius: 12px;
      background: transparent linear-gradient(90deg, #08aa7d 0%, #2765c9 100%) 0% 0% no-repeat padding-box;

      &.active-line-ask {
        background: transparent linear-gradient(90deg, #f7a13c 0%, #d85947 100%) 0% 0% no-repeat padding-box;
      }
    }
  }

  .line-data {
    color: #6c7686;
    font-size: 16px;
    margin-left: auto;
    color: #6c7686;
    font-size: 16px;
    text-align: right;
    position: relative;
    top: -16px;
    margin-left: 20px;

    @media ${responsive.sm} {
      margin-left: 0;
      text-align: left;
      width: 100%;
    }

    span {
      color: #4A6DFF;
    }

    img {
      margin-right: 12px;
      position: relative;
      top: 5px;
    }
  }
`;

export const WeAreHiringBox = styled.div`
  background-color: #1c2730;
  min-height: 557px;
  margin-bottom: 100px;
  display: flex;

  img {
    flex: 0 0 50%;
    max-width: 50%;
    object-fit: cover;

    @media ${responsive.md} {
      display: none;
    }
  }

  .hiring-container {
    display: flex;
  }

  @media ${responsive.lg} {
    background-size: 50% 100%;
  }

  @media ${responsive.md2} {
    margin-bottom: 50px;
  }

  @media ${responsive.md} {
    padding: 0px 20px;
    background-image: none;
    min-height: 100%;

    .hiring-container {
      padding: 0;
      height: 100%;
    }
  }
`;

export const WeAreHiring = styled.div<{ locale?: 'ka' | 'en' }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  padding: 20px 40px 20px 0px;
  flex: 1;

  @media ${responsive.md} {
    width: 100%;
    min-height: 100%;
    align-items: center;
    padding: 40px 0px;
  }

  @media ${responsive.sm} {
    text-align: center;
  }

  h2 {
    color: #ffffff;
    margin-bottom: 30px;

    @media ${responsive.md} {
      margin-bottom: 20px;
    }
  }

  span {
    color: #707b8d;
    line-height: 150%;
  }

  button {
    height: 65px;
    padding: 20px 70px;
    background-color: rgba(101, 130, 253, 0.1);
    color: #4A6DFF;
    width: auto;
    max-width: 280px;
    width: 50%;
    border: 0px;
    border-radius: 8px;
    box-shadow: none;
    outline: none;
    transition: all 0.2s ease-in-out;
    font-size: 20px;
    cursor: pointer;
    margin-top: 50px;

    @media ${responsive.md} {
      margin-top: 40px;
    }

    @media ${responsive.sm} {
      width: auto;
    }
  }
`;

export const ContactUsContainer = styled.div`
  h2 {
    margin-bottom: 90px;

    @media ${responsive.lg} {
      margin-bottom: 60px;
    }

    @media ${responsive.sm} {
      margin-bottom: 30px;
      text-align: center;
    }
  }
`;

export const ContactUsBox = styled.div`
  padding: 0 0 90px;
  display: flex;
  justify-content: space-between;

  h5 {
    margin-top: 20px;
    font-weight: 400;
  }

  a:hover {
    filter: opacity(0.8);
  }

  @media ${responsive.lg} {
    padding: 0 0 50px;
  }

  @media ${responsive.sm} {
    flex-direction: column;
  }
`;

export const OurAddress = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 190px; */
  height: auto;

  img {
    width: 49px;
    height: 49px;
  }

  @media ${responsive.sm} {
    max-width: 100%;
    flex: 1 1 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const OurAddressContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  p {
    color: #6c7686;
    line-height: 150%;
    font-size: 14px;

    &:not(:first-child) {
      margin-top: 6px;
    }

    @media ${responsive.sm} {
      &:not(:first-child) {
        margin-top: 16px;
      }
    }
  }

  @media ${responsive.sm} {
    text-align: center;
    justify-content: center;
  }
`;

export const WriteUs = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  /* width: 265px; */
  /* margin-left: 180px; */

  @media ${responsive.sm} {
    margin-left: 0;
    margin-top: 50px;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 49px;
    height: 49px;
  }
`;

export const WriteUsContent = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 300px;

  @media ${responsive.sm} {
    flex-direction: column;
  } */

  p {
    color: #6c7686;
    line-height: 150%;
    font-size: 14px;

    :nth-child(3n+2) {
      margin-bottom: 36px;
    }

    @media ${responsive.sm} {
      &:not(:first-child) {
        margin-top: 16px;
      }
    }
  }
`;

export const Connect = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;

  @media ${responsive.sm} {
    margin-left: 0;
    margin-top: 50px;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 49px;
    height: 49px;
  }

  p {
    color: #6c7686;
    line-height: 150%;
    font-size: 14px;
  }
`;

export const ConnectIcons = styled.div`
  margin-top: 14px;

  a {
    &:not(:first-child) {
      margin-left: 10px;
    }
  }

  @media ${responsive.sm} {
    margin-top: 30px;
  }
`;

export const FeesBox = styled.div`
  display: flex;
  flex-flow: row wrap;

  @media ${responsive.sm} {
    justify-content: space-between;
  }
`;

export const FeesItem = styled.div<{ locale?: 'ka' | 'en' }>`
  margin: 15px 32px 90px 0;
  flex: 0 0 23%;
  background-color: #ffffff;
  box-shadow: 0 6px 10px #a3a1bc29;
  border-radius: 15px;
  padding: 50px 60px;

  &:nth-child(4) {
    margin: 15px 0 90px;
  }

  p.percent {
    font-size: 44px;
    color: #4A6DFF;
    font-weight: 500;

    @media ${responsive.md} {
      font-size: 32px;
    }

    @media ${responsive.sm} {
      font-size: 24px;
    }
  }

  p.title {
    color: #6c7686;
    font-weight: 500;
    margin-top: 10px;
    font-size: ${({ locale }) => (locale === 'ka' ? '14px' : '18px')};
  }

  @media ${responsive.lg} {
    flex: 0 0 22%;
    padding: 40px;
    margin: 15px 32px 50px 0;

    &:nth-child(4) {
      margin: 15px 0 50px;
    }
  }

  @media ${responsive.md} {
    flex: 0 0 22%;
    padding: 30px;
    margin: 15px 28px 30px 0;

    &:nth-child(4) {
      margin: 15px 0 30px;
    }
  }

  @media ${responsive.sm} {
    flex: 0 0 46%;
    margin: 0 0 30px;
  }
`;
