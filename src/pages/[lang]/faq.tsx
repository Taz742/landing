import React, { useState } from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import Button from '@/components/library/button';
import Accordion, { AccordionSection } from '@/components/library/accordion';
import { Container } from '@/styled';
import { H1 } from '@/styled/typography';
import { SearchPageHeader, PageInner, Input, FaqInput, FaqText, PageInnerTitle } from '@/styled/pages';
import { parseHTML } from '@/utils/helpers';
import useTranslation from '@/hooks/useTranslation';
import { DataContext } from '@/context/app-context';

const Faq = () => {
  const [search, setSearch] = useState('');
  const { t } = useTranslation();
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
      <CustomHead title={page.data.post_title} page="/faq" description={t('faq_description')} />
      <Layout>
        <SearchPageHeader>
          <PageInnerTitle>
            <H1>{t('faq')}</H1>
          </PageInnerTitle>
        </SearchPageHeader>

        <PageInner>
          <Container>
            <FaqInput>
              <Input name="search" placeholder={t('How can we help?')} value={search} onChange={handleChange} autoComplete="off" />
              <img src="/search.svg" />
            </FaqInput>

            <Accordion>
              {questions.map((p: any) => (
                <AccordionSection title={p.client_title} key={p.client_title}>
                  <div>{parseHTML(p.client_content)}</div>
                </AccordionSection>
              ))}
            </Accordion>
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
