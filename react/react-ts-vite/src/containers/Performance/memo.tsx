import React, { FC, useEffect } from 'react'

const Child: FC = () => {
  useEffect(() => {
    console.log('子组件更新了')
  }, [])

  return <div></div>
}

const Parent: FC = () => {
  return <Child />
}

export default Parent
