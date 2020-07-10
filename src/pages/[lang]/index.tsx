import React from 'react';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';

import CustomHead from '@/components/custom-head';
import Button from '@/components/library/button';
import { Layout } from '@/components/index';
import CoinModal from '@/components/coin-modal';
import {
  Container,
  Hero,
  InnerPage,
  HeroH1,
  HeroH2,
  HeroSection,
  RegisterButton,
  HeroBg,
  HeroImg,
  Section,
  SolutionImg,
  Solution,
  AdvantageSection,
  AdvantageItem,
  ClientsImg,
  ClientsSection,
  CoinsSupported,
  CoinImg,
  CoinImages,
  CoinItem,
  CoinsSection
} from '@/styled';
import { H2, Text, H3, H5, Subtext } from '@/styled/typography';
import config from '@/utils/config';
import data from '@/utils/data';
import { getCoins, stripHtml } from '@/utils/helpers';

const IndexPage = (props: any) => {
  const { home } = props;

  return (
    <>
      <CustomHead title="CryptX Crypto Wallet" page="" description={stripHtml(String(home.why.why_content))} />
      <Layout>
        <Hero>
          <HeroBg src="/bg_home.svg" />
          <InnerPage>
            <Container>
              <HeroSection>
                <Grid container>
                  <Grid item xs={12} sm={4}>
                    <HeroH1>{home.hero.hero_title}</HeroH1>
                    <HeroH2>{home.hero.hero_sub_title}</HeroH2>
                    <a href={`${config.targetWebsite}/register`} target="_blank" rel="noopener">
                      <RegisterButton>
                        <span>
                          Register now
                          <img src="/arrow_right.svg"></img>
                        </span>
                      </RegisterButton>
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
                      <HeroImg src="/hero_main_image_hd.png"></HeroImg>
                    </div>
                  </Grid>
                </Grid>
              </HeroSection>
            </Container>
          </InnerPage>
        </Hero>

        <Section>
          <Container>
            <div style={{ maxWidth: '88%', margin: '0 auto' }}>
              <H2 align="center" margin="0 0 40px">
                {home.why.why_title}
              </H2>
              <Text>
                {String(home.why.why_content)
                  .replace(/\u00a0/g, ' ')
                  .replace(/<[^>]+>/g, '')}
              </Text>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <H3 align="center" margin="0 0 70px">
              {home.solutions.title}
            </H3>
            <Grid container spacing={4}>
              {home.solutions.solutions.map((solution: any) => (
                <Grid item xs={6} sm={6} md={3} key={solution.sol_title}>
                  <Link href={{ pathname: '/solutions', query: { el: solution.sol_title } }} passHref>
                    <Solution>
                      <SolutionImg src={solution.sol_file} />
                      <H5>{solution.sol_title}</H5>
                      <Subtext align="left">{solution.sol_text}</Subtext>
                    </Solution>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Section>

        <AdvantageSection>
          <Container>
            <div style={{ maxWidth: '56%', margin: '0 auto' }}>
              <H2 align="center" margin="0 0 20px">
                {data.homePage.advantages.adv_title}
              </H2>
              <Text>{home.advantages.adv_title}</Text>
            </div>
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
        </AdvantageSection>

        <CoinsSection>
          <Container>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <ClientsSection>
                  <H2 margin="0 0 40px">{home.clients.clients_title}</H2>
                  <Subtext size="16px" lineHeight="33px" align="left">
                    {home.clients.clients_sub_title}
                  </Subtext>
                  <Link href="/clients">
                    <a>
                      <Button buttonType="normal" margin="40px 0 0" inline>
                        Read more
                      </Button>
                    </a>
                  </Link>
                </ClientsSection>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ClientsImg src={home.clients.clients_img} />
              </Grid>
            </Grid>

            <CoinsSupported>
              <H3 align="center" margin="0 0 15px">
                {data.homePage.coins.title}
              </H3>
              <Subtext size="16px">{home.coins.coins_title}</Subtext>
              <CoinImages>
                {getCoins(home.coins.coins, 5).map((coin: any, i: number) => (
                  <CoinItem key={i}>
                    <CoinImg src={coin} />
                  </CoinItem>
                ))}
              </CoinImages>
              <CoinModal {...props} />
            </CoinsSupported>
          </Container>
        </CoinsSection>
      </Layout>
    </>
  );
};

export default IndexPage;
