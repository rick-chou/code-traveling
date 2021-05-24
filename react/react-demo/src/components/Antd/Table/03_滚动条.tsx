import React from 'react'
import Iconfont from '@/components/Demo/Iconfont'
import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import Mock from 'mockjs'

type ITable = {
  rank: number
  class: string
  teacher: string
  school: string
  classAvg: number
  chinese: number
  math: number
  physical: number
  biological: number
}

const index = (props: any) => {
  const columns: ColumnsType<ITable> = [
    {
      title: '排名',
      dataIndex: 'rank',
      key: 'rank',
      render: (item, record) => {
        if (item <= 3) {
          return <div style={{ borderRadius: '50%', width: '30px', height: '30px', background: '#ccc', textAlign: 'center', lineHeight: '30px' }}>{item}</div>
        }
        return item
      },
    },
    {
      title: '班级',
      dataIndex: 'class',
      key: 'class',
    },
    {
      title: '班主任',
      dataIndex: 'teacher',
      key: 'teacher',
    },
    {
      title: '所属学校',
      dataIndex: 'school',
      key: 'school',
    },
    {
      title: '班级平均分',
      dataIndex: 'classAvg',
      key: 'classAvg',
      sorter: (a, b) => a.classAvg - b.classAvg,
    },
    {
      title: '语文',
      dataIndex: 'chinese',
      key: 'chinese',
      sorter: (a, b) => a.chinese - b.chinese,
    },
    {
      title: '数学',
      dataIndex: 'math',
      key: 'math',
      sorter: (a, b) => a.math - b.math,
    },
    {
      title: '物理',
      dataIndex: 'physical',
      key: 'physical',
      sorter: (a, b) => a.physical - b.physical,
    },
    {
      title: '生物',
      dataIndex: 'biological',
      key: 'biological',
      sorter: (a, b) => a.biological - b.biological,
    },
  ]

  const { data } = Mock.mock({
    'data|1-100': [
      {
        'rank|+1': 1,
        'class|1': ['高一（1）班', '高一（2）班', '高二（1）班', '高二（2）班'],
        'teacher|1': ['lucky', 'chou', 'ramires'],
        'school|1': ['滨江一中', '滨江二中', '滨江三中', '滨河一中', '西湖一中'],
        'classAvg|600-800': 1,
        'chinese|1-99.1-1': 1,
        'math|1-99.1-1': 1,
        'physical|1-99.1-1': 1,
        'biological|1-99.1-1': 1,
      },
    ],
  })

  return (
    <div>
      <h2>
        Table
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Table columns={columns} dataSource={data} bordered size="large" rowKey={(record) => record.rank} />
    </div>
  )
}

export default index
