import React from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import { Container, FeesBox, FeesItem } from '@/styled';
import { H1, H5 } from '@/styled/typography';
import { SearchPageHeader, PageInner, PageInnerTitle, FaqText } from '@/styled/pages';
import { DataContext } from '@/context/app-context';
import Button from '@/components/library/button';

const Faq = () => {
  const { data } = React.useContext(DataContext);
  const page: any = data.pages.pages['pricing'] || { meta: [] };

  return (
    <>
      <CustomHead title={page.title.title} page="/pricing" description={page.title.description} />
      <Layout>
        <SearchPageHeader>
          <PageInnerTitle>
            <H1>{page.title.title}</H1>
          </PageInnerTitle>
        </SearchPageHeader>

        <PageInner>
          <Container>
            {page.meta.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <H5 style={{ marginTop: (index === 0 ? 0 : 1) * 30 }}>{item.title}</H5>
                  <FeesBox>
                    {item.content.map((item: any, i: number) => (
                      <FeesItem key={`${item.title}-${i}`}>
                        <p className="percent">{item.percent}</p>
                        <p className="title">{item.title}</p>
                      </FeesItem>
                    ))}
                  </FeesBox>
                </div>
              );
            })}

            {page.AllPageContact?.AllPageContactText && (
              <FaqText>
                <img src="/info.svg" />
                {page.AllPageContact?.AllPageContactText}
                {page.AllPageContact?.AllPageContactLink && (
                  <a href={`mailto:${page.AllPageContact?.AllPageContactLink}?subject=F.A.Q`}>
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

export default Faq;
