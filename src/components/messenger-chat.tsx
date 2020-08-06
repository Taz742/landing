import React from 'react';
// @ts-ignore
import MessengerCustomerChat from 'react-messenger-customer-chat';

import config from '@/utils/config';
import useTranslation from '@/hooks/useTranslation';

const MessengerChat: React.FC = () => {
  const { locale } = useTranslation();

  const language = locale === 'ka' ? 'ka_GE' : 'en_US';
  const loggedInGreeting = locale === 'ka' ? 'მოგესალმებით! რით შეგვიძლია დაგეხმაროთ?' : 'Welcome! How can we help?';

  return <MessengerCustomerChat pageId={config.fbPageId} appId={config.fbAppId} language={language} loggedInGreeting={loggedInGreeting} />;
};

export default MessengerChat;
