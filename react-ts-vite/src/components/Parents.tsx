import React, { useState } from 'react'
import FunChildren from '@/components/FunChildren'
import ClassChildren from '@/components/ClassChildren'
import { Button } from 'antd'

const Parents = () => {
  const [obj, setObj] = useState<Array<number>>([])
  const [num, setNum] = useState<number>(0)

  return (
    <>
      <FunChildren obj={obj} num={num} />
      <ClassChildren obj={obj} num={num} />
      <br />
      <Button onClick={() => setObj([...obj, 0])}>Change obj</Button>
      <Button onClick={() => setNum(num + 1)}>Change number</Button>
    </>
  )
}

export default Parents
