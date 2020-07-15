import React from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import {
  Container,
  WeAreHiringBox,
  WeAreHiring,
  ContactUsBox,
  OurAddress,
  OurAddressContent,
  WriteUs,
  WriteUsContent,
  Connect,
  ConnectIcons
} from '@/styled';
import { H2, H5, Text } from '@/styled/typography';
import { PageInner, PageSubHeader, TeamContainer, TeamItem, PageHeader } from '@/styled/pages';
import { replaceEnterSymbol, stripHtml } from '@/utils/helpers';
import { Button } from '@/components/library/button';
import data from '@/utils/data';

const About = (_props: any) => {
  // const page = props.pages['Team'];

  const page: any = data.pages.about.data;

  const tempTeamMembers = [
    {
      client_logo: 'https://content.cryptx.com/wp-content/uploads/2020/05/DSCF7597-scaled-1.jpg',
      client_title: 'Name Surname',
      client_position: 'Customer',
      client_linkedin: ''
    },
    {
      client_logo: 'https://content.cryptx.com/wp-content/uploads/2020/05/DSCF7597-scaled-1.jpg',
      client_title: 'Name Surname',
      client_position: 'Customer',
      client_linkedin: ''
    },
    {
      client_logo: 'https://content.cryptx.com/wp-content/uploads/2020/05/DSCF7597-scaled-1.jpg',
      client_title: 'Name Surname',
      client_position: 'Customer',
      client_linkedin: ''
    },
    {
      client_logo: 'https://content.cryptx.com/wp-content/uploads/2020/05/DSCF7597-scaled-1.jpg',
      client_title: 'Name Surname',
      client_position: 'Customer',
      client_linkedin: ''
    }
  ];

  console.log(page);

  return (
    <>
      <CustomHead title="CryptX - Team" page="/team" description={stripHtml(page?.data?.post_content || '')} />
      <Layout>
        <PageHeader>
          <H2>{page?.data?.post_title || 'About Company'}</H2>
        </PageHeader>
        <Container>
          <PageSubHeader>
            <Text
              align="left"
              padding="45px 0px"
              dangerouslySetInnerHTML={{
                __html: replaceEnterSymbol(
                  page?.data?.post_content ||
                    'We’re Tbilisi based team of professionals and crypto and blockchain enthusiasts who are passionate about developing user-friendly and intuitive cryptocurrency exchange with the highest liquidity in the region. We bring unique experiences to trade and we continually seek new ways to do so. First of all, we wanted to make sure that onboarding process is simple and fast. Hence, registration and verification takes only one day. We provide 40 trading pairs and using our liquidity aggregator and matching engine, high level of trading activity and order fast execution is guaranteed. At Gex, we have lowest fees in the region and we include diverse alternatives for payments: Visa, Mastercard, Paypal, Wire transfers. High level of security is critical for our business. Therefore, we are compliant to information security standard ISO 27001 and CryptoCurrency Security Standard. We believe that continious striving for improvement is the major key to success. We know that we can always do better. That’s why we never stop working to provide you with the exchange platform with the best possible features and high liquidity.    '
                )
              }}
            />
          </PageSubHeader>
        </Container>
        <PageInner>
          <Container>
            <TeamContainer>
              {(page?.meta || tempTeamMembers).map((t: any, i: number) => (
                <TeamItem key={i}>
                  <div className="logo">
                    <img src={t.client_logo} />
                  </div>
                  <h4>{t.client_title}</h4>
                  <span>{t.client_position}</span>
                  <a href={t.client_linkedin} target="_blank" rel="noopener">
                    <img src="/linkedin.svg" />
                  </a>
                </TeamItem>
              ))}
            </TeamContainer>
          </Container>
        </PageInner>
        <WeAreHiringBox>
          <img src="/hiring.png" />
          <WeAreHiring>
            <H2>We're Hiring</H2>
            <span>
              At GEX, we truly believe in the transformative power of the great team. That’s why we’re always in search for new team members
              who bring expertise, experience, passion and energy. That’s vital for the longevity and growth of our company.
            </span>
            <span>
              If you’re a trader, digital marketer, blockchain specialist, financial analyst, web developer, web designer or compliance
              officer and consider yourself to be
            </span>
            <Button>Apply</Button>
          </WeAreHiring>
        </WeAreHiringBox>
        <Container>
          <H2 style={{ marginBottom: 100 }}>{page?.contact_us?.title}</H2>
          <ContactUsBox>
            <OurAddress>
              <img src={page.contact_us.our_address.logo} />
              <H5>{page.contact_us.our_address.title}</H5>

              <OurAddressContent>
                {page.contact_us.our_address.data.map((item: string, index: number) => (
                  <p key={index}>{item}</p>
                ))}
              </OurAddressContent>
            </OurAddress>
            <WriteUs>
              <img src={page.contact_us.write_us.logo} />
              <H5>{page.contact_us.write_us.title}</H5>

              <WriteUsContent>
                {page.contact_us.write_us.data.map((item: string, index: number) => (
                  <p key={index}>{item}</p>
                ))}
              </WriteUsContent>
            </WriteUs>
            <Connect>
              <img src={page.contact_us.connect.logo} />
              <H5>{page.contact_us.connect.title}</H5>
              <p>{page.contact_us.connect.subTitle}</p>

              <ConnectIcons>
                <a href="#" target="_blank" rel="noopener">
                  <img src="/linkedin.svg" />
                </a>
                <a href="#" target="_blank" rel="noopener">
                  <img src="/fb.svg" />
                </a>
              </ConnectIcons>
            </Connect>
          </ContactUsBox>
        </Container>
      </Layout>
    </>
  );
};

export default About;
