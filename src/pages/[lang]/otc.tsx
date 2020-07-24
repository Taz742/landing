import React from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import Button from '@/components/library/button';
import { Container } from '@/styled';
import { H1 } from '@/styled/typography';
import { DefaultPageHeader, PageInner, FaqText, PageSubHeader, OtcContainer, OtcItem } from '@/styled/pages';
import { DataContext } from '@/context/app-context';

const Otc = () => {
  const { data } = React.useContext(DataContext);
  const page: any = data.pages.pages['otc'] || { meta: [] };
  const meta = page.meta || [];
  // const otc: any = data.static.pages['otc'];

  return (
    <>
      <CustomHead title={page.title.title} page="/otc" description={page.title.description} />
      <Layout>
        <DefaultPageHeader>
          <PageSubHeader>
            <Container>
              <H1>{page.title.title}</H1>
              <p>{page.title.decription}</p>
            </Container>
          </PageSubHeader>
        </DefaultPageHeader>

        <PageInner>
          <Container>
            {meta.length > 0 && (
              <OtcContainer>
                {meta.map((t: any, i: number) => (
                  <OtcItem key={i}>
                    <div className="logo">
                      <img src={t.client_logo} />
                    </div>
                    <h4>{t.client_title}</h4>
                  </OtcItem>
                ))}
              </OtcContainer>
            )}

            {page.AllPageContact?.AllPageContactText && (
              <FaqText>
                <img src="/info.svg" />
                {page.AllPageContact?.AllPageContactText}
                {page.AllPageContact?.AllPageContactLink && (
                  <a href={`mailto:${page.AllPageContact?.AllPageContactLink}?subject=OTC`}>
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

export default Otc;
