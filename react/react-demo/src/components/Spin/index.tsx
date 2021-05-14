import React from 'react'
import Iconfont from '@components/Iconfont'
import { Space, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
const index = (props: any) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
  return (
    <div>
      <h2>
        Space
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Space direction="vertical" size="large">
        <Spin />
        <Spin indicator={antIcon} />
        <Spin indicator={antIcon} spinning={false} />
      </Space>
    </div>
  )
}

export default index
