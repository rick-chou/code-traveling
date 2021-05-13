import React from 'react'
import Iconfont from '@components/Iconfont'
import { Progress, Space } from 'antd'

const index = (props: any) => {
  return (
    <div>
      <h2>
        Progress
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>

      <Space size="large" direction="vertical">
        <div>
          <Progress percent={30} />
          <Progress percent={50} status="active" />
          <Progress percent={70} status="exception" />
          <Progress percent={100} />
          <Progress percent={50} showInfo={false} />
        </div>

        <div>
          <Progress type="circle" percent={75} />
          <Progress type="circle" percent={70} status="exception" />
          <Progress type="circle" percent={100} />
        </div>
      </Space>
    </div>
  )
}

export default index
