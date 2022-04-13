import { MContext } from './context';
import type { MInstance } from './instance';

export { init } from './init';

interface MProps {
  children: React.ReactNode;
  instance: MInstance;
}

export const MProvider = ({ children, instance }: MProps) => {
  return <MContext.Provider value={instance}>{children}</MContext.Provider>;
};
