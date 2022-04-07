import React, { useEffect, useState } from 'react';
import { M, MEvent } from './instance';

export const MContext = React.createContext<Array<IReportItem>>([]);

interface MProps {
  children: React.ReactNode;
}

MContext.displayName = 'MContext';

M.init();

export const MProvider = ({ children }: MProps) => {
  const [data, setData] = useState(M.get());
  useEffect(() => {
    MEvent.on('update', () => {
      setData(M.get());
    });
  }, []);
  return <MContext.Provider value={data}>{children}</MContext.Provider>;
};
