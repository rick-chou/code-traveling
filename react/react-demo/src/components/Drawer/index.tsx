import React, { useState } from 'react'
import Iconfont from '@components/Iconfont'
import { Button, Drawer, Space } from 'antd'

const index = (props: any) => {
  const [visible, setVisible] = useState(false)
  const onClose = () => {
    setVisible(false)
    console.log('close')
  }
  return (
    <div>
      <h2>
        Drawer
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Space direction="vertical">
        <Button type="primary" onClick={() => setVisible(true)}>
          Open
        </Button>
        <Drawer title="Basic Drawer" placement="right" closable={false} onClose={onClose} visible={visible} getContainer={false} style={{ position: 'absolute' }}>
          <p>Some contents...</p>
        </Drawer>
      </Space>
    </div>
  )
}

export default index
