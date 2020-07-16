import styled from 'styled-components';
import { responsive } from '@/styled/responsive';

export const TabMenu = styled.ul`
  list-style: none;
  padding: 0 35px 0 0;
  margin-bottom: 0;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0px;
  max-width: 320px;
  width: 100%;
  position: sticky;
  top: 140px;
  align-self: flex-start;
  height: auto;

  @media ${responsive.sm} {
    max-width: 100%;
    padding: 0 0 14px;
    margin: 0 0 20px;
    border-bottom: 1px solid #ccc;
    position: relative;
    top: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 0;
    padding: 5px 40px 50px 0px;
    font-size: 20px;
    transition: all 0.2s;
    cursor: pointer;
    color: #6c7686;
    text-align: left;
    position: relative;

    @media ${responsive.md} {
      padding: 10px 80px 10px 0;
      display: inline-block;
    }

    span.line {
      transition: all 0.2s;
      width: 50px;
      height: 2px;
      background-color: transparent;
      margin-left: 24px;
    }

    &.selected {
      color: #0ecbfd;

      span.line {
        background-color: #0ecbfd;
      }
    }
  }
`;

export const TabContainer = styled.div<{ overflow?: string }>`
  display: flex;
  overflow: ${(props) => props.overflow || 'initial'};
  padding: 10px 0;

  @media ${responsive.sm} {
    flex-direction: column;
  }
`;
