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

  function handleChange(index: number) {
    if (index === selected) return;
    setOverflow('hidden');
    setSelected(index);
    setActive('active');
    setTimeout(() => {
      setActive('');
      setOverflow('');
    }, 100);
  }

  function renderTabMenu() {
    if (args.children) {
      return args.children.map((elem, index) => {
        if (!elem) return null;
        const style = index === selected ? 'selected' : '';
        return (
          <li className={style} key={index} onKeyDown={() => handleChange(index)} onClick={() => handleChange(index)}>
            {renderElem(elem)}
            <span className="line"></span>
          </li>
        );
      });
    }
    return null;
  }

  return (
    <TabContainer overflow={overflow}>
      <TabMenu>{renderTabMenu()}</TabMenu>
      <Tab>
        <div className={active}>{args.children[selected]}</div>
      </Tab>
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
