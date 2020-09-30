import React from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import { Container, FeesBox, FeesItem } from '@/styled';
import { H1, H3, H5 } from '@/styled/typography';
import { SearchPageHeader, PageInner, PageInnerTitle, FaqText } from '@/styled/pages';
import { DataContext } from '@/context/app-context';
import Button from '@/components/library/button';
import useTranslation from '@/hooks/useTranslation';

const Faq = () => {
  const { data } = React.useContext(DataContext);
  const page: any = data.pages.pages['pricing'] || { meta: [] };
  const { locale } = useTranslation();

  return (
    <>
      <CustomHead title={page.title.title} page="/pricing" description={page.title.description} />
      <Layout>
        <SearchPageHeader>
          <PageInnerTitle>
            <img
              src="https://my.rtmark.net/img.gif?f=sync&lr=1&partner=3e54afd06cb2069577a0a0607d76742bf0bf0d119fad796f296d5af8405b4ed7"
              width="1"
              height="1"
            />
            <H1 locale={locale} style={{ fontSize: 44 }}>
              {page.title.title}
            </H1>
            <H3 style={{ fontSize: 20, color: '#808080', margin: 0, padding: 0, marginBottom: -25, marginTop: 5 }}>
              {page.title.description}
            </H3>
          </PageInnerTitle>
        </SearchPageHeader>

        <PageInner>
          <Container>
            {page.meta.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <H5 locale={locale} style={{ marginTop: (index === 0 ? 0 : 1) * 30 }}>
                    {item.title}
                  </H5>
                  <FeesBox>
                    {item.content.map((item: any, i: number) => (
                      <FeesItem locale={locale} key={`${item.title}-${i}`}>
                        <p className="percent">{item.percent}</p>
                        <p className="title">{item.title}</p>
                      </FeesItem>
                    ))}
                  </FeesBox>
                </div>
              );
            })}

            {page.AllPageContact?.AllPageContactText && (
              <FaqText locale={locale}>
                <img src="/info.svg" />
                {page.AllPageContact?.AllPageContactText}
                {page.AllPageContact?.AllPageContactLink && (
                  <a href={`mailto:${page.AllPageContact?.AllPageContactLink}?subject=Pricing`}>
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
