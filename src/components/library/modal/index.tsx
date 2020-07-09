import React, { useState, useEffect, FC, useRef } from 'react';
import { createPortal } from 'react-dom';

import { ModalBackgroundStyled, ModalBody, ModalTitle, ModalTopPanel, Close } from './modal-styled';

const Modal: FC<IProps> = ({ isOpen, title, closeIcon, width, height, size, closeModal, children, overflow, closable, centerTitle }) => {
  const [fadeType, setFadeType] = useState<'in' | 'out'>('out');
  const ref = useRef<any>();
  const [mounted, setMounted] = useState(false);

  const handleClose = (e: any) => {
    if (!closable) return;
    if (e) e.preventDefault();
    setFadeType('out');
    setTimeout(() => typeof closeModal === 'function' && closeModal(), 100);
  };

  useEffect(() => {
    setTimeout(() => {
      if (isOpen) setFadeType('in');
    }, 0);
  }, [isOpen]);

  useEffect(() => {
    ref.current = document.querySelector('#modal');
    setMounted(true);
  }, []);

  if (isOpen && mounted) {
    return createPortal(
      <ModalBackgroundStyled isOpen={isOpen} onClick={handleClose} fadeType={fadeType}>
        <ModalBody width={width} height={height} size={size} overflow={overflow} onClick={(e) => e.stopPropagation()} fadeType={fadeType}>
          <ModalTopPanel hidden={!title && !closeIcon} centerTitle={centerTitle}>
            <ModalTitle>
              <h2>{title || ''}</h2>
            </ModalTitle>
            {closeIcon && (
              <Close onClick={handleClose}>
                <img src="/close_icon.svg" />
              </Close>
            )}
          </ModalTopPanel>
          {children}
        </ModalBody>
      </ModalBackgroundStyled>,
      ref.current
    );
  }

  return null;
};

export interface IProps {
  isOpen?: boolean;
  title?: string;
  closeIcon?: boolean;
  width?: string;
  height?: string;
  size?: 'default' | 'small' | 'large';
  closeModal: () => void;
  overflow?: string;
  closable?: boolean;
  centerTitle?: boolean;
}

Modal.defaultProps = {
  isOpen: false,
  title: '',
  closeIcon: true,
  size: 'default',
  closable: true,
  centerTitle: false
} as Partial<IProps>;

export default Modal;
