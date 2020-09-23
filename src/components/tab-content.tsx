import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { replaceEnterSymbol } from '@/utils/helpers';

const TabContent: React.FC<any> = ({ e, onChange, ...props }) => {
  return (
    <VisibilitySensor onChange={onChange} partialVisibility scrollCheck minTopValue={150} offset={{ bottom: 200, top: 150 }} {...props}>
      <div
        dangerouslySetInnerHTML={{
          __html: `<div id="${e.carrer_title}" class="content-section" style="font-size: 18px;"><h2>${e.carrer_title}</h2>${
            e.carrer_text ? replaceEnterSymbol(e.carrer_text) : ''
          }</div>`
        }}
      />
    </VisibilitySensor>
  );
};

export default TabContent;
