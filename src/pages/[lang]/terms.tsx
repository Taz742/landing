import React from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import Tabs, { Panel } from '@/components/library/tabs';
import { Container } from '@/styled';
import { H1 } from '@/styled/typography';
import { SearchPageHeader, PageInner, PageInnerTitle } from '@/styled/pages';
import { parseHTML } from '@/utils/helpers';
import { DataContext } from '@/context/app-context';
import d from '@/utils/data';

const Faq = () => {
  const { data } = React.useContext(DataContext);
  const page: any = data.pages.find((p: any) => p.slug === 'terms') || { meta: [], title: {} };
  const terms: any = d.pages.terms;

  return (
    <>
      <CustomHead title={page.title.rendered} page="/terms" description={terms.data.post_title} />
      <Layout>
        <SearchPageHeader>
          <PageInnerTitle>
            <H1>{terms.data.post_title}</H1>
          </PageInnerTitle>
        </SearchPageHeader>

        <PageInner>
          <Container>
            <Tabs content={<div>{parseHTML(terms.data.post_content)}</div>}>
              {terms.meta.map((p: any) => (
                <Panel title={p.carrer_title} key={p.carrer_title} />
              ))}
            </Tabs>
          </Container>
        </PageInner>
      </Layout>
    </>
  );
};

export default Faq;
