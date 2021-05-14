import React from 'react'
import Iconfont from '@components/Iconfont'
import { Button, notification, Space } from 'antd'

const index = (props: any) => {
  const openNotification = (placement: any = 'topRight') => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement,
      onClick: () => {
        console.log('Notification Clicked!')
      },
    })
  }
  const openNotificationWithIcon = (type: string) => {
    notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    })
  }

  return (
    <div>
      <h2>
        Notification
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Space direction="vertical">
        <div>
          <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
          <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
          <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
          <Button onClick={() => openNotificationWithIcon('error')}>Error</Button> <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
        </div>
        <div>
          <Button type="primary" onClick={() => openNotification('topLeft')}>
            topLeft
          </Button>
          <Button type="primary" onClick={() => openNotification('topRight')}>
            topRight
          </Button>
          <Button type="primary" onClick={() => openNotification('bottomLeft')}>
            bottomLeft
          </Button>
          <Button type="primary" onClick={() => openNotification('bottomRight')}>
            bottomRight
          </Button>
        </div>
      </Space>
    </div>
  )
}

export default index
