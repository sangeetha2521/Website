import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="min-h-screen flex flex-col bg-white">{children}</div>;
};

export default Container;
