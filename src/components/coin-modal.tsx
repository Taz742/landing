import React from 'react';

import Button from '@/components/library/button';
import Modal from '@/components/library/modal';
import useModal from '@/hooks/use-modal';
import { H3, Subtext } from '@/styled/typography';
import { CoinImg, CoinImages, CoinItem, CoinModalContainer } from '@/styled';
import { getCoins } from '@/utils/helpers';
import data from '@/utils/data';

export const CoinModal: React.FC = (props: any) => {
  const { home } = props;
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Button buttonType="outline" inline onClick={openModal}>
        All Coins
      </Button>

      {isOpen && (
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <H3 align="center" margin="0 0 15px" lineHeight="32px">
            {data.homePage.coins.title}
          </H3>
          <div style={{ maxWidth: '71%', margin: '0 auto' }}>
            <Subtext size="16px" lineHeight="20px">
              {home.coins.coins_title}
            </Subtext>
            <br />
            <Subtext size="16px" lineHeight="26px">
              There is no more need to register to numerous wallets. All coins can be managed from CryptX.
            </Subtext>
          </div>
          <CoinModalContainer>
            <CoinImages height="auto" className="coin-images">
              {getCoins(home.coins.coins).map((coin: any, i: number) => (
                <CoinItem key={i} className="coin-item">
                  <CoinImg src={coin} />
                </CoinItem>
              ))}
            </CoinImages>
          </CoinModalContainer>
        </Modal>
      )}
    </>
  );
};

export default CoinModal;
