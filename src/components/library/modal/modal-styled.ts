import styled from 'styled-components';

import { IProps } from '.';

interface IModalProps extends Partial<IProps> {
  fadeType?: 'in' | 'out';
  width?: string;
  height?: string;
}

export const ModalBackgroundStyled = styled.div<IModalProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 8;
  background: rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in;
  overflow: overlay;

  opacity: ${(props) => {
    switch (props.fadeType) {
      case 'in':
        return '1';
      default:
        return '0';
    }
  }};
  transition: ${(props) => {
    switch (props.fadeType) {
      case 'in':
        return 'opacity 0.15s ease-in-out';
      case 'out':
        return 'opacity 0.15s ease-in-out';
      default:
        return '';
    }
  }};
`;

export const ModalBody = styled.div<IModalProps>`
  box-shadow: 0px 9px 26px #1b1c2c29;
  border-radius: 37px;
  position: absolute;
  max-height: calc(92vh - 2.5rem);
  overflow: ${(props) => props.overflow || 'auto'};
  padding: 36px 48px;
  background-color: #fff;
  overflow-x: hidden;
  -webkit-mask-image: radial-gradient(circle, white 100%, black 100%);
  scrollbar-width: thin;
  width: ${({ width }: IModalProps) => width || '69%'};
  height: ${({ height }) => height || '82%'};

  transform: ${(props) => {
    switch (props.fadeType) {
      case 'in':
        return 'scale(1)';
      default:
        return 'scale(0.92)';
    }
  }};

  transition: ${(props) => {
    switch (props.fadeType) {
      case 'in':
        return 'transform 0.15s';
      case 'out':
        return 'transform 0.15s';
      default:
        return '';
    }
  }};

  @media (max-width: 776px) {
    width: 95%;
    max-height: 80%;
    padding: 27px 20px;
  }
`;

export const ModalTopPanel = styled.div<{ centerTitle?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 38px;
`;

export const ModalTitle = styled.span`
  color: #2d2d52;
`;

export const Close = styled.span`
  cursor: pointer;

  path {
    fill: #79798e;
    transition: 0.2s;
  }

  :hover {
    path {
      fill: #646476;
    }
  }
`;
