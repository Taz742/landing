import React, { useState, ReactNode } from 'react';
import { Tab } from './tab.styled';
import { TabMenu, TabContainer } from './inline.styled';

export type IPanel = {
  children?: ReactNode;
  title?: string;
  props?: {
    title: string;
  };
} | null;

export interface ITab {
  selected?: number;
  children: IPanel[];
  content: any;
}

function renderElem(elem?: IPanel) {
  if (elem && elem.props) {
    return elem.props.title;
  }
  return null;
}

export const Tabs = (args: ITab) => {
  const initialSelected = args.selected || (args.children && args.children[0] ? 0 : 1);
  const [selected, setSelected] = useState<number>(initialSelected);
  const [active, setActive] = useState<string>('');
  const [overflow, setOverflow] = useState('');

  function handleChange(index: number, el: any = { props: { title: '' } }) {
    const element = document.getElementById(el.props.title);
    if (element && window && args.content) {
      const yOffset = -102; // header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    if (index === selected) return;
    if (!args.content) setOverflow('hidden');
    setSelected(index);
    setActive('active');
    setTimeout(() => {
      setActive('');
      if (!args.content) setOverflow('');
    }, 100);
  }

  function renderTabMenu() {
    if (args.children) {
      return args.children.map((elem, index) => {
        if (!elem) return null;
        const style = index === selected ? 'selected' : '';
        return (
          <li className={style} key={index} onKeyDown={() => handleChange(index, elem)} onClick={() => handleChange(index, elem)}>
            {renderElem(elem)}
          </li>
        );
      });
    }
    return null;
  }

  return (
    <TabContainer overflow={overflow}>
      <TabMenu>{renderTabMenu()}</TabMenu>
      <Tab>{args.content ? <div className={active}>{args.content}</div> : <div className={active}>{args.children[selected]}</div>}</Tab>
    </TabContainer>
  );
};

Tabs.defaultProps = {
  selected: 0
} as Partial<ITab>;

export default Tabs;

export const Panel = (args: IPanel) => {
  return <div>{args?.children}</div>;
};
