import React, { useState } from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import Button from '@/components/library/button';
import Accordion, { AccordionSection } from '@/components/library/accordion';
import { Container } from '@/styled';
import { H1, H3 } from '@/styled/typography';
import { SearchPageHeader, PageInner, Input, FaqInput, FaqText, PageInnerTitle } from '@/styled/pages';
import { DataContext } from '@/context/app-context';
import { replaceEnterSymbol } from '@/utils/helpers';

const Faq = () => {
  const [search, setSearch] = useState('');
  const { data } = React.useContext(DataContext);
  const page: any = data.pages.pages['faq'] || { meta: [], data: { post_title: '' } };
  const questions =
    search.length >= 3
      ? page.meta.filter(
          (q: any) =>
            String(q.client_title).toLocaleLowerCase().includes(search) || String(q.client_content).toLocaleLowerCase().includes(search)
        )
      : page.meta;

  const handleChange = (e: any) => setSearch(e.target.value);

  return (
    <>
      <CustomHead title={page.title.title} page="/faq" description={page.title.decsription} seo={page.seo} />
      <Layout>
        <SearchPageHeader>
          <PageInnerTitle>
            <H1 style={{ fontSize: 44 }}>{page.title.title}</H1>
            <H3 style={{ fontSize: 20, color: '#808080', margin: 0, padding: 0, marginBottom: -25, marginTop: 5 }}>
              {page.title.description}
            </H3>
          </PageInnerTitle>
        </SearchPageHeader>

        <PageInner>
          <Container>
            <FaqInput>
              <Input name="search" placeholder={page.search} value={search} onChange={handleChange} autoComplete="off" />
              <img src="/search.svg" />
            </FaqInput>

            <Accordion>
              {questions.map((p: any) => (
                <AccordionSection title={p.client_title} key={p.client_title}>
                  <span dangerouslySetInnerHTML={{ __html: replaceEnterSymbol(p.client_content) }} />
                </AccordionSection>
              ))}
            </Accordion>

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
