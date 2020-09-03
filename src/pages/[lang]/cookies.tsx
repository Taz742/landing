import React from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import Tabs, { Panel } from '@/components/library/tabs';
import { Container } from '@/styled';
import { H1, Text } from '@/styled/typography';
import { SearchPageHeader, PageInner, PageInnerTitle, FaqText } from '@/styled/pages';
import { replaceEnterSymbol } from '@/utils/helpers';
import { DataContext } from '@/context/app-context';
import Button from '@/components/library/button';
import TabContent from '@/components/tab-content';

const Cookies = () => {
  const [selected, setSelected] = React.useState<number>(0);
  const { data } = React.useContext(DataContext);
  const page: any = data.pages.pages['cookies'] || { meta: [] };
  const meta = page.meta || [];

  const content = meta.map((e: any, index: number) => {
    return <TabContent key={index} e={e} onChange={(isVisible: boolean) => isVisible && setSelected(index)} />;
  });

  return (
    <>
      <CustomHead title={page.title.title} page="/cookies" description={page.title.description} />
      <Layout>
        <SearchPageHeader>
          <PageInnerTitle>
            <H1 style={{ fontSize: 40 }}>{page.title.title}</H1>
          </PageInnerTitle>
        </SearchPageHeader>

        <PageInner>
          <Container>
            <Text align="left" padding="45px 0px" dangerouslySetInnerHTML={{ __html: replaceEnterSymbol(page.title.description) }} />

            <Tabs content={content} selected={selected} handleChangeIndex={(index) => setSelected(index)}>
              {meta.map((p: any) => (
                <Panel title={p.carrer_title} key={p.carrer_title} />
              ))}
            </Tabs>

            {page.AllPageContact?.AllPageContactText && (
              <FaqText>
                <img src="/info.svg" />
                {page.AllPageContact?.AllPageContactText}
                {page.AllPageContact?.AllPageContactLink && (
                  <a href={`mailto:${page.AllPageContact?.AllPageContactLink}?subject=Cookies`}>
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

export default Cookies;
