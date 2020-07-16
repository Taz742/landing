import styled, { css } from 'styled-components';

import { responsive } from './responsive';

export const DefaultFooter = styled.footer`
  position: relative;
  overflow: hidden;
  background: #f6f9fc;

  @media ${responsive.lg} {
    padding: 50px 0 60px;
  }

  @media ${responsive.sm} {
    padding: 40px 0 10px;
  }
`;

export const DefaultFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media ${responsive.sm} {
    align-items: center;
    justify-content: center;
    padding: 0 0 20px;
  }
`;

export const PageHeader = styled.div<{ height?: string }>`
  background-image: url(/images/BG.png);
  background-position: center;
  background-size: cover;
  height: ${({ height }) => height || '667px'};

  &.hide_image {
    background-image: none;
  }

  @media ${responsive.lg} {
    /* padding: 130px 0 60px; */
  }

  @media ${responsive.md} {
    height: ${({ height }) => height || '667px'};
  }

  @media ${responsive.sm} {
    height: ${({ height }) => height || '667px'};
  }

  h2,
  h3 {
    padding-bottom: 20px;
  }
`;

export const SearchPageHeader = styled.div<{ height?: string }>`
  background: #edf8ff;
  text-align: center;
  position: relative;
  overflow: hidden;
  background-image: url('/images/BG.png');
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  height: ${({ height }) => height || '424px'};

  @media ${responsive.lg} {
    height: 350px;
  }

  @media ${responsive.sm} {
    height: 270px;
  }

  h2,
  h3 {
    padding-bottom: 20px;
  }
`;

export const DefaultPageHeader = styled.div<{ height?: string }>`
  background: #edf8ff;
  text-align: center;
  position: relative;
  overflow: hidden;
  background-image: url('/images/BG.png');
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  height: ${({ height }) => height || '527px'};

  @media ${responsive.lg} {
    height: 450px;
  }

  @media ${responsive.sm} {
    min-height: 360px;
    height: auto;
  }

  h2,
  h3 {
    padding-bottom: 20px;
  }
`;

export const PageHeaderBg1 = styled.div<{ opacity?: string }>`
  bottom: -20px;
  left: 0;
  max-width: 50%;
  width: 489px;
  height: 384px;
  transform: rotate(0);
  opacity: ${({ opacity }) => opacity || '0.5'};
  position: absolute;
  background: url('/bubble.svg');

  @media ${responsive.lg} {
    left: -150px;
    bottom: -80px;
  }

  @media ${responsive.sm} {
    bottom: -270px;
    left: -183px;
    max-width: 100%;
    transform: rotate(32deg);
  }
`;

export const PageHeaderBg2 = styled.div<{ opacity?: string; top?: string }>`
  bottom: 90px;
  right: 0;
  max-width: 40%;
  width: 699px;
  height: 430px;
  transform: rotate(0);
  opacity: ${({ opacity }) => opacity || '1'};
  position: absolute;
  background: url('/bubble2.svg');

  @media ${responsive.lg} {
    bottom: 60px;
  }

  @media ${responsive.sm} {
    top: 0;
    right: 0;
  }

  ${({ top }) =>
    top &&
    css`
      top: ${top};
    `}
`;

export const PageInner = styled.div`
  padding: 30px 0 60px;

  @media ${responsive.sm} {
    padding: 40px 0;
  }
`;

export const PageInnerTitle = styled.div<{ maxWidth?: string }>`
  background: #fafafa;
  margin: 0 9%;
  border-radius: 8px 8px 0 0;
  padding: 80px 102px 22px;
  position: absolute;
  bottom: 0;
  width: calc(100% - 18%);
  text-align: left;

  h1 {
    margin: 0;
  }

  @media ${responsive.lg} {
    margin: 0 6%;
    width: calc(100% - 12%);
    padding: 60px 55px 22px;
  }

  @media ${responsive.md} {
    margin: 0 6%;
    width: calc(100% - 12%);
    padding: 60px 55px 22px;
  }

  @media ${responsive.sm} {
    margin: 0 10%;
    width: calc(100% - 20%);
    padding: 20px 30px 14px;
    text-align: center;

    h1 {
      font-size: 21px;
    }
  }

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `}
`;

export const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PricingItem = styled.div`
  border: 1px solid #cadcf2;
  border-radius: 39px;
  padding: 80px 105px;
  flex: 1;
  margin-bottom: 60px;

  @media ${responsive.lg} {
    padding: 60px 90px;
  }

  @media ${responsive.sm} {
    padding: 30px 50px 40px;
  }
`;

