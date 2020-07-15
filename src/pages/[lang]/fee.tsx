import React from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import { Container, FeesBox, FeesItem } from '@/styled';
import { H1, H5 } from '@/styled/typography';
import { SearchPageHeader, PageInner, PageInnerTitle, FaqText } from '@/styled/pages';
import { DataContext } from '@/context/app-context';
import d from '@/utils/data';
import useTranslation from '@/hooks/useTranslation';

const Faq = () => {
  const { data } = React.useContext(DataContext);
  const { t } = useTranslation();
  const page: any = data.pages.find((p: any) => p.slug === 'terms') || { meta: [], title: {} };
  const fee: any = d.pages.fee;

  return (
    <>
      <CustomHead title={page.title.rendered} page="/terms" description={fee?.data?.post_title || ''} />
      <Layout>
        <SearchPageHeader>
          <PageInnerTitle>
            <H1>{fee.data.title}</H1>
          </PageInnerTitle>
        </SearchPageHeader>

        <PageInner>
          <Container>
            <H5>{fee.data.universal_trade.title}</H5>
            <FeesBox>
              {fee.data.universal_trade.data.map((item: any) => (
                <FeesItem>
                  <p className="percent">{item.percent}</p>
                  <p className="title">{item.title}</p>
                </FeesItem>
              ))}
            </FeesBox>
            <H5 style={{ marginTop: 30 }}>{fee.data.deposit_fees.title}</H5>
            <FeesBox>
              {fee.data.deposit_fees.data.map((item: any) => (
                <FeesItem>
                  <p className="percent">{item.percent}</p>
                  <p className="title">{item.title}</p>
                </FeesItem>
              ))}
            </FeesBox>
            <H5 style={{ marginTop: 30 }}>{fee.data.withdrawals_fees.title}</H5>
            <FeesBox>
              {fee.data.withdrawals_fees.data.map((item: any) => (
                <FeesItem>
                  <p className="percent">{item.percent}</p>
                  <p className="title">{item.title}</p>
                </FeesItem>
              ))}
            </FeesBox>

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
