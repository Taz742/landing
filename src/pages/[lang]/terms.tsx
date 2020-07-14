import React from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import Tabs, { Panel } from '@/components/library/tabs';
import { Container } from '@/styled';
import { H1 } from '@/styled/typography';
import { SearchPageHeader, PageInner, PageInnerTitle } from '@/styled/pages';
import { parseHTML } from '@/utils/helpers';
import useTranslation from '@/hooks/useTranslation';
import { DataContext } from '@/context/app-context';
import d from '@/utils/data';

const Faq = () => {
  const { t } = useTranslation();
  const { data } = React.useContext(DataContext);
  const page: any = data.pages.find((p: any) => p.slug === 'terms') || { meta: [], title: {} };
  const terms: any = d.pages.terms;

  return (
    <>
      <CustomHead title={page.title.rendered} page="/terms" description={t('Terms of Use')} />
      <Layout>
        <SearchPageHeader>
          <PageInnerTitle>
            <H1>{t('Terms of Use')}</H1>
          </PageInnerTitle>
        </SearchPageHeader>

        <PageInner>
          <Container>
            <Tabs>
              {terms.meta.map((p: any) => (
                <Panel title={p.carrer_title} key={p.carrer_title}>
                  <div>{parseHTML(p.carrer_text)}</div>
                </Panel>
              ))}
            </Tabs>
          </Container>
        </PageInner>
      </Layout>
    </>
  );
};

export default Faq;
