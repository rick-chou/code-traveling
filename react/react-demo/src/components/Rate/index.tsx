import { Rate } from 'antd'
import React from 'react'
import Iconfont from '@components/Iconfont'

const index = (props: any) => {
  const handleRateChange = (rate: number) => {
    console.log(rate)
  }

  return (
    <div>
      <h2>
        Rate
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Rate onChange={handleRateChange} />
      <br />
      <Rate allowClear={false} />
      <br />
      <Rate allowHalf count={7} />
      <br />
      <Rate character={'A'} allowHalf onChange={handleRateChange} />
    </div>
  )
}

export default index
