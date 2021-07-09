import React from 'react'

import Table from '@components/table'
import { batchLine } from '@components/table/config'

const data = new Array(100).fill({
  schoolName: '滨江一中滨江一中滨江一中滨江一中滨江一中滨江一中滨江一中',
  teacherName: '龙龙龙龙龙龙龙龙龙龙龙龙龙龙龙龙龙龙',
  firstBatchNum: 40,
  firstBatchPro: 40,
  secondBatchNum: 40,
  secondBatchPro: 40,
  thirdBatchNum: 40,
  thirdBatchPro: 40,
  fourthBatchNum: 40,
  fourthBatchPro: 40,
  classId: 1,
  className: '高二（1）班高二（1）班高二（1）班高二（1）班',
});

const App = () => {
  return (
    <div>
      <Table columns={batchLine} dataSource={data} />
    </div>
  )
}

export default App
