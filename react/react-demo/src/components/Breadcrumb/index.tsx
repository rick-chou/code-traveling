import React from 'react'
import Iconfont from '@components/Iconfont'
import { Breadcrumb } from 'antd'

const index = (props: any) => {
  return (
    <div>
      <h2>
        Breadcrumb
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">About</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Article</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Contact</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default index
