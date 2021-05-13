import { Tabs } from 'antd'
import React from 'react'
import Iconfont from '@components/Iconfont'

const { TabPane } = Tabs

const index = (props: any) => {
  const handleTabsChange = (activeKey: string) => {
    console.log(activeKey)
  }

  return (
    <div>
      <h2>
        Tab
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Tabs defaultActiveKey="1" onChange={handleTabsChange} centered>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2" disabled>
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  )
}

export default index
