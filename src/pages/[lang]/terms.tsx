import React from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import Tabs, { Panel } from '@/components/library/tabs';
import { Container } from '@/styled';
import { H1 } from '@/styled/typography';
import { SearchPageHeader, PageInner, PageInnerTitle, FaqText } from '@/styled/pages';
import { replaceEnterSymbol } from '@/utils/helpers';
import { DataContext } from '@/context/app-context';
import Button from '@/components/library/button';

const Terms = () => {
  const { data } = React.useContext(DataContext);
  const page: any = data.pages.pages['terms'] || { meta: [] };
  let content = '';
  page.meta.forEach((e: any) => {
    content += `<div id="${e.carrer_title}">${e.carrer_text || ''}</div>`;
  });

  return (
    <>
      <CustomHead title={page.title.title} page="/terms" description={page.title.description} />
      <Layout>
        <SearchPageHeader>
          <PageInnerTitle>
            <H1>{page.title.title}</H1>
          </PageInnerTitle>
        </SearchPageHeader>

        <PageInner>
          <Container>
            <Tabs content={<div dangerouslySetInnerHTML={{ __html: replaceEnterSymbol(content) }}></div>}>
              {page.meta.map((p: any) => (
                <Panel title={p.carrer_title} key={p.carrer_title} />
              ))}
            </Tabs>

            {page.AllPageContact?.AllPageContactText && (
              <FaqText>
                <img src="/info.svg" />
                {page.AllPageContact?.AllPageContactText}
                {page.AllPageContact?.AllPageContactLink && (
                  <a href={`mailto:${page.AllPageContact?.AllPageContactLink}?subject=Terms`}>
                    <Button inline buttonType="text">
                      {page.AllPageContact?.AllPageContactLink}
                    </Button>
                  </a>
                )}
              </FaqText>
            )}
          </Container>
        </PageInner>
      </Layout>
    </>
  );
};

export default Terms;