export const PricingFees = styled.div`
  margin: 30px 0;

  @media ${responsive.sm} {
    margin: 15px 0;
  }

  span {
    font-size: 20px;
  }

  span.title {
    font-size: 20px;
    color: #79798e;
  }

  span.line {
    height: 2px;
    border-bottom: 2px dashed #e6eaf2;
    flex: 1;
    margin: 0 30px;
    position: relative;
    top: 1px;
  }

  span.percent {
    color: #328af7;

    img {
      position: relative;
      bottom: 2px;
    }
  }
`;

export const PricingFeeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :not(:first-child) {
    margin-top: 30px;
  }
`;

export const PricingText = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  color: #b1b9c4;

  button {
    font-size: 20px;
  }

  img {
    margin-right: 12px;
    position: relative;
    top: 4px;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10%;
  flex-wrap: wrap;
`;

export const ContactItem = styled.div`
  flex: 0 1 40%;
  margin: 0 25px;

  @media ${responsive.sm} {
    flex: 1 1 100%;
    margin: 0;
  }
`;

export const ContactSuccess = styled.div`
  text-align: center;
  padding: 50px 0;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 36px;
  }
`;

export const PageSubHeader = styled.div`
  padding: 175px 0 70px;
  text-align: left;

  p {
    font-size: 20px;
    line-height: 34px;
    color: #ffffff;
    opacity: 0.6;
    font-weight: 100;
    max-width: 65%;

    @media ${responsive.sm} {
      font-size: 18px;
      max-width: 100%;
    }
  }

  h1 {
    color: #ffffff;
    margin-bottom: 20px;
  }

  @media ${responsive.lg} {
    padding: 140px 0 60px;
  }

  @media ${responsive.sm} {
    padding: 100px 0 50px;
  }
`;

export const SolutionItem = styled.div`
  min-height: 300px;
  display: flex;
  align-items: flex-start;

  :not(:first-child) {
    margin-top: 70px;
  }

  img {
    border-radius: 12px;
    margin: 0 46px 22px 0;
    max-width: 30%;
  }

  @media ${responsive.lg} {
    min-height: 270px;

    img {
      max-width: 33%;
    }
  }

  @media ${responsive.sm} {
    min-height: 150px;
    display: block;

    :not(:first-child) {
      margin-top: 44px;
    }

    img {
      margin: 0 24px 7px 0;
      float: left;
    }
  }
`;

export const SolutionContent = styled.div`
  h3 {
    margin: 0 0 25px;
  }

  p {
    text-align: left;
    padding: 0 3px;
  }
`;

export const Input = styled.input`
  height: 96px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #fff;
  width: 100%;
  outline: none;
  padding: 28px 44px;
  font-size: 20px;
  box-shadow: none;
  position: relative;
  transition: all 0.25s ease;
  box-shadow: 0px 6px 12px #edeef2c6;

  :focus {
    border-color: #aac4e4;
  }

  ::placeholder {
    color: #79798eb0;
  }

  @media ${responsive.lg} {
    height: 66px;
    font-size: 19px;
    padding: 20px 40px;
  }

  @media ${responsive.sm} {
    height: 56px;
    font-size: 18px;
    padding: 16px 30px;
  }
`;

export const FaqInput = styled.div`
  position: relative;
  margin-bottom: 45px;

  img {
    position: absolute;
    right: 0;
    padding: 39px 44px;
  }

  @media ${responsive.lg} {
    img {
      padding: 24px 40px;
    }
  }

  @media ${responsive.sm} {
    img {
      padding: 19px 30px;
    }
  }
`;

export const FaqText = styled.div`
  text-align: center;
  color: #b1b9c4;
  font-size: 18px;
  line-height: 26px;
  margin-top: 80px;

  img {
    margin-right: 12px;
    position: relative;
    top: 4px;
  }

  @media ${responsive.sm} {
    font-size: 17px;
  }
`;

