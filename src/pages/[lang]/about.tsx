import React, { useState } from 'react';

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
  ConnectIcons,
  ContactUsContainer
} from '@/styled';
import { H2, Text, H5 } from '@/styled/typography';
import { PageInner, PageSubHeader, TeamContainer, TeamItem, PageHeader } from '@/styled/pages';
import { Button } from '@/components/library/button';
import { DataContext } from '@/context/app-context';
import { parseHTML } from '@/utils/helpers';
import useTranslation from '@/hooks/useTranslation';

const About = (_props: any) => {
  const [openMembers, setOpenMembers] = useState<any>({});
  const { t } = useTranslation();
  const { data } = React.useContext(DataContext);
  const page: any = data.pages.pages['about'] || { meta: [], data: { post_title: '' } };
  const about: any = data.static.pages['about'];
  const aboutUsPage: any = about.data;
  const extra: any = data.pages.extra;

  const toggleOpen = (i: number) => {
    setOpenMembers((prev: any) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <>
      <CustomHead title={page.data.post_title} page="/about" description={page.data.post_title} />
      <Layout>
        <PageHeader height="100px" className="hide_image" />
        <Container>
          <PageSubHeader type="about" style={{ padding: '60px 0 0' }}>
            <H2>{page.data.post_title}</H2>
            <Text align="left" padding="45px 0px">
              {parseHTML(page.data.post_content)}
            </Text>
          </PageSubHeader>
        </Container>
        <PageInner>
          <Container>
            <TeamContainer>
              {page.meta.map((member: any, i: number) => (
                <TeamItem key={i} open={openMembers[i]}>
                  <div className="logo">
                    <img src={member.client_logo || ''} />
                  </div>
                  <h4>{member.client_title}</h4>
                  <span>{member.client_position}</span>
                  <p className="description">{member.client_desc}</p>
                  <div className="links">
                    <a href={member.client_linkedin} target="_blank" rel="noopener" style={{ marginRight: '15px' }}>
                      <img src="/linkedin.svg" />
                    </a>
                    <button className="more" onClick={() => toggleOpen(i)}>
                      {t('More')} <img src="/mini_arrow_down.svg" />
                    </button>
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
            <a href="#" target="_blank" rel="noopener">
              <Button>{about.apply_title}</Button>
            </a>
          </WeAreHiring>
        </WeAreHiringBox>

        <Container>
          <ContactUsContainer>
            <H2>{aboutUsPage?.contact_us?.title}</H2>
            <ContactUsBox>
              <OurAddress>
                <img src={aboutUsPage.contact_us?.our_address.logo} />
                <H5>{aboutUsPage.contact_us?.our_address.title}</H5>

                <OurAddressContent>
                  {aboutUsPage.contact_us?.our_address.data.map((item: string, index: number) => (
                    <p key={index}>{item}</p>
                  ))}
                </OurAddressContent>
              </OurAddress>
              <WriteUs>
                <img src={aboutUsPage.contact_us?.write_us.logo} />
                <H5>{aboutUsPage.contact_us?.write_us.title}</H5>

                <WriteUsContent>
                  {aboutUsPage.contact_us?.write_us.data.map((item: string, index: number) => (
                    <p key={index}>{item}</p>
                  ))}
                </WriteUsContent>
              </WriteUs>
              <Connect>
                <img src={aboutUsPage.contact_us?.connect.logo} />
                <H5>{aboutUsPage.contact_us?.connect.title}</H5>
                <p>{aboutUsPage.contact_us?.connect.subTitle}</p>

                <ConnectIcons>
                  <a href={extra.linkedin} target="_blank" rel="noopener">
                    <img src="/white_linkedin.svg" />
                  </a>
                  <a href={extra.facebook} target="_blank" rel="noopener">
                    <img src="/white_facebook.svg" />
                  </a>
                  <a href={extra.twitter} target="_blank" rel="noopener">
                    <img src="/white_twitter.svg" />
                  </a>
                </ConnectIcons>
              </Connect>
            </ContactUsBox>
          </ContactUsContainer>
        </Container>
      </Layout>
    </>
  );
};

export default About;
