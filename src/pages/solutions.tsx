import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import Button from '@/components/library/button';
import { Container } from '@/styled';
import { H2, H3, Text, Subtext } from '@/styled/typography';
import { PageHeader, PageHeaderBg1, PageHeaderBg2, PageInner, PageSubHeader, SolutionItem, SolutionContent, FaqText } from '@/styled/pages';
import { replaceEnterSymbol, stripHtml } from '@/utils/helpers';

const Solutions = (props: any) => {
  const page = props.pages['Solutions'];
  // @ts-ignore
  const { el }: { el: string } = useRouter().query;

  useEffect(() => {
    const element = document.getElementById(el);
    if (element && window) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return (
    <>
      <CustomHead title="CryptX - Solutions" page="/solutions" description={stripHtml(page.data.post_content)} />
      <Layout>
        <PageHeader>
          <PageHeaderBg1 />
          <PageHeaderBg2 />
          <Container>
            <PageSubHeader>
              <H2>{page.data.post_title}</H2>
              <Text dangerouslySetInnerHTML={{ __html: replaceEnterSymbol(page.data.post_content) }} />
            </PageSubHeader>
          </Container>
        </PageHeader>
        <PageInner>
          <Container>
            {page.meta.map((p: any) => (
              <SolutionItem key={p.client_title} id={p.client_title}>
                <img src={p.client_logo || ''} alt="image" />
                <SolutionContent>
                  <H3 lineHeight="auto">{p.client_title}</H3>
                  <Subtext dangerouslySetInnerHTML={{ __html: replaceEnterSymbol(p.client_content) }} />
                </SolutionContent>
              </SolutionItem>
            ))}
            <FaqText>
              <img src="/info.svg" />
              As long as CryptX is the simplest way to manage digital assets, we can find solution to any type of business involved with
              cryptocurrencies. Contact us and we'll offer you the custom solution based on your business operations
              <a href="mailto:support@cryptx.com?subject=Solutions">
                <Button inline buttonType="text">
                  support@cryptx.com
                </Button>
              </a>
            </FaqText>
          </Container>
        </PageInner>
      </Layout>
    </>
  );
};

export default Solutions;
