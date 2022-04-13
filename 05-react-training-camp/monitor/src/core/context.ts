import React from 'react';
import type { MInstance } from './instance';

export const MContext = React.createContext<MInstance>({} as MInstance);

MContext.displayName = 'MContext';
