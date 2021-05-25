import { Button, Slider, Space, Switch } from 'antd'
import React, { useState } from 'react'
import Iconfont from '@/components/Demo/Iconfont'

const index = (props: any) => {
  const [size, setSize] = useState(9)
  const [isHorizontal, setIsHorizontal] = useState(true)
  const handleChange = (state: boolean) => {
    setIsHorizontal(state)
  }
  return (
    <div>
      <h2>
        Space
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Slider value={size} onChange={(value) => setSize(value)} />
      <Switch checkedChildren="horizontal" unCheckedChildren="vertical" defaultChecked onChange={handleChange} />
      <br />
      <br />
      <Space size={size} direction={isHorizontal ? 'horizontal' : 'vertical'}>
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
