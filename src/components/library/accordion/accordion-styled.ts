import styled, { css } from 'styled-components';

import { responsive } from '@/styled/responsive';

import { ISectionProps } from '.';

export const AccordionContainer = styled.div``;

export const AccordionTitle = styled.div<ISectionProps>`
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.2s ease;
  color: ${(props) => (props.expanded ? '#328AF7' : '#242a33')};

  h4 {
    user-select: none;
    font-size: 26px;
    font-weight: normal;
    display: flex;
    align-items: center;

    span.dot {
      padding: 4px;
      margin-right: 18px;
      border-radius: 100%;
      background: ${(props) => (props.expanded ? '#328AF7' : '#242a33')};
      opacity: 0.7;
    }
  }

  @media ${responsive.lg} {
    padding: 30px 0;

    h4 {
      font-size: 24px;
    }
  }

  @media ${responsive.sm} {
    padding: 30px 4px;

    h4 {
      font-size: 20px;
    }
  }
`;

export const AccordionIcon = styled.div<ISectionProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.expanded ? '#328af71f' : 'transparent')};
  transition: 0.4s;
  padding: 18px 13px;
  width: 44px;
  height: 44px;
  z-index: -1;
  border-radius: 10rem;
`;

export const Line = styled.div<ISectionProps & { second?: boolean }>`
  background-color: ${(props) => (props.expanded ? '#328AF7' : '#6c7686')};
  border-radius: 4px;
  width: 18px;
  height: 3px;
  transition: 0.3s;
  cursor: pointer;

  ${({ second, expanded }) =>
    second &&
    css`
      position: absolute;
      transform: ${expanded ? 'rotate(0deg)' : 'rotate(90deg)'};
    `}
`;

export const AccordionContent = styled.div<ISectionProps>`
  position: relative;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease-out;
  max-height: ${(props) => (props.expanded ? '850px' : '0')};
  padding: ${(props) => (props.expanded ? '0 0 40px' : '0')};
  font-size: 20px;
  line-height: 34px;
  color: #6c7686;
  margin-left: 26px;
  margin-right: 7%;

  a {
    color: #328af7;

    :hover {
      color: #1c68c5;
    }
  }

  section {
    transition: all 0.2s;
    opacity: ${(props) => (props.expanded ? '1' : '0')};
    visibility: ${(props) => (props.expanded ? 'visible' : 'hidden')};
  }

  @media ${responsive.lg} {
    padding: ${(props) => (props.expanded ? '0 0 30px' : '0')};
  }
`;

export const Acc = styled.div`
  :not(:last-child) {
    border-bottom: 2px solid #eceef3;
  }
`;
