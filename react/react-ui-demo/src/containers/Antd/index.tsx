import React from 'react'

import Temp from '@containers/Temp'

import Affix from '@/components/Antd/Step'
import Breadcrumb from '@/components/Antd/Breadcrumb'
import Carousel from '@/components/Antd/Carousel'
import Date from '@/components/Antd/Date'
import Rate from '@/components/Antd/Rate'
import Space from '@/components/Antd/Space'
import Tab from '@/components/Antd/Tab'
import Transfer from '@/components/Antd/Transfer'
import Progress from '@/components/Antd/Progress'
import Spin from '@/components/Antd/Spin'
import Skeleton from '@/components/Antd/Skeleton'
import Notification from '@/components/Antd/Notification'
import Modal from '@/components/Antd/Modal'
import Drawer from '@/components/Antd/Drawer'
import GroupHeaderTable from '@/components/Antd/Table/01_表头分组'
import DynamicTable from '@/components/Antd/Table/02_列不固定'
import ScrollTable from '@/components/Antd/Table/03_滚动条'

function App() {
  return (
    <Temp>
      <GroupHeaderTable full={true} />
      <DynamicTable full={true} />
      <ScrollTable full={true} />
      <Affix />
      <Breadcrumb />
      <Carousel />
      <Date />
      <Rate />
      <Space />
      <Tab />
      <Transfer />
      <Progress />
      <Spin />
      <Skeleton />
      <Notification />
      <Modal />
      <Drawer />
    </Temp>
  )
}

export default App
