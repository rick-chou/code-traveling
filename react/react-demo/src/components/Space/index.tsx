import { Button, Slider, Space } from 'antd'
import React, { useState } from 'react'
import Iconfont from '@components/Iconfont'

const index = (props: any) => {
  const [size, setSize] = useState(0)
  return (
    <div>
      <h2>
        Space
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Slider value={size} onChange={(value) => setSize(value)} />
      <br />
      <br />
      <Space size={size}>
        <Button type="primary" size={'small'}>
          Primary
        </Button>
        <Button size={'small'}>Default</Button>
        <Button type="dashed" size={'small'}>
          Dashed
        </Button>
        <Button type="link" size={'small'}>
          Link
        </Button>
      </Space>
    </div>
  )
}

export default index
