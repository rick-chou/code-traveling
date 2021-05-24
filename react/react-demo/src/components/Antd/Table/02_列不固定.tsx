import React from 'react'
import Iconfont from '@/components/Demo/Iconfont'
import _ from 'lodash'
import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import Mock from 'mockjs'

type ITable = {
  id: number
  class: string
  teacher: string
  school: string
  firstNum: number
  secondNum: number
  thirdNum: number
  firstScale: number
  secondScale: number
  thirdScale: number
}

const index = (props: any) => {
  const columns: ColumnsType<ITable> = [
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
      title: '一批次人数',
      dataIndex: 'firstNum',
      key: 'firstNum',
      sorter: (a, b) => a.firstNum - b.firstNum,
    },
    {
      title: '一批次比例',
      dataIndex: 'firstScale',
      key: 'firstScale',
      sorter: (a, b) => a.firstScale - b.firstScale,
    },
    {
      title: '二批次人数',
      dataIndex: 'secondNum',
      key: 'secondNum',
      sorter: (a, b) => a.secondNum - b.secondNum,
    },
    {
      title: '二批次比例',
      dataIndex: 'secondScale',
      key: 'secondScale',
      sorter: (a, b) => a.secondScale - b.secondScale,
    },
    {
      title: '三批次人数',
      dataIndex: 'thirdNum',
      key: 'thirdNum',
      sorter: (a, b) => a.thirdNum - b.thirdNum,
    },
    {
      title: '三批次比例',
      dataIndex: 'thirdScale',
      key: 'thirdScale',
      sorter: (a, b) => a.thirdScale - b.thirdScale,
    },
  ]

  const { data } = Mock.mock({
    'data|1-100': [
      {
        'id|+1': 1,
        'class|1': ['高一（1）班', '高一（2）班', '高二（1）班', '高二（2）班'],
        'teacher|1': ['lucky', 'chou', 'ramires'],
        'school|1': ['滨江一中', '滨江二中', '滨江三中', '滨河一中', '西湖一中'],
        'firstNum|1-100': 1,
        'secondNum|1-100': 1,
        'thirdNum|1-100': 1,
        'firstScale|1-99.1-1': 1,
        'secondScale|1-99.1-1': 1,
        'thirdScale|1-99.1-1': 1,
      },
    ],
  })

  return (
    <div>
      <h2>
        Table
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Table columns={columns} dataSource={_.shuffle(data)} bordered size="large" rowKey={(record) => record.id} />
    </div>
  )
}

export default index
