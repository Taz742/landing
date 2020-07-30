import React, { useEffect } from 'react';
import Link from 'next/link';

import useTranslation from '@/hooks/useTranslation';
import Modal from '@/components/library/modal';
import useModal from '@/hooks/use-modal';
import { CookieContainer } from '@/styled/pages';

const CookiePopup: React.FC<any> = () => {
  const { t, locale } = useTranslation();
  const { isOpen, openModal, closeModal } = useModal();

  const openCookieModal = () => {
    openModal();
  };

  const acceptCookies = () => {
    localStorage.setItem('cookie_popup', JSON.stringify(true));
    closeModal();
  };

  useEffect(() => {
    if (Boolean(localStorage.getItem('cookie_popup')) !== true) openCookieModal();
  }, []);

  if (!isOpen) return null;

  return (
    <Modal size="cookie" isOpen={isOpen} closeModal={closeModal} closeIcon={false}>
      <CookieContainer>
        <div className="content">
          <img src="/images/cookie_logo.svg" alt="logo" height="46px" />
          <div>
            <h5>{t('cookie_popup_title')}</h5>
            <h4 style={{ color: '#333' }}>{t('cookie_sub_title')}</h4>
            {true && (
              <p>
                {t('cookie_popup_desc')}
                <Link href="/[lang]/cookies" as={`/${locale}/cookies`}>
                  <a>{t('cookie_popup_link')}</a>
                </Link>
              </p>
            )}
          </div>
        </div>
        <button className="ok" onClick={acceptCookies}>
          OK
        </button>
      </CookieContainer>
    </Modal>
  );
};

export default CookiePopup;
