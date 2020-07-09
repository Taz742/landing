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
import { replaceEnterSymbol, stripHtml } from '@/utils/helpers';

const Pricing = (props: any) => {
  const page = props.pages['Pricing'];
  const { meta = [] } = page;

  // const meta = [
  //   {
  //     title: 'Wallet Features',
  //     content: [
  //       {
  //         title: 'Wallet access via the web and API',
  //         percent: ''
  //       },
  //       {
  //         title: 'Web hooks',
  //         percent: ''
  //       },
  //       {
  //         title: 'Bitcoin, Bitcoin Cash, Bitcoin Gold, Bitcoin SV, Litecoin.',
  //         percent: ''
  //       },
  //       {
  //         title: '20+ coins & tokens (ERC 20, Ethereum, USDT, Pax, e.t.c.)',
  //         percent: ''
  //       },
  //       {
  //         title: 'Broad support for coins and tokens, forks, and airdrops',
  //         percent: ''
  //       },
  //       {
  //         title: 'Coin Swap (Exchange)',
  //         percent: ''
  //       },
  //       {
  //         title: 'Automatic Swapping & currency risk hedging',
  //         percent: ''
  //       },
  //       {
  //         title: 'SegWit Bech32',
  //         percent: ''
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Commercial',
  //     content: [
  //       {
  //         title: 'Fee % per deposit',
  //         percent: '0.0 %'
  //       },
  //       {
  //         title: 'Fee % per transaction value',
  //         percent: '0.2 %'
  //       },
  //       {
  //         title: 'Fee % per swap',
  //         percent: '0.1 %'
  //       },
  //       {
  //         title: 'Variable fees based on transaction volume',
  //         percent: ''
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Support',
  //     content: [
  //       {
  //         title: 'Mail support',
  //         percent: ''
  //       },
  //       {
  //         title: 'VIP Supports - Dedicated account manager',
  //         percent: ''
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Security',
  //     content: [
  //       {
  //         title: 'Bank grade vaults (HSM)',
  //         percent: ''
  //       },
  //       {
  //         title: '2 FA technology',
  //         percent: ''
  //       },
  //       {
  //         title: 'Wallet freezeing',
  //         percent: ''
  //       },
  //       {
  //         title: 'Address whitelisting',
  //         percent: ''
  //       },
  //       {
  //         title: 'Robust security controls: CryptoCurrency Security Standard (CCSS), and ISO27001',
  //         percent: ''
  //       }
  //     ]
  //   }
  // ];

  return (
    <>
      <CustomHead title="CryptX - Pricing" page="/pricing" description={stripHtml(page.data.post_content)} />
      <Layout>
        <PageHeader>
          <PageHeaderBg1 />
          <PageHeaderBg2 />
          <Container>
            <H2>{page.data.post_title}</H2>
            <Text dangerouslySetInnerHTML={{ __html: replaceEnterSymbol(page.data.post_content) }} />
          </Container>
        </PageHeader>
        <PageInner>
          <Container>
            <PricingContainer>
              {meta.map((p: any, i: number) => (
                <PricingItem key={i}>
                  <H2>{p.title}</H2>
                  <PricingFees>
                    {p.content.map((c: any, n: number) => (
                      <PricingFeeItem key={`item-${n}`}>
                        <span className="title">{c.title}</span>
                        <span className="line" />
                        <span className="percent">{c.percent || <img src="/check.svg" />}</span>
                      </PricingFeeItem>
                    ))}
                  </PricingFees>
                </PricingItem>
              ))}
            </PricingContainer>

            <div style={{ textAlign: 'center', padding: '30px 0' }}>
              <Link href="/contact">
                <a>
                  <Button buttonType="primary" inline padding="20px 109px">
                    Contact Us
                  </Button>
                </a>
              </Link>
            </div>

            <PricingText>
              <img src="/info.svg" />
              If you think that you need a different option, contact us and we’ll offer you the custom pricing according to your needs.
            </PricingText>
          </Container>
        </PageInner>
      </Layout>
    </>
  );
};

export default Pricing;
