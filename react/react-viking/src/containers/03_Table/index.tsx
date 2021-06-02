import React from 'react';
import { classRanking } from '@components/Table/config'
import Table from '@components/Table'

const index = () => {

  const mockData = new Array(100).fill({
    objectId: 1,
    objectName: '高一（1）班高一（1）班高一（1）班高一（1）班',
    teacherName: '龙龙龙龙龙龙龙龙龙龙龙龙龙龙龙龙龙龙',
    schoolName: '滨河一中滨河一中滨河一中滨河一中滨河一中滨河一中',
    tenNum: 10,
    fifthNum: 20,
    oneHundredNum: 30,
    twoHundredNum: 10,
  });

  return (
    <div style={{ padding: "100px" }}>
      <Table columns={classRanking} dataSource={mockData} />
    </div>
  );
}

export default index;
