import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="wrapper">
      <main>{children}</main>
    </div>
  );
};
