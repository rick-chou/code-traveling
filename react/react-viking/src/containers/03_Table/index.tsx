import React from 'react'
import { classRanking } from '@components/Table/config'
import Table from '@components/Table'
import Mock from 'mockjs'
const index = () => {
  const { data } = Mock.mock({
    'data|1-100': [
      {
        'objectId|+1': 1,
        'objectName|1': ['高一（1）班', '高一（2）班', '高二（1）班', '高二（2）班'],
        'teacherName|1': ['lucky', 'chou', 'ramires'],
        'schoolName|1': ['滨江一中', '滨江二中', '滨江三中', '滨河一中', '西湖一中'],
        'tenNum|1-100': 1,
        'fifthNum|1-99.1-1': 1,
        'oneHundredNum|1-99.1-1': 1,
        'twoHundredNum|1-99.1-1': 1,
      },
    ],
  })

  const handleTableChange = (pagination, filters, sorter) => {
    console.log(sorter.columnKey)
  }

  return (
    <div style={{ padding: '100px' }}>
      <Table columns={classRanking} dataSource={data} rowKey={(record: any) => record.objectId} handleTableChange={handleTableChange} />
    </div>
  )
}

export default index
