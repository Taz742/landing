import React from 'react';
import Grid from '@material-ui/core/Grid';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import CoinModal from '@/components/coin-modal';
import {
  Container,
  WalletHero,
  InnerPage,
  HeroSection,
  WalletHeroBg,
  WalletHeroImg,
  SolutionImg,
  AdvantageItem,
  CoinsSupported,
  CoinImg,
  CoinImages,
  CoinItem,
  CoinsSection
} from '@/styled';
import { H3, H5, Subtext } from '@/styled/typography';
import { getCoins, stripHtml } from '@/utils/helpers';

const Wallet = (props: any) => {
  const { home } = props;
  const page = props.pages['Wallet'];

  return (
    <>
      <CustomHead title="CryptX Wallet" page="/about-wallet" description={stripHtml(page.data.post_content)} />
      <Layout>
        <WalletHero>
          <WalletHeroBg src="/bg_home.svg" />
          <InnerPage>
            <Container>
              <HeroSection>
                <Grid container>
                  <Grid item xs={12} sm={5}>
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
                      <WalletHeroImg src="/swap_coins.png"></WalletHeroImg>
                    </div>
                  </Grid>
                </Grid>
              </HeroSection>
            </Container>
          </InnerPage>
        </WalletHero>

        <Container>
          <Grid container>
            {home.advantages.advantages.map((advantage: any) => (
              <Grid item xs={12} sm={4} key={advantage.sol_title}>
                <AdvantageItem>
                  <SolutionImg src={advantage.sol_file || ''} />
                  <H5>{advantage.sol_title}</H5>
                  <Subtext>{advantage.sol_text}</Subtext>
                </AdvantageItem>
              </Grid>
            ))}
          </Grid>
        </Container>

        <CoinsSection>
          <Container>
            <CoinsSupported>
              <H3 align="center" margin="0 0 15px">
              </H3>
              <div style={{ maxWidth: '71%', margin: '0 auto' }}>
                <Subtext size="16px">{home.coins.coins_title}</Subtext>
                <br />
                <Subtext size="16px" lineHeight="30px">
                  There is no more need to register to numerous wallets. All coins can be managed from CryptX.
                </Subtext>
              </div>
              <CoinImages height="auto">
                {getCoins(home.coins.coins, 10).map((coin: any, i: number) => (
                  <CoinItem key={i}>
                    <CoinImg src={coin} />
                  </CoinItem>
                ))}
              </CoinImages>
              <CoinModal {...props} />
            </CoinsSupported>
          </Container>
        </CoinsSection>
        <div style={{ padding: '30px 0' }} />
      </Layout>
    </>
  );
};

export default Wallet;
