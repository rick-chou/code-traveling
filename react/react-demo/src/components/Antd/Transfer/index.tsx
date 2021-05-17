import React, { useState, useEffect } from 'react'
import Iconfont from '@/components/Demo/Iconfont'
import { Space, Transfer } from 'antd'

const index = (props: any) => {
  const [targetKeys, setTargetKeys] = useState<Array<any>>([])
  const [mockData, setMockData] = useState<Array<any>>([])

  useEffect(() => {
    const getMock = () => {
      const targetKeys = []
      const mockData = []
      for (let i = 0; i < 20; i++) {
        const data = {
          key: i.toString(),
          title: `content${i + 1}`,
          description: `description of content${i + 1}`,
          chosen: Math.random() * 2 > 1,
        }
        if (data.chosen) {
          targetKeys.push(data.key)
        }
        mockData.push(data)
      }
      setTargetKeys(targetKeys)
      setMockData(mockData)
    }
    getMock()
  }, [])

  const handleChange = (targetKeys: Array<string>, direction: string, moveKeys: Array<string>) => {
    setTargetKeys(targetKeys)
    console.log(targetKeys, direction, moveKeys)
  }

  const handleSearch = (direction: string, value: string) => {
    console.log(direction, value)
  }

  return (
    <div>
      <h2>
        Transfer
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Space>
        <Transfer dataSource={mockData} showSearch targetKeys={targetKeys} onChange={handleChange} onSearch={handleSearch} render={(item) => item.title} />
      </Space>
    </div>
  )
}

export default index
