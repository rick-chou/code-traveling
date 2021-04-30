import React, { useState } from 'react'
import { Statistic, Button } from 'antd'
import { LikeOutlined } from '@ant-design/icons'

const Counter: React.FunctionComponent = () => {
  const [count, setCount] = useState<number>(0)

  const addCountSync = () => {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  const addCountAsync = () => {
    setCount((preState) => preState + 1)
    setCount((preState) => preState + 1)
    setCount((preState) => preState + 1)
    setCount((preState) => preState + 1)
  }

  return (
    <>
      <Statistic value={count} prefix={<LikeOutlined />} />
      <Button onClick={() => setCount(count + 1)}>ADD COUNTER</Button>
      <Button onClick={() => addCountSync()}>ADD COUNTER SYNC</Button>
      <Button onClick={() => addCountAsync()}>ADD COUNTER ASYNC</Button>
    </>
  )
}

export default Counter
