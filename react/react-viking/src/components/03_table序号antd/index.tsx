import { Table } from 'antd';
import React from 'react';

const columns = [
  {
    title: 'id',
    render: (text, record, index) => index + 1
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Chinese Score',
    dataIndex: 'chinese',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'English Score',
    dataIndex: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
  {
    key: '5',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
  {
    key: '6',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
  {
    key: '7',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
  {
    key: '8',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
  {
    key: '9',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
  {
    key: '10',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
  {
    key: '11',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
  {
    key: '12',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
}



const index = () => {
  return (
    <div style={{ padding: 50 }}>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}

export default index;
