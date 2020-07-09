import React from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import { Container } from '@/styled';
import { H2, Text } from '@/styled/typography';
import { PageHeader, PageHeaderBg1, PageHeaderBg2, PageInner, PageSubHeader, TeamContainer, TeamItem } from '@/styled/pages';
import { replaceEnterSymbol, stripHtml } from '@/utils/helpers';

const Team = (props: any) => {
  const page = props.pages['Team'];

  return (
    <>
      <CustomHead title="CryptX - Team" page="/team" description={stripHtml(page.data.post_content)} />
      <Layout>
        <PageHeader>
          <PageHeaderBg1 />
          <PageHeaderBg2 top="0" />
          <Container>
            <PageSubHeader>
              <H2>{page.data.post_title}</H2>
              <Text dangerouslySetInnerHTML={{ __html: replaceEnterSymbol(page.data.post_content) }} />
            </PageSubHeader>
          </Container>
        </PageHeader>
        <PageInner>
          <Container>
            <TeamContainer>
              {page.meta.map((t: any, i: number) => (
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
      </Layout>
    </>
  );
};

export default Team;
