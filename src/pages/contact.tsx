import React from 'react';
import fetch from 'node-fetch';

import CustomHead from '@/components/custom-head';
import { Layout } from '@/components/index';
import Button from '@/components/library/button';
import Input from '@/components/library/input';
import { Container } from '@/styled';
import { H2, Text } from '@/styled/typography';
import {
  PageHeader,
  PageHeaderBg1,
  PageHeaderBg2,
  PageInner,
  ContactContainer,
  ContactItem,
  FaqText,
  ContactSuccess
} from '@/styled/pages';
import useForm from '@/hooks/use-form';
import config from '@/utils/config';

const Contact = () => {
  const { values, handleChange, handleSubmit, loading, submitted, error } = useForm({
    name: '',
    email: '',
    company: '',
    product: '',
    phone: ''
  });

  const submit = async (formValues: any) => {
    const { name, email, phone } = formValues;
    if (!name || (!phone && !email)) return Promise.reject();

    try {
      return await fetch(config.contactPostUrl, {
        method: 'post',
        body: JSON.stringify(formValues),
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return (
    <>
      <CustomHead title="CryptX - Contact" page="/contact" description="Get Connected with CryptX" />
      <Layout>
        <PageHeader>
          <PageHeaderBg1 />
          <PageHeaderBg2 />
          <Container>
            <H2>Contact</H2>
            <Text lineHeight="20px">Get Connected</Text>
          </Container>
        </PageHeader>
        <PageInner>
          <Container>
            {submitted ? (
              <ContactSuccess>
                <img src="/check.svg" width="50" />
                <span>Thank you. Our representative will reach out to you soon.</span>
              </ContactSuccess>
            ) : (
              <form onSubmit={handleSubmit(submit)}>
                <ContactContainer>
                  <ContactItem>
                    <Input name="name" placeholder="Name" value={values.name} onChange={handleChange} />
                  </ContactItem>
                  <ContactItem>
                    <Input type="email" name="email" placeholder="E-mail" value={values.email} onChange={handleChange} />
                  </ContactItem>
                  <ContactItem>
                    <Input name="company" placeholder="Company" value={values.company} onChange={handleChange} />
                  </ContactItem>
                  <ContactItem>
                    <Input name="product" placeholder="Subject" value={values.product} onChange={handleChange} />
                  </ContactItem>
                  <ContactItem>
                    <Input name="phone" placeholder="Phone" value={values.phone} onChange={handleChange} />
                  </ContactItem>
                  <ContactItem>
                    <Button type="submit" buttonType="primary" loading={loading}>
                      Contact Us
                    </Button>
                  </ContactItem>
                </ContactContainer>
              </form>
            )}

            {error && <div style={{ fontSize: '19px', color: '#F44336', textAlign: 'center' }}>There was an error</div>}

            <FaqText>
              Or send us an email to the following address:{' '}
              <a href="mailto:support@cryptx.com?subject=Contact">
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

export default Contact;
