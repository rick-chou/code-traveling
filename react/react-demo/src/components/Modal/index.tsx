import React, { useState } from 'react'
import Iconfont from '@components/Iconfont'
import { Button, Modal, Space } from 'antd'

const index = (props: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
    console.log('ok')
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    console.log('cancel')
  }

  return (
    <div>
      <h2>
        Modal
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Space direction="vertical">
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Space>
    </div>
  )
}

export default index
