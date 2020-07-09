import React, { FC, ReactElement, useState, memo } from 'react';

import { AccordionContainer, AccordionTitle, AccordionContent, AccordionIcon, Line, Acc } from './accordion-styled';

export const Accordion: FC<IProps> = ({ children }) => <AccordionContainer>{children}</AccordionContainer>;

export const AccordionSection: FC<ISectionProps> = memo(({ children, title = '', expanded }) => {
  const [open, setOpen] = useState(expanded);

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <Acc>
      <AccordionTitle onClick={toggleOpen} expanded={open}>
        <h4 role="button">
          <span className="dot" />
          {title}
        </h4>
        <AccordionIcon role="button" expanded={open}>
          <Line />
          <Line expanded={open} second />
        </AccordionIcon>
      </AccordionTitle>
      <AccordionContent role="region" expanded={open}>
        <section>{children}</section>
      </AccordionContent>
    </Acc>
  );
});

interface IProps {
  children: ReactElement | ReactElement[];
}

export interface ISectionProps {
  title?: string;
  expanded?: boolean;
}

AccordionSection.defaultProps = {
  title: '',
  expanded: false
} as Partial<ISectionProps>;

export default memo(Accordion);
