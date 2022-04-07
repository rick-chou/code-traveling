import React, { useEffect, useState } from 'react';
import { M } from './instance';
import { MEmitter } from './subscribe';
import { EventListener } from './event-listener';

export const MContext = React.createContext<Array<ReportItem>>([]);

export const MEvent = new MEmitter();

interface MProps {
  children: React.ReactNode;
}

MContext.displayName = 'MContext';

window.MEventListener = EventListener;
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
