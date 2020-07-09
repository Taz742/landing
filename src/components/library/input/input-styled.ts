import styled from 'styled-components';

import { responsive } from '@/styled/responsive';

export const InputStyled = styled.input`
  border-radius: 33px;
  border: 1px solid #d2d2d8;
  height: 65px;
  width: 100%;
  outline: none;
  transition: all 0.2s ease;
  padding: 22px 36px;
  font-size: 18px;
  box-shadow: none;
  margin-bottom: 30px;
  background-color: transparent;

  &[disabled] {
    background-color: transparent;
  }

  :focus {
    border-color: #328af7;
  }

  ::placeholder {
    color: #c6c6d9;
  }

  @media ${responsive.sm} {
    height: 54px;
    padding: 14px 30px;
    font-size: 16px;
  }
`;
