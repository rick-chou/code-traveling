import React from 'react'
import Iconfont from '@/components/Demo/Iconfont'
import { Skeleton } from 'antd'

const index = (props: any) => {
  return (
    <div>
      <h2>
        Skeleton
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Skeleton active avatar paragraph={{ rows: 4 }} />
    </div>
  )
}

export default index
