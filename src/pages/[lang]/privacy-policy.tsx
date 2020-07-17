import React from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import Tabs, { Panel } from '@/components/library/tabs';
import { Container } from '@/styled';
import { H1 } from '@/styled/typography';
import { SearchPageHeader, PageInner, PageInnerTitle } from '@/styled/pages';
import { replaceEnterSymbol } from '@/utils/helpers';
import { DataContext } from '@/context/app-context';

const PrivacyPolicy = () => {
  const { data } = React.useContext(DataContext);
  const page: any = data.pages.pages['privacy'] || { meta: [], data: { post_title: '' } };
  let content = '';
  page.meta.forEach((e: any) => {
    content += `<div id="${e.carrer_title}">${e.carrer_text || ''}</div>`;
  });

  return (
    <>
      <CustomHead title={page.data.post_title} page="/privacy-policy" description={page.data.post_title} />
      <Layout>
        <SearchPageHeader>
          <PageInnerTitle>
            <H1>{page.data.post_title}</H1>
          </PageInnerTitle>
        </SearchPageHeader>

        <PageInner>
          <Container>
            <Tabs content={<div dangerouslySetInnerHTML={{ __html: replaceEnterSymbol(content) }}></div>}>
              {page.meta.map((p: any) => (
                <Panel title={p.carrer_title} key={p.carrer_title} />
              ))}
            </Tabs>
          </Container>
        </PageInner>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
