import React from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import { Container } from '@/styled';
import { H2, Text } from '@/styled/typography';
import { PageHeader, PageHeaderBg1, PageHeaderBg2, PageInner, PageSubHeader, ClientsContainer, ClientItem } from '@/styled/pages';
import { replaceEnterSymbol, stripHtml } from '@/utils/helpers';

const Clients = (props: any) => {
  const page = props.pages['Clients'];

  return (
    <>
      <CustomHead title="CryptX - Clients" page="/clients" description={stripHtml(page.data.post_content)} />
      <Layout>
        <PageHeader>
          <PageHeaderBg1 />
          <PageHeaderBg2 />
          <Container>
            <PageSubHeader>
              <H2>{page.data.post_title}</H2>
              <Text dangerouslySetInnerHTML={{ __html: replaceEnterSymbol(page.data.post_content) }} />
            </PageSubHeader>
          </Container>
        </PageHeader>
        <PageInner>
          <Container>
            <ClientsContainer>
              {page.meta.map((t: any, i: number) => (
                <ClientItem key={i}>
                  <a href={t.client_link} target="_blank" rel="noopener">
                    <img src={t.client_logo} />
                  </a>
                  <p>{t.client_content}</p>
                </ClientItem>
              ))}
            </ClientsContainer>
          </Container>
        </PageInner>
      </Layout>
    </>
  );
};

export default Clients;