export const TeamContainer = styled.div`
  display: flex;

  @media ${responsive.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

export const TeamItem = styled.div`
  flex: 0 1 25%;
  display: flex;
  flex-direction: column;
  padding: 60px 40px;

  h4 {
    color: #242a33;
    font-size: 26px;
    font-weight: normal;
    margin-bottom: 10px;
  }

  span {
    color: #a5adba;
    font-size: 16px;
    margin-bottom: 16px;
    opacity: 0.8;
  }

  p {
    color: #6c7686;
  }

  a {
    display: block;
    margin-top: 20px;
    width: 47px;
    height: 47px;
    border-radius: 10rem;

    :hover {
      filter: brightness(1.02);
    }

    img {
      width: 47px;
      height: 47px;
    }
  }

  .logo {
    margin: 0 auto 28px;
    width: 184px;
    height: 184px;
    border-radius: 15rem;
    overflow: hidden;

    img {
      max-width: 184px;
    }
  }

  @media ${responsive.lg} {
    padding: 40px 30px;

    h4 {
      font-size: 22px;
    }

    span {
      font-size: 16px;
    }

    .logo {
      margin: 0 auto 28px;
      width: 160px;
      height: 160px;
      border-radius: 15rem;
      overflow: hidden;

      img {
        max-width: 160px;
      }
    }
  }

  @media ${responsive.sm} {
    padding: 24px 14px;
    flex: 0 1 50%;

    h4 {
      font-size: 20px;
    }

    span {
      font-size: 14px;
    }

    a {
      width: 40px;
      height: 40px;

      img {
        width: 40px;
        height: 40px;
      }
    }

    .logo {
      margin: 0 auto 28px;
      width: 136px;
      height: 136px;
      border-radius: 15rem;
      overflow: hidden;

      img {
        max-width: 136px;
      }
    }
  }
`;

export const ClientsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -35px 0;

  @media ${responsive.lg} {
    margin: -20px 0;
  }
`;

export const ClientItem = styled.div`
  flex: 0 1 42%;
  padding: 35px 0;

  img {
    margin-bottom: 24px;
    max-width: 280px;
    max-height: 90px;
  }

  p {
    color: #79798e;
    font-size: 14px;
    line-height: 26px;
  }

  @media ${responsive.sm} {
    flex: 1 1 50%;
    padding: 26px 10px;

    p {
      text-align: center;
    }

    img {
      margin: 0 auto 20px;
      display: block;
    }
  }
`;

export const CareerLogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 60px 0 70px;

  @media ${responsive.lg} {
    padding: 40px 0 60px;
  }
`;

export const CareerLogoItem = styled.div`
  flex: 0 1 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  padding: 30px;

  h4 {
    font-size: 20px;
    font-weight: normal;
  }

  span.logo {
    height: 90px;
    margin-bottom: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  @media ${responsive.sm} {
    padding: 20px 6px;
    flex: 0 0 49%;
  }
`;

export const CareerTableContainer = styled.div`
  padding: 30px 0;
  position: relative;
  max-width: 100%;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      color: #79798e;
      font-size: 18px;

      td {
        padding: 20px;

        :first-child {
          padding-left: 4px;
        }

        :last-child {
          padding-right: 4px;
        }
      }
    }

    tbody {
      font-size: 20px;

      td {
        padding: 20px;
        min-width: 130px;

        :first-child {
          padding-left: 4px;
        }

        :last-child {
          padding-right: 4px;
        }
      }

      a button {
        font-size: 20px;
      }

      tr {
        :hover {
          background-color: #f6f9fc;
        }

        :not(:first-child) {
          td {
            border-top: 1px solid #e2e2e2;
          }
        }
      }
    }
  }
`;

export const LanguageChangerWrapper = styled.div`
  font-size: 12px;
  line-height: 1.75;
  letter-spacing: 0.02px;
  color: #b3c6d8;
  padding-top: 1px;
  cursor: pointer;
  position: relative;
  top: 4px;

  svg {
    margin: 0px 0 3px 6px;
  }
`;

export const OtcContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  bottom: 160px;
  margin-bottom: -120px;
  margin-left: -16px;
  margin-right: -16px;

  @media ${responsive.lg} {
    bottom: 140px;
  }

  @media ${responsive.sm} {
    bottom: 0px;
    margin-bottom: -40px;
  }
`;

export const OtcItem = styled.div`
  flex: 0 1 23%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 60px 40px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 1px -1px 17px #a3a1bc29;
  margin: 0 1%;

  .logo {
    margin-bottom: 34px;
  }

  h4 {
    color: #6c7686;
    font-size: 20px;
    font-weight: normal;
  }

  @media ${responsive.lg} {
    padding: 30px;

    h4 {
      font-size: 20px;
    }
  }

  @media ${responsive.sm} {
    padding: 24px 14px;
    flex: 0 1 43%;
    margin: 0 3% 24px;

    h4 {
      font-size: 17px;
    }

    .logo {
      margin-bottom: 20px;
    }

    img {
      max-width: 80px;
    }
  }
`;
