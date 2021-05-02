/**
 * useMemo
 * 有一个父组件，其中包含子组件，子组件接收一个对象作为props；
 * 通常而言，如果父组件更新了，子组件也会执行更新；但是大多数场景下，更新是没有必要的，
 * 我们可以借助useMemo来返回函数，然后把这个对象作为props传递给子组件；这样，子组件就能避免不必要的更新
 * useMemo(()=>({}),[])
 * 第一个参数 是一个函数 返回一个对象
 * 第二个参数 是一个数组 包含了这个对象的依赖项 只有依赖项更新 函数才会重新执行
 */

import { Button } from 'antd'
import React, { useState, useMemo, memo } from 'react'

interface IProps {
  age?: number
  stu?: { name: string; age: number }
}

// 接收的是基本数据类型 memo生效
const Child = memo(({ age }: IProps) => {
  console.log('props为基本数据类型的子组件渲染了')
  return (
    <div>
      <h1>props为基本数据类型</h1>
      <h2>age:{age}</h2>
    </div>
  )
})

// 父组件中没有使用useMemo 子组件的memo失效
const Child1 = memo(({ stu }: IProps) => {
  console.log('props为引用数据类型 未使用useMemo')
  return (
    <div>
      <h1>props为引用数据类型 未使用useMemo</h1>
      <h2>
        {stu?.name}:{stu?.age}
      </h2>
    </div>
  )
})

// 父组件中使用了useMemo 子组件的memo生效
const Child2 = memo(({ stu }: IProps) => {
  console.log('props为引用数据类型 使用useMemo')
  return (
    <div>
      <h1>props为引用数据类型 使用useMemo</h1>
      <h2>
        {stu?.name}:{stu?.age}
      </h2>
    </div>
  )
})

const Parent = () => {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(18)
  const [name, setName] = useState('lucky')

  const stu1 = {
    name,
    age,
  }

  const stu2 = useMemo(
    () => ({
      name,
      age,
    }),
    [age]
  )

  return (
    <div>
      <Child age={age} />
      <Child1 stu={stu1} />
      <Child2 stu={stu2} />
      <h1>{count}</h1>
      <Button onClick={() => setCount(count + 1)}>change count</Button>
      <Button onClick={() => setAge(age + 1)}>change age</Button>
      <Button onClick={() => setName('lucky chou')}>change name</Button>
    </div>
  )
}

export default Parent
