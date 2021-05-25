import React, { useState, useEffect } from 'react'
import { Liquid } from '@ant-design/charts'
import Iconfont from '@/components/Demo/Iconfont'

const DemoLiquid: React.FC = (props: any) => {
  var config = {
    percent: 0.25,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: { length: 128 },
  }
  return (
    <>
      <h2>
        Breadcrumb
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Liquid {...config} />
    </>
  )
}

export default DemoLiquid
