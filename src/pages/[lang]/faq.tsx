import React, { useState } from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import Button from '@/components/library/button';
import Accordion, { AccordionSection } from '@/components/library/accordion';
import { Container } from '@/styled';
import { H3, Text } from '@/styled/typography';
import { SearchPageHeader, PageHeaderBg1, PageHeaderBg2, PageInner, PageSubHeader, Input, FaqInput, FaqText } from '@/styled/pages';
import { replaceEnterSymbol } from '@/utils/helpers';
import useTranslation from '@/hooks/useTranslation';

const Faq = (props: any) => {
  const page = props.pages['faq'];
  const [search, setSearch] = useState('');
  const [filteredQuestions, setFiltered] = useState(page.meta);
  const { t } = useTranslation();

  const handleChange = (e: any) => {
    const val = e.target.value;
    setSearch(val);
    if (val.length >= 3) {
      setFiltered(
        page.meta.filter(
          (q: any) =>
            String(q.client_title).toLocaleLowerCase().includes(search) || String(q.client_content).toLocaleLowerCase().includes(search)
        )
      );
    } else {
      setFiltered(page.meta);
    }
  };

  return (
    <>
      <CustomHead title={t('faq_title')} page="/faq" description={t('faq_description')} />
      <Layout>
        <SearchPageHeader>
          <PageHeaderBg1 />
          <PageHeaderBg2 />
          <Container>
            <PageSubHeader>
              <H3>{t('faq')}</H3>
              <Text dangerouslySetInnerHTML={{ __html: replaceEnterSymbol(page.data.post_content) }} />
            </PageSubHeader>
            <FaqInput>
              <Input name="search" placeholder={t('How can we help?')} value={search} onChange={handleChange} autoComplete="off" />
              <img src="/search.svg" />
            </FaqInput>
          </Container>
        </SearchPageHeader>
        <PageInner>
          <Container>
            <Accordion>
              {filteredQuestions.map((p: any) => (
                <AccordionSection title={p.client_title} key={p.client_title}>
                  <div dangerouslySetInnerHTML={{ __html: replaceEnterSymbol(p.client_content) }} />
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
