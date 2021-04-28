import React, { useEffect } from 'react'
import { Tag } from 'antd'

interface IProps {
  obj: Array<number>
  num: number
}

const FunChildren = (props: IProps) => {
  const { obj, num } = props
  useEffect(() => {
    console.log('子组件更新了')
  }, [])
  return (
    <div>
      {obj.map((item, idx) => {
        return <Tag key={idx}>{item}</Tag>
      })}
      <h1>{num}</h1>
    </div>
  )
}

export default FunChildren
