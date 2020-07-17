import React from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import {
  Container,
  WeAreHiringBox,
  WeAreHiring
  // ContactUsBox,
  // OurAddress,
  // OurAddressContent,
  // WriteUs,
  // WriteUsContent,
  // Connect,
  // ConnectIcons
} from '@/styled';
import { H2, Text } from '@/styled/typography';
import { PageInner, PageSubHeader, TeamContainer, TeamItem, PageHeader } from '@/styled/pages';
import { Button } from '@/components/library/button';
import { DataContext } from '@/context/app-context';

const About = (_props: any) => {
  const { data } = React.useContext(DataContext);
  const page: any = data.pages.pages['about'] || { meta: [], data: { post_title: '' } };
  const about: any = data.static.pages['about'];

  return (
    <>
      <CustomHead title={page.data.post_title} page="/about" description={page.data.post_title} />
      <Layout>
        <PageHeader height="100px" className="hide_image" />
        <Container>
          <PageSubHeader type="about" style={{ padding: '60px 0 70px' }}>
            <H2>{page.data.post_title}</H2>
            <Text align="left" padding="45px 0px">
              {page.data.post_content}
            </Text>
          </PageSubHeader>
        </Container>
        <PageInner>
          <Container>
            <TeamContainer>
              {page.meta.map((t: any, i: number) => (
                <TeamItem key={i}>
                  <div className="logo">
                    <img src={t.client_logo || ''} />
                  </div>
                  <h4>{t.client_title}</h4>
                  <span>{t.client_position}</span>
                  <p className="description">{t.client_desc}</p>
                  <div className="links">
                    <a href={t.client_linkedin} target="_blank" rel="noopener">
                      <img src="/linkedin.svg" style={{ marginRight: '15px' }} />
                    </a>
                  </div>
                </TeamItem>
              ))}
            </TeamContainer>
          </Container>
        </PageInner>
        <WeAreHiringBox>
          <img src="/hiring.png" />
          <WeAreHiring>
            <H2>{about.hiring_title}</H2>
            <span>{page.about}</span>
            <Button>{about.apply_title}</Button>
          </WeAreHiring>
        </WeAreHiringBox>
        <Container>
          <H2 style={{ marginBottom: 100 }}>{page?.contact_us?.title}</H2>
          {/* <ContactUsBox>
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
          </ContactUsBox> */}
        </Container>
      </Layout>
    </>
  );
};

export default About;
