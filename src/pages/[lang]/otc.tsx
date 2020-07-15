import React from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import Button from '@/components/library/button';
import { Container } from '@/styled';
import { H1 } from '@/styled/typography';
import { DefaultPageHeader, PageInner, FaqText, PageSubHeader, OtcContainer, OtcItem } from '@/styled/pages';
import useTranslation from '@/hooks/useTranslation';
import { DataContext } from '@/context/app-context';
import d from '@/utils/data';

const Faq = () => {
  const { t } = useTranslation();
  const { data } = React.useContext(DataContext);
  const page: any = data.pages.find((p: any) => p.slug === 'otc') || { meta: [], title: {} };

  const otc = d.pages.otc;

  return (
    <>
      <CustomHead title={page.title.rendered} page="/otc" description={otc.data.post_title} />
      <Layout>
        <DefaultPageHeader>
          <PageSubHeader>
            <Container>
              <H1>{otc.data.post_title}</H1>
              <p>{otc.data.post_content}</p>
            </Container>
          </PageSubHeader>
        </DefaultPageHeader>

        <PageInner>
          <Container>
            <OtcContainer>
              {otc.meta.map((t: any, i: number) => (
                <OtcItem key={i}>
                  <div className="logo">
                    <img src={t.logo} />
                  </div>
                  <h4>{t.title}</h4>
                </OtcItem>
              ))}
            </OtcContainer>

            <FaqText>
              <img src="/info.svg" />
              {t('faq_info_text')}:
              <a href="mailto:support@gex.ge?subject=F.A.Q">
                <Button inline buttonType="text">
                  support@gex.ge
                </Button>
              </a>
            </FaqText>
          </Container>
        </PageInner>
      </Layout>
    </>
  );
};

export default Faq;
