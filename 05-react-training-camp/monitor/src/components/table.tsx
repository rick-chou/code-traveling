import { useContext } from 'react';
import { Button, Card, Table } from 'antd';
import moment from 'moment';

import { ColumnsType } from 'antd/lib/table';
import { MContext } from '../core/context';
import { IStackItem } from '../types/monitor';

import 'antd/dist/antd.css';

const columns: ColumnsType<IStackItem> = [
  {
    title: '种类',
    width: 100,
    dataIndex: 'category',
    key: 'category',
    fixed: 'left',
  },
  {
    title: '类型',
    width: 100,
    dataIndex: 'type',
    key: 'type',
    fixed: 'left',
  },
  { title: '描述', dataIndex: 'data', key: 'desc' },
  { title: '等级', dataIndex: 'level', key: 'level' },
  {
    title: '时间',
    key: 'time',
    dataIndex: 'time',
    fixed: 'right',
    width: 200,
    render: (text: number) => moment(text).format('YYYY-MM-DD hh:mm:ss'),
  },
];

const MTable = () => {
  const data = useContext(MContext).get();
  return (
    <Card
      style={{
        borderRadius: '0.5rem',
      }}
      hoverable
    >
      <div className="rounded-lg overflow-hidden">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl">MTable</h1>
          <Button type="primary" shape="circle" danger onClick={() => null}>
            X
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 900 }}
          pagination={{ pageSize: 5 }}
          rowKey={(record) => record.time}
          bordered
        />
      </div>
    </Card>
  );
};

export default MTable;
