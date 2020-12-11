import React from 'react';

import CustomHead from '@/components/custom-head';
import Button from '@/components/library/button';
import { Layout } from '@/components/index';
import { Container, Hero, InnerPage } from '@/styled';
import { NotFoundWrapperStyled } from '@/styled/pages';

const ErrorPage = () => (
  <>
    <CustomHead title="Cryptal - 404 Page not found" page="" description="404" />
    <Layout>
      <Hero>
        <InnerPage>
          <Container>
            <NotFoundWrapperStyled>
              <img src="/images/404.svg" />
              <div>
                <h2>Page Not Found</h2>
                <h4>Contact us at</h4>
                <a href="mailto:support@gex.ge?subject=404">
                  <Button inline buttonType="text">
                    support@gex.ge
                  </Button>
                </a>
              </div>
            </NotFoundWrapperStyled>
          </Container>
        </InnerPage>
      </Hero>
    </Layout>
  </>
);

export default ErrorPage;
