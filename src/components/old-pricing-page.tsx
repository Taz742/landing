import React from 'react';
import Link from 'next/link';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import Button from '@/components/library/button';
import { Container } from '@/styled';
import { H2, Text } from '@/styled/typography';
import {
  PageHeader,
  PageHeaderBg1,
  PageHeaderBg2,
  PageInner,
  PricingContainer,
  PricingItem,
  PricingFees,
  PricingFeeItem,
  PricingText
} from '@/styled/pages';
import { splitText } from '@/utils/helpers';

const Pricing = (props: any) => {
  const page = props.pages['Pricing'];
  const texts = splitText(page.data.post_content);

  return (
    <>
      <CustomHead title="CryptX - Pricing" page="/pricing" description="CryptX - Pricing" />
      <Layout>
        <PageHeader>
          <PageHeaderBg1 />
          <PageHeaderBg2 />
          <Container>
            <H2>{page.data.post_title}</H2>
            {texts.map((t: any, i: number) => (
              <Text key={i}>{t}</Text>
            ))}
          </Container>
        </PageHeader>
        <PageInner>
          <Container>
            <PricingContainer>
              {page.meta.map((p: any, i: number) => (
                <PricingItem key={i}>
                  <H2>{p.title}</H2>
                  <PricingFees>
                    <PricingFeeItem>
                      <span className="title">Deposit fee</span>
                      <span className="line" />
                      <span className="percent">{p.deposit_fee} %</span>
                    </PricingFeeItem>
                    <PricingFeeItem>
                      <span className="title">Withdrawal fee</span>
                      <span className="line" />
                      <span className="percent">{p.withdrawal_fee} %</span>
                    </PricingFeeItem>
                    <PricingFeeItem>
                      <span className="title">Swap fee</span>
                      <span className="line" />
                      <span className="percent">{p.swap_fee} %</span>
                    </PricingFeeItem>
                  </PricingFees>
                  <Link href="/contact">
                    <a>
                      <Button buttonType="primary">Contact Us</Button>
                    </a>
                  </Link>
                </PricingItem>
              ))}
            </PricingContainer>
            <PricingText>
              If you think that you need a different option, contact us and we’ll offer you the custom pricing according to your needs.
            </PricingText>
          </Container>
        </PageInner>
      </Layout>
    </>
  );
};

export default Pricing;
