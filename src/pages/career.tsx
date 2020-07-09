import React from 'react';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import Button from '@/components/library/button';
import { Container } from '@/styled';
import { H2, H3, Text } from '@/styled/typography';
import {
  PageHeader,
  PageHeaderBg1,
  PageHeaderBg2,
  PageInner,
  PageSubHeader,
  CareerLogosContainer,
  CareerLogoItem,
  CareerTableContainer
} from '@/styled/pages';
import { replaceEnterSymbol, stripHtml } from '@/utils/helpers';

const Career = (props: any) => {
  const page = props.pages['Careers'];

  const careerLogos = [
    {
      logo: '/Competitive.svg',
      name: 'Competitive Salaries'
    },
    {
      logo: '/Growth.svg',
      name: 'Growth Opportunities'
    },
    {
      logo: '/Challenging.svg',
      name: 'Challenging Tasks'
    },
    {
      logo: '/Friendly.svg',
      name: 'Friendly Environment'
    }
  ];

  const headers = ['Position', 'Location', 'Type', 'Date', ''];

  return (
    <>
      <CustomHead title="CryptX - Careers" page="/career" description={stripHtml(page.data.post_content)} />
      <Layout>
        <PageHeader>
          <PageHeaderBg1 />
          <PageHeaderBg2 top="0" />
          <Container>
            <PageSubHeader>
              <H2>{page.data.post_title}</H2>
              <Text dangerouslySetInnerHTML={{ __html: replaceEnterSymbol(page.data.post_content) }} />
            </PageSubHeader>
          </Container>
        </PageHeader>
        <PageInner>
          <Container>
            <H3 align="center">Why Work at СryptX?</H3>
            <CareerLogosContainer>
              {careerLogos.map((t: any, i: number) => (
                <CareerLogoItem key={i}>
                  <span className="logo">
                    <img src={t.logo} />
                  </span>
                  <h4>{t.name}</h4>
                </CareerLogoItem>
              ))}
            </CareerLogosContainer>
            {page.openings.length <= 0 ? (
              <H3 align="center">Currently there are no openings</H3>
            ) : (
              <>
                <H3 align="center" margin="0 0 10px">
                  Current openings
                </H3>
                <CareerTableContainer>
                  <table>
                    <thead>
                      <tr>
                        {headers.map((h, i) => (
                          <td key={`th-${i}`}>{h}</td>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {page.openings.map((o: any, i: number) => (
                        <tr key={`td-${i}`}>
                          <td>{o.position}</td>
                          <td>{o.location}</td>
                          <td>{o.type}</td>
                          <td>{o.date}</td>
                          <td align="right">
                            <a href={o.apply} target="_blank" rel="noopener">
                              <Button inline buttonType="text">
                                Apply Now
                              </Button>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CareerTableContainer>
              </>
            )}
          </Container>
        </PageInner>
      </Layout>
    </>
  );
};

export default Career;
