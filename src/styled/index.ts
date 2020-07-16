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
  }

  @media ${responsive.lg} {
    padding: 10px 10%;
  }

  @media ${responsive.md} {
    padding: 25px 10%;
  }

  @media ${responsive.sm} {
    padding: 14px 10%;
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
      background-color: #1c2730;
      box-shadow: 0 2px 2px #a3a1bc29;
    `}
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  @media ${responsive.sm} {
    display: none;
  }
`;

export const HeaderMenuItem = styled.a<{ active?: boolean }>`
  cursor: pointer;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0;
  color: ${(props) => (props.active ? '#0ECBFD' : '#DBE2ED')};
  transition: 0.15s ease-in-out;
  padding: 11px 0;
  margin: 0 24px;
  position: relative;

  :hover {
    color: #0ecbfd;
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

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
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

  @media ${responsive.md} {
    padding: 0 10%;
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
  background-color: #0ecbfd;
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
  align-items: flex-start;

  @media ${responsive.sm} {
    align-items: center;
    justify-content: center;
    padding: 0 0 50px;
  }

  @media ${responsive.lg} {
    padding: 0 0 50px;
  }
`;

export const FooterAboutUs = styled.div`
  color: #c4c9d1;
  display: flex;
  flex-direction: column;
  color: #c4c9d1;

  a {
    cursor: default;

    :hover {
      color: unset;
    }

    img {
      margin-right: 12px;
    }
  }

  p {
    text-indent: 10px;
  }

  h3 {
    margin-bottom: 10px;
    font-size: 26px;
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
  color: #c4c9d1;
  font-size: 20px;
  margin: 15px 0;
  cursor: pointer;
  flex: ${(props) => props.flex || '0 0 50%'};

  :hover {
    color: #ffffff;
  }

  @media ${responsive.lg} {
    font-size: 18px;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  align-self: flex-end;

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
      width: 32px;
      height: 32px;
    }
  }

  @media ${responsive.sm} {
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

export const OtcComp = styled.div`
  margin-top: -440px;

  @media ${responsive.md} {
    margin-top: -380px;
  }

  @media ${responsive.sm} {
    margin-top: -340px;
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
  box-shadow: 0px 6px 12px #edeef2c6;

  @media screen and (max-width: 992px) {
    padding: 20px 0;
    margin-top: 25px;
    margin-bottom: 50px;
  }
`;

export const TopCoinItem = styled.div`
  text-align: center;
  width: 20%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    width: 60px;
  }

  @media ${responsive.md} {
    margin-bottom: 30px;
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

export const TopCoinPricePercent = styled.p`
  color: #06b787;
  margin: 0;

  img {
    height: 13px;
    width: auto;
    margin-right: 5px;
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
  float: left;
  width: 18%;
  margin-right: 1.25%;
  margin-bottom: 80px;

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
    margin-right: 15px;
    float: left;

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

export const SimpleTrade = styled.div`
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
          border: 1px solid #cdd6e3;
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
          max-height: 200px;
        }
      }
    }

    .currency {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 104px;
      height: 50px;
      background: #dbf7ff 0% 0% no-repeat padding-box;
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
        color: #0ecbfd;
        text-transform: uppercase;
        font-weight: 500;
      }

      .left {
        cursor: pointer;
        width: 0px;
        height: 0px;
        border-top: 4.5px solid transparent;
        border-bottom: 4.5px solid transparent;
        border-right: 6.5px solid #0ecbfd;
      }

      .right {
        cursor: pointer;
        width: 0px;
        height: 0px;
        border-top: 4.5px solid transparent;
        border-bottom: 4.5px solid transparent;
        border-left: 6.5px solid #0ecbfd;
      }
    }
  }

  h3 {
    color: #242a33;
    font-size: 58px;
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
      background-color: #d9dce6;
      height: 60px;
      font-size: 18px;
      color: #6c7686;
      border: 0;
      outline: none;
      cursor: pointer;
      font-weight: 500;

      @media screen and (max-width: 992px) {
        height: 50px;
      }

      &.active:first-child {
        background-color: #08aa7d;
        color: #ffffff;
      }

      &.active:last-child {
        background-color: #d85947;
        color: #ffffff;
      }
    }
  }

  .tabs-list {
    display: flex;
    flex-wrap: wrap;

    .tab-coin {
      margin-right: 1.5%;
      flex: 1;
      background-color: #ffffff;
      box-shadow: 0px 6px 12px #edeef2c6;
      border-radius: 11px;
      padding: 30px 0;
      font-weight: 500;
      width: 18.3%;

      &:not(:first-child) {
        margin-left: 2%;

        @media ${responsive.sm} {
          margin-left: 0%;
        }
      }

      @media ${responsive.sm} {
        padding: 15px;
        margin-bottom: 25px;
        min-width: 100%;
      }

      button {
        background-color: #dbf7ff;
        width: 100%;
        border-radius: 6px;
        border: 0;
        outline: none;
        color: #0ecbfd;
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
        color: #242a33;
        font-size: 36px;
        margin: 35px 0 45px 0;
        text-align: center;

        @media screen and (max-width: 992px) {
          font-size: 26px;
          margin: 25px 0 20px 0;
        }
      }

      .inputs {
        height: 110px;
        width: 100%;
        display: flex;
        flex-direction: column;

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
          color: #6c7686;
          padding-left: 8px;
          outline: none;
          margin-top: 15px;
          text-indent: 15px;
          font-size: 11px;
          margin-left: 10%;
          margin-right: 10%;

          &:hover {
            border: 1px solid #0ecbfd;
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
    width: calc(100% - 240px);
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
    top: -15px;
    width: 35%;

    @media ${responsive.sm} {
      margin-left: 0;
      text-align: left;
    }

    span {
      color: #0ecbfd;
    }

    img {
      margin-right: 12px;
      position: relative;
      top: 5px;
    }
  }
`;

export const WeAreHiringBox = styled.div`
  /* background-image: url('/hiring.png');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: left top; */
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

export const WeAreHiring = styled.div`
  /* float: right; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: auto;
  padding: 20px 40px 20px 0px;
  flex: 1;

  @media ${responsive.md} {
    width: 100%;
    min-height: 100%;
    align-items: center;
    padding: 40px 0px;
  }

  h2 {
    color: #ffffff;

    @media ${responsive.md} {
      margin-bottom: 20px;
    }
  }

  span {
    color: #707b8d;
    line-height: 200%;
  }

  button {
    height: 65px;
    padding: 20px 70px;
    background-color: rgba(14, 203, 253, 0.15);
    color: #0ecbfd;
    width: auto;
    max-width: 200px;
    border: 0px;
    border-radius: 8px;
    box-shadow: none;
    outline: none;
    transition: all 0.2s ease-in-out;
    font-size: 20px;
    cursor: pointer;

    @media ${responsive.md} {
      margin-top: 40px;
    }
  }
`;

export const ContactUsBox = styled.div`
  padding: 0 0 70px;
  display: flex;

  @media ${responsive.sm} {
    flex-direction: column;
  }

  @media ${responsive.lg} {
    padding: 0 0 50px;
  }
`;

export const OurAddress = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 190px;
  height: auto;

  img {
    width: 49px;
    height: 49px;
  }

  h5 {
    margin-top: 20px;
    font-weight: 500;
  }
`;

export const OurAddressContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  p {
    color: #6c7686;
    line-height: 150%;
    font-size: 14px;

    &:not(:first-child) {
      margin-top: 10px;
    }
  }
`;

export const WriteUs = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 300px;
  margin-left: 180px;

  @media ${responsive.sm} {
    margin-left: 0;
    margin-top: 50px;
  }

  img {
    width: 49px;
    height: 49px;
  }

  h5 {
    margin-top: 20px;
    font-weight: 500;
  }
`;

export const WriteUsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 300px;

  @media ${responsive.sm} {
    flex-direction: column;
  }

  p {
    color: #6c7686;
    line-height: 150%;
    font-size: 14px;
  }
`;

export const Connect = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-left: auto;

  @media ${responsive.sm} {
    margin-left: 0;
    margin-top: 50px;
  }

  img {
    width: 49px;
    height: 49px;
  }

  h5 {
    margin-top: 20px;
    font-weight: 500;
  }

  p {
    color: #6c7686;
    line-height: 150%;
    font-size: 14px;
  }
`;

export const ConnectIcons = styled.div`
  margin-top: auto;

  a {
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
`;

export const FeesBox = styled.div`
  margin: 0 -5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const FeesItem = styled.div`
  margin: 15px 5px;
  flex: 0 0 auto;
  width: 23%;
  background-color: #ffffff;
  box-shadow: 0 6px 10px #a3a1bc29;
  border-radius: 15px;
  padding: 30px 40px;

  @media ${responsive.lg} {
    padding: 20px 30px;
    width: 30%;
  }

  @media ${responsive.sm} {
    width: 45%;
  }

  p.percent {
    font-size: 44px;
    color: #0ecbfd;

    @media ${responsive.sm} {
      font-size: 24px;
    }
  }

  p.title {
    color: #6c7686;
    font-weight: 500;
    margin-top: 10px;
  }
`;
