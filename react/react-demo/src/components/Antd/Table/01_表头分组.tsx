import React from 'react'
import Iconfont from '@/components/Demo/Iconfont'
import _ from 'lodash'
import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'

/**
 * @param name 学生姓名
 * @param id 学号
 */
type ITable = {
  /** name : student name */
  name: string
  /** id : student id */
  id: number
  teacher: string
  school: string
  totalScore: number
  rank: number
  level: string
  score: number
  singleRank: number
  singleLevel: string
}

const index = (props: any) => {
  const columns: ColumnsType<ITable> = [
    {
      title: '学生信息',
      children: [
        {
          title: '姓名',
          dataIndex: 'name',
          fixed: 'left',
          key: 'name',
        },
        {
          title: '学号',
          dataIndex: 'id',
          fixed: 'left',
          key: 'id',
        },
        {
          title: '班主任',
          dataIndex: 'teacher',
          fixed: 'left',
          key: 'teacher',
        },
        {
          title: '学校',
          dataIndex: 'school',
          fixed: 'left',
          key: 'school',
        },
      ],
    },
    {
      title: '全部科目',
      sorter: (a, b) => a.totalScore - b.totalScore,
      children: [
        {
          title: '卷面总分',
          dataIndex: 'totalScore',
          key: 'totalScore',
        },
        {
          title: '联考名次',
          dataIndex: 'rank',
          key: 'rank',
        },
        {
          title: '批次',
          dataIndex: 'level',
          key: 'level',
        },
      ],
    },
    {
      title: '语文',
      sorter: (a, b) => a.score - b.score,
      children: [
        {
          title: '卷面分数',
          dataIndex: 'score',
          key: 'score',
        },
        {
          title: '联考名次',
          dataIndex: 'singleRank',
          key: 'singleRank',
        },
        {
          title: '分段',
          dataIndex: 'singleLevel',
          key: 'singleLevel',
        },
      ],
    },
    {
      title: '操作',
      children: [
        {
          title: '----',
          dataIndex: 'operation',
          fixed: 'right',
          render: () => <a>查看报告</a>,
        },
      ],
    },
  ]

  const data: ITable[] = []
  for (let i = 0; i < 100; i++) {
    data.push({
      // key: i,
      name: 'chou',
      id: i + 1,
      teacher: 'Lucky',
      school: 'Laker',
      totalScore: Math.trunc(Math.random() * 100),
      rank: i + 1,
      level: '一批次',
      score: Math.trunc(Math.random() * 100),
      singleRank: i + 1,
      singleLevel: '优秀',
    })
  }

  return (
    <div>
      <h2>
        Table
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Table columns={columns} dataSource={_.shuffle(data)} bordered size="large" scroll={{ x: 'calc(700px + 50%)', y: 500 }} rowKey={(record) => record.id} />
    </div>
  )
}

export default index
