/**
 * useRef
 * 获取结点
 * 保存数据
 */

import { Button, Input } from 'antd'
import React, { FC, useRef, useState } from 'react'

const App: FC = () => {
  const [count, setCount] = useState<number>(0)
  const numRef = useRef<number>(count)
  const domRef = useRef<HTMLInputElement | null>(null)
  const antdRef = useRef<Input | null>(null)
  const showRef = () => {
    console.log(domRef.current, antdRef.current)
  }

  return (
    <div>
      <input defaultValue="h5" ref={domRef} />
      <Input defaultValue="antd" ref={antdRef} style={{ width: 200 }}></Input>
      <Button onClick={() => showRef()}>showRef</Button>

      <p>count : {count}</p>

      {/* numRef的值始终引用最初的那个count */}
      <p>numRef : {numRef.current}</p>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  )
}

export default App
