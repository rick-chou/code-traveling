import React from 'react';
import JSONTree from 'react-json-tree';
import { theme } from '@/config';

interface IProps {
  data: any;
}

export default ({ data }: IProps) => <JSONTree data={data} theme={theme} />;
