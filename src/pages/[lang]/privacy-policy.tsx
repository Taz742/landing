import React from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import Tabs, { Panel } from '@/components/library/tabs';
import { Container } from '@/styled';
import { H1, H3 } from '@/styled/typography';
import { SearchPageHeader, PageInner, PageInnerTitle, FaqText } from '@/styled/pages';
import { DataContext } from '@/context/app-context';
import Button from '@/components/library/button';
import TabContent from '@/components/tab-content';

const PrivacyPolicy = () => {
  const [selected, setSelected] = React.useState<number>(0);
  const { data } = React.useContext(DataContext);
  const page: any = data.pages.pages['privacy'] || { meta: [] };

  const content = page.meta.map((e: any, index: number) => {
    return <TabContent key={index} e={e} onChange={(isVisible: boolean) => isVisible && setSelected(index)} />;
  });

  return (
    <>
      <CustomHead title={page.title.title} page="/privacy-policy" description={page.title.description} seo={page.seo} />
      <Layout>
        <SearchPageHeader>
          <PageInnerTitle>
            <H1 style={{ fontSize: 44 }}>{page.title.title}</H1>
            <H3 style={{ fontSize: 20, color: '#808080', margin: 0, padding: 0, marginBottom: -25, marginTop: 5 }}>
              {page.title.description}
            </H3>
          </PageInnerTitle>
        </SearchPageHeader>

        <PageInner>
          <Container>
            <Tabs content={content} selected={selected} handleChangeIndex={(index) => setSelected(index)}>
              {page.meta.map((p: any) => (
                <Panel title={p.carrer_title} key={p.carrer_title} />
              ))}
            </Tabs>

            {page.AllPageContact?.AllPageContactText && (
              <FaqText>
                <img src="/info.svg" />
                {page.AllPageContact?.AllPageContactText}
                {page.AllPageContact?.AllPageContactLink && (
                  <a href={`mailto:${page.AllPageContact?.AllPageContactLink}?subject=Privacy`}>
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

export default PrivacyPolicy;
