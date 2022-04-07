import { useContext } from 'react';
import { Button, Table } from 'antd';
import moment from 'moment';

import { M } from '@/sdk/instance';
import { ColumnsType } from 'antd/lib/table';
import { MContext } from '@/sdk';

const columns: ColumnsType<ReportItem> = [
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
  const data = useContext(MContext);
  console.log(data);
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl py-6 bd">MTable</h1>
        <Button type="primary" shape="circle" danger onClick={M.clear}>
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
  );
};

export default MTable;
