import styled, { css } from 'styled-components';

import { responsive } from './responsive';

export const H1 = styled.h1<IH>`
  font-size: 60px;
  line-height: 75px;
  letter-spacing: 0;
  margin: 0 0 35px;

  @media ${responsive.lg} {
    font-size: 46px;
    line-height: 55px;
  }

  @media ${responsive.sm} {
    font-size: 35px;
  }

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}

  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}

  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight};
    `}
`;

export const H2 = styled.h2<IH>`
  font-size: 50px;
  line-height: 54px;
  letter-spacing: 0;
  font-weight: 400;

  @media ${responsive.lg} {
    font-size: 38px;
  }

  @media ${responsive.sm} {
    font-size: 30px;
  }

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}

  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `};
`;

export const H3 = styled.h3<IH>`
  letter-spacing: 0;
  font-size: 30px;
  line-height: ${(props) => props.lineHeight || '40px'};
  font-weight: ${(props) => props.weight || '400'};

  @media ${responsive.lg} {
    font-size: 26px;
  }

  @media ${responsive.sm} {
    font-size: 24px;
  }

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}

  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `};

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;

export const H4 = styled.h4<IH>`
font-size: 28px;
line-height: 46px;
letter-spacing: 0;
font-weight: 400;

@media ${responsive.sm} {
  font-size: 18px;
}

${({ padding }) =>
  padding &&
  css`
    padding: ${padding};
  `}

${({ align }) =>
  align &&
  css`
    text-align: ${align};
  `}
  
${({ weight }) =>
  weight &&
  css`
    font-weight: ${weight};
  `}
`;

export const H5 = styled.h5<IH>`
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 0;
  font-weight: 400;
  margin-bottom: 14px;

  @media ${responsive.sm} {
    font-size: 19px;
  }

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}

  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}
`;

export const Text = styled.p<IH>`
  font-size: ${(props) => props.size || '18px'};
  line-height: ${(props) => props.lineHeight || '33px'};
  text-align: ${(props) => props.align || 'center'};
  opacity: ${(props) => props.opacity || '1'};
  letter-spacing: 0;
  color: #79798e;
  font-weight: normal;
  margin: 0;

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
`;

export const Subtext = styled.p<IH>`
  font-size: ${(props) => props.size || '14px'};
  line-height: ${(props) => props.lineHeight || '23px'};
  text-align: ${(props) => props.align || 'center'};
  opacity: ${(props) => props.opacity || '1'};
  letter-spacing: 0;
  color: #79798e;
  font-weight: normal;

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
`;

interface IH {
  padding?: string;
  margin?: string;
  align?: 'left' | 'center' | 'right';
  weight?: string | number;
  opacity?: string;
  size?: string;
  lineHeight?: string;
}
