import React from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import { Container, FeesBox, FeesItem } from '@/styled';
import { H1, H5 } from '@/styled/typography';
import { SearchPageHeader, PageInner, PageInnerTitle, FaqText } from '@/styled/pages';
import { DataContext } from '@/context/app-context';
import useTranslation from '@/hooks/useTranslation';

const Faq = () => {
  const { data } = React.useContext(DataContext);
  const { t } = useTranslation();
  const page: any = data.pages.pages['pricing'];

  return (
    <>
      <CustomHead title={page.data.post_title} page="/terms" description={page.data.post_title} />
      <Layout>
        <SearchPageHeader>
          <PageInnerTitle>
            <H1>{page.data.post_title}</H1>
          </PageInnerTitle>
        </SearchPageHeader>

        <PageInner>
          <Container>
            {page.meta.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <H5 style={{ marginTop: (index === 0 ? 0 : 1) * 30 }}>{item.title}</H5>
                  <FeesBox>
                    {item.content.map((item: any) => (
                      <FeesItem>
                        <p className="percent">{item.percent}</p>
                        <p className="title">{item.title}</p>
                      </FeesItem>
                    ))}
                  </FeesBox>
                </div>
              );
            })}
            <FaqText>
              <img src="/info.svg" />
              {t('fee_info_text')}
            </FaqText>
          </Container>
        </PageInner>
      </Layout>
    </>
  );
};

export default Faq;
