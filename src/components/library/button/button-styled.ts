import styled, { css, keyframes } from 'styled-components';

import { responsive } from '@/styled/responsive';

import { IProps } from './index';

const buttonLoader = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const animationRule = css`
  ${buttonLoader} 0.6s linear infinite
`;

export const ButtonStyled = styled.button<IProps>`
	position: relative;
	width: ${(props) => (props.inline ? 'auto' : '100%')};
	margin: ${(props) => props.margin || '0'};
	border: 0px;
	border-radius: 6px;
	box-shadow: none;
	outline: none;
	transition: all 0.2s ease-in-out;
	font-size: 18px;
	line-height: 21px;
	letter-spacing: 0.2px;
	display: ${(props) => (props.inline ? 'inline-flex' : 'flex')};
	align-items: center;
	justify-content: center;
  cursor: pointer;

	svg {
		margin-right: 12px;

		path.icon-background {
			fill: transparent !important;
		}
	}

	svg, path, circle {
		transition: all 0.2s ease-in-out;
	}

	${({ circle }) =>
    circle &&
    css`
      width: 66px;
      height: 66px !important;

      svg {
        margin: 0;
      }
    `}

	${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.4;
    `}

    ${({ loading, buttonType }) =>
    loading &&
    css`
        pointer-events: none;
        color: transparent !important;
        opacity: 0.8;

        ::after {
          position: absolute;
          content: '';
          top: 50%;
          left: 50%;
          margin: -0.64285714em 0 0 -0.64285714em;
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 500rem;
          border-top: ${buttonType !== 'text' ? `2px solid #fff` : `2px solid #1d93f7`};
          border-right: 2px solid transparent;
          animation: ${animationRule};
        }
      `}


	${({ buttonType }) => {
    switch (buttonType) {
      case 'normal':
        return css`
           {
            height: 65px;
            padding: ${(props: IProps) => (props.circle ? '10px 13px' : '20px 106px')};
            background-color: #edf8ff;
            color: #328af7;

            :hover {
              background-color: rgb(211, 236, 255);
            }
          }
        `;
      case 'outline':
        return css`
           {
            height: 65px;
            padding: 20px 110px;
            border: 1px solid #328af747;
            background-color: transparent;
            color: #328af7;

            :hover {
              background-color: #deedff47;
              border-color: #deedff47;
            }
          }
        `;
      case 'primary':
        return css`
           {
            height: 65px;
            padding: ${(props: IProps) => props.padding || '20px 70px'};
            background-color: #328af7;
            color: #fff;

            path:not(.icon-background) {
              fill: #328af7;
            }

            :hover {
              background-color: #0680ea;
            }

            @media ${responsive.sm} {
              height: 54px;
              padding: 14px 70px;
            }
          }
        `;
      case 'text':
        return css`
           {
            /* height: 47px; */
            padding: ${(props: IProps) => (props.circle ? '10px 13px' : props.padding || '4px')};
            background: transparent;
            color: #328af7;

            path:not(.icon-background) {
              fill: #328af7;
            }
          }
        `;
      default:
        return css`
           {
            height: 50px;
            padding: ${(props: IProps) => (props.circle ? '10px 13px' : props.padding || '14px 40px')};
            background-color: #1A4D60;
            color: #0ECBFD;

            path:not(.icon-background) {
              fill: #328af7;
            }

            :hover {
              opacity: 0.8;
            }
          }
        `;
    }
  }}
`;

export const ButtonText = styled.span<{ fontSize?: string }>`
  font-size: ${(props) => props.fontSize || '18px'};
  position: relative;
  bottom: 1px;
`;
