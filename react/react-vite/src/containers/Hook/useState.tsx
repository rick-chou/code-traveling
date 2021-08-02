import React, { useState } from 'react'
import { Statistic, Button } from 'antd'
import { LikeOutlined } from '@ant-design/icons'

const Counter: React.FunctionComponent = () => {
  const [count, setCount] = useState<number>(0)

  // 普通调用
  const addCount = () => {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }
  // 回调函数
  const addCountByCallback = () => {
    setCount((preState) => preState + 1)
    setCount((preState) => preState + 1)
    setCount((preState) => preState + 1)
    setCount((preState) => preState + 1)
  }

  // 定时器
  const addCountBySetTimeOut = () => {
    setTimeout(() => {
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
    }, 0)
  }

  // Promise
  const addCountByPromise = () => {
    Promise.resolve().then(() => {
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
    })
  }

  return (
    <>
      <Statistic value={count} prefix={<LikeOutlined />} />
      <Button onClick={addCount}>普通调用</Button>
      <Button onClick={addCountByCallback}>回调函数</Button>
      <Button onClick={addCountBySetTimeOut}>定时器</Button>
      <Button onClick={addCountByPromise}>Promise</Button>
    </>
  )
}

export default Counter
