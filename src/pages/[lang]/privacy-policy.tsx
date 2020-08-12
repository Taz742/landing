import React from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import Tabs, { Panel } from '@/components/library/tabs';
import { Container } from '@/styled';
import { H1 } from '@/styled/typography';
import { SearchPageHeader, PageInner, PageInnerTitle, FaqText } from '@/styled/pages';
import { DataContext } from '@/context/app-context';
import Button from '@/components/library/button';
import { useInView } from 'react-hook-inview';

const View = ({ e, onEnter }: any) => {
  const [ref] = useInView({
    threshold: 1,
    onEnter
  });

  return (
    <div ref={ref}>
      <div
        dangerouslySetInnerHTML={{
          __html: `<div id="${e.carrer_title}" class="content-section"><h3>${e.carrer_title}</h3>${e.carrer_text || ''}</div>`
        }}
      />
    </div>
  );
};

const PrivacyPolicy = () => {
  const [selected, setSelected] = React.useState<number>(0);
  const { data } = React.useContext(DataContext);
  const page: any = data.pages.pages['privacy'] || { meta: [] };

  const content = page.meta.map((e: any, index: number) => {
    return <View key={index} e={e} onEnter={() => setSelected(index)} />;
  });

  return (
    <>
      <CustomHead title={page.title.title} page="/privacy-policy" description={page.title.description} />
      <Layout>
        <SearchPageHeader>
          <PageInnerTitle>
            <H1>{page.title.title}</H1>
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
